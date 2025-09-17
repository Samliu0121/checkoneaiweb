<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="3">
        <CategorySidebar 
          :categories="categories"
          :selected-category.sync="selectedCategory"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col
            v-for="product in filteredProducts"
            :key="product.id"
            cols="12"
            sm="6"
            lg="4"
          >
            <ProductCard :product="product" @add-to-cart="addToCart" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <ShoppingCart :cart="cart" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import CategorySidebar from '@/components/CategorySidebar.vue';
import ProductCard from '@/components/ProductCard.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

const categories = ref([]);
const products = ref([]);
const selectedCategory = ref('hotpot');
const cart = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('/json/menu.json');
    categories.value = response.data.categories;
    products.value = response.data.products;
  } catch (error) {
    console.error('Error fetching menu:', error);
  }
});

const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products.value;
  }
  return products.value.filter(p => p.category === selectedCategory.value);
});

const addToCart = (product) => {
  const itemInCart = cart.value.find(item => item.id === product.id);
  if (itemInCart) {
    itemInCart.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
};
</script>
