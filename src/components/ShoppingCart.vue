<template>
  <v-card class="pa-4">
    <v-card-title class="text-h5">
      {{ t('shoppingCart.title') }}
    </v-card-title>
    <v-divider class="my-2"></v-divider>
    <v-list v-if="cartStore.totalItems > 0">
      <v-list-item
        v-for="item in cartStore.items"
        :key="item.id"
        :title="item.name"
        :subtitle="`x ${item.quantity}`"
      >
        <template v-slot:append>
          <span>NT$ {{ item.price * item.quantity }}</span>
        </template>
      </v-list-item>
    </v-list>
    <div v-else class="text-center pa-4">
      {{ t('shoppingCart.empty') }}
    </div>
    <v-divider class="my-2"></v-divider>
    <div class="d-flex justify-space-between align-center pa-2">
      <span class="text-h6">{{ t('shoppingCart.total') }}</span>
      <span class="text-h6">NT$ {{ cartStore.totalPrice }}</span>
    </div>
    <v-card-actions>
      <v-btn 
        :disabled="cartStore.totalItems === 0"
        color="primary"
        variant="elevated"
        block
        @click="handleCheckout"
      >
        {{ t('btn.checkout') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useCartStore } from '@/stores/cartStore';

const { t } = useI18n();
const cartStore = useCartStore();

function handleCheckout() {
  // 實際結帳邏輯待處理
  console.log('Proceeding to checkout with:', cartStore.items);
  alert(`結帳總金額：NT$ ${cartStore.totalPrice}`);
}
</script>

<style scoped>
/* 可在此處添加特定於此元件的樣式 */
</style>
