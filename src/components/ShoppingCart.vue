<template>
  <v-card>
    <v-card-title>{{ t('shoppingCart.title') }}</v-card-title>
    <v-divider></v-divider>
    <v-list v-if="cartStore.items.length > 0">
      <v-list-item v-for="item in cartStore.items" :key="item.id">
        <v-list-item-title>{{ item.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.quantity }} x ${{ item.price }}</v-list-item-subtitle>
        <template v-slot:append>
          <v-btn icon="mdi-close" size="small" variant="text" @click="cartStore.removeFromCart(item.id)"></v-btn>
        </template>
      </v-list-item>
    </v-list>
    <v-card-text v-else>
      {{ t('shoppingCart.empty') }}
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="pa-4">
      <v-row>
        <v-col cols="6" class="text-h6">{{ t('shoppingCart.total') }}:</v-col>
        <v-col cols="6" class="text-h6 text-right">${{ cartStore.totalPrice }}</v-col>
        <v-col cols="12">
          <v-btn color="primary" block :disabled="cartStore.items.length === 0">{{ t('btn.checkout') }}</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useCartStore } from '@/stores/cartStore';

const { t } = useI18n();
const cartStore = useCartStore();
</script>

<style scoped>
/* Your component-specific styles here */
</style>
