<template>
  <v-card class="pa-4">
    <v-card-title class="text-h6 mb-4">{{ t('label.myCart') }}</v-card-title>
    <v-card-text v-if="cart.length === 0">{{ t('label.emptyCart') }}</v-card-text>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="d-flex justify-space-between align-center mb-2">
        <span>{{ item.name }} x {{ item.quantity }}</span>
        <span>NT${{ item.price * item.quantity }}</span>
      </div>
      <v-divider class="my-2"></v-divider>
      <div class="d-flex justify-space-between font-weight-bold">
        <span>{{ t('label.total') }}:</span>
        <span>NT${{ total }}</span>
      </div>
      <v-alert type="success" class="mt-4">{{ t('label.promo') }}</v-alert>
      <v-alert type="info" class="mt-2">{{ t('label.promo2') }}</v-alert>
    </div>
    <v-btn color="primary" block class="mt-4" :disabled="cart.length === 0">{{ t('btn.checkout') }}</v-btn>
  </v-card>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  cart: Array,
});

const total = computed(() => {
  return props.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
});
</script>
