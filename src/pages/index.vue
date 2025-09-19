<template>
  <v-container fluid>
    <v-row>
      <!-- Left Column: Categories -->
      <v-col cols="12" md="2">
        <v-card>
          <v-list dense>
            <v-list-item-group v-model="selectedCategory" color="primary">
              <v-list-item v-for="category in categories" :key="category.id" :value="category.id">
                <v-list-item-content>
                  <v-list-item-title>{{ category.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>

      <!-- Middle Column: Products -->
      <v-col cols="12" md="7">
        <v-row>
          <v-col v-for="product in filteredProducts" :key="product.id" cols="12" sm="6" md="4" lg="3">
            <v-card @click="addToCart(product)">
              <v-img :src="product.image" height="150px"></v-img>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-subtitle>{{ product.subname }}</v-card-subtitle>
              <v-card-text class="text-h6 font-weight-bold">$NT {{ product.price }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- Right Column: Cart -->
      <v-col cols="12" md="3">
        <v-card>
          <v-card-title>購物車</v-card-title>
          <v-divider></v-divider>
          <v-list>
            <v-list-item v-for="(item, index) in cart" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.quantity }} x ${{ item.price }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="removeFromCart(item)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <span class="text-h6">總計: $ {{ total }}</span>
          </v-card-actions>
           <v-card-actions>
            <v-btn block color="primary" @click="checkout">結帳</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const categories = ref([]);
const products = ref([]);
const selectedCategory = ref('hotpot'); // Default selected category
const cart = ref([]);

// Fetch menu data
const fetchMenuData = async () => {
  try {
    const response = await fetch('/json/menu.json');
    const data = await response.json();
    categories.value = data.categories;
    products.value = data.products;
  } catch (error) {
    console.error('Error fetching menu data:', error);
  }
};

onMounted(() => {
  fetchMenuData();
});

const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products.value;
  }
  return products.value.filter(p => p.categoryId === selectedCategory.value);
});

const addToCart = (product) => {
  const cartItem = cart.value.find(item => item.id === product.id);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
};

const removeFromCart = (product) => {
  const index = cart.value.findIndex(item => item.id === product.id);
  if (index !== -1) {
    cart.value.splice(index, 1);
  }
};

const total = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const checkout = () => {
  // Implement checkout logic
  console.log('Checkout:', cart.value);
  alert('結帳功能尚未實作');
};
</script>

<style scoped>
.v-card {
  margin-bottom: 16px;
}
</style>
