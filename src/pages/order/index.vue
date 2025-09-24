<template>
  <v-container fluid>
    <v-row>
      <!-- Category Tabs Section -->
      <v-col cols="12" md="2">
        <v-tabs v-model="activeTab" direction="vertical" color="primary">
          <v-tab
            v-for="(category, index) in orderStore.categories"
            :key="index"
            @click="orderStore.setCurrentCategory(index)"
            class="category-tab"
          >
            {{ category }}
          </v-tab>
        </v-tabs>
      </v-col>

      <!-- Menu Section -->
      <v-col cols="12" md="6">
        <v-row>
          <v-col
            v-for="product in orderStore.currentCategoryProducts"
            :key="product.Id"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="align-end text-white"
                height="200"
                :src="product.Photo"
                cover
              >
                <v-card-title class="text-white">{{ product.Name }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">
                {{ product.EngName }}
              </v-card-subtitle>

              <v-card-text>
                <div class="text-h6">NT$ {{ product.Price }}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="primary"
                  variant="tonal"
                  @click="cartStore.addToCart(product)"
                >
                  <v-icon start icon="mdi-cart-plus"></v-icon>
                  加入購物車
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- Shopping Cart Section -->
      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="500">
          <v-card-title class="text-h5 font-weight-bold">購物車</v-card-title>
          <v-list lines="two">
            <v-list-item
              v-for="(item, index) in cartStore.items"
              :key="index"
              :title="item.Name"
              :subtitle="`NT$ ${item.Price} x ${item.quantity}`"
            >
              <template v-slot:prepend>
                <v-avatar>
                  <v-img :src="item.Photo"></v-img>
                </v-avatar>
              </template>
              <template v-slot:append>
                 <div class="d-flex align-center">
                  <v-btn
                    size="x-small"
                    icon="mdi-minus"
                    variant="tonal"
                    @click="cartStore.decreaseQuantity(item)"
                  ></v-btn>
                  <span class="mx-2 font-weight-bold">{{ item.quantity }}</span>
                  <v-btn
                    size="x-small"
                    icon="mdi-plus"
                    variant="tonal"
                    @click="cartStore.addToCart(item)"
                  ></v-btn>
                </div>
              </template>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-card-text class="text-right">
            <div class="text-h5 font-weight-bold">總計: NT$ {{ cartStore.total }}</div>
          </v-card-text>
          <v-card-actions class="pa-4">
            <v-btn
              color="primary"
              @click="openCheckoutDialog"
              block
              size="large"
              :disabled="cartStore.items.length === 0"
            >
              結帳
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Checkout Dialog -->
    <OrderShoppingCart
      :dialog="checkoutDialog"
      :order="{ items: cartStore.items, total: cartStore.total }"
      @close-dialog="checkoutDialog = false"
      @checkout="handleCheckout"
    />
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useOrderStore } from '@/stores/order';
import { useCartStore } from '@/stores/cartStore';
import OrderShoppingCart from '@/components/dialog/OrderShoppingCart.vue';

const orderStore = useOrderStore();
const cartStore = useCartStore();
const checkoutDialog = ref(false);
const activeTab = ref(0);

onMounted(() => {
  orderStore.fetchProducts();
});

const openCheckoutDialog = () => {
  if (cartStore.items.length > 0) {
    checkoutDialog.value = true;
  }
};

const handleCheckout = () => {
  cartStore.clearCart();
  checkoutDialog.value = false;
};
</script>

<style scoped>
.v-card-title.text-white {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}
.category-tab {
  font-size: 1.15em;
  font-weight: 500;
}
</style>
