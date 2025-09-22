<template>
  <v-card>
    <v-card-title>購物車</v-card-title>
    <v-card-text>
      <v-list v-if="cartStore.items.length">
        <v-list-item v-for="item in cartStore.items" :key="item.productId">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ item.quantity }} x NT${{ item.price }}
          </v-list-item-subtitle>
          <template v-slot:append>
            <v-btn icon="mdi-close" size="small" variant="text" @click="cartStore.removeFromCart(item.productId)"></v-btn>
          </template>
        </v-list-item>
      </v-list>
       <p v-else>您的購物車是空的。</p>
      <v-divider class="my-4"></v-divider>
      <div class="text-right">
        <p>小計: NT${{ cartStore.subtotal.toFixed(2) }}</p>
        <p>折扣 (15%): -NT${{ cartStore.discount.toFixed(2) }}</p>
        <h3>總計: NT${{ cartStore.total.toFixed(2) }}</h3>
         <p class="bonus-message">{{ cartStore.bonusMessage }}</p>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="error" @click="cartStore.clearCart" :disabled="!cartStore.items.length">清空購物車</v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" :disabled="!cartStore.items.length">前往結帳</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();
</script>

<style scoped>
.bonus-message {
    color: #E53935; /* 醒目的紅色 */
    font-weight: bold;
    margin-top: 8px;
}
</style>
