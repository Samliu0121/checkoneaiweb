<template>
  <v-card>
    <v-card-title>{{ t('shoppingCart.title') }}</v-card-title>
    <v-card-text>
      <v-list v-if="cartStore.items.length > 0">
        <v-list-item v-for="item in cartStore.items" :key="item.id">
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>${{ item.price }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <p v-else>{{ t('shoppingCart.empty') }}</p>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text>
      <div class="d-flex justify-space-between">
        <strong>{{ t('shoppingCart.total') }}:</strong>
        <strong>${{ cartStore.totalPrice }}</strong>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" block>{{ t('btn.checkout') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const { t } = useI18n();
</script>

<style scoped>
/* Scoped styles for the shopping cart */
</style>
