<template>
  <v-app-bar app color="primary" dark>
    <v-icon class="ml-4">mdi-coffee</v-icon>
    <v-toolbar-title class="ml-2">{{ t('page.index.title') }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/order">{{ t('btn.order') }}</v-btn>
    <v-btn to="/reservation">{{ t('btn.reservation') }}</v-btn>
    <v-btn to="/admin">{{ t('btn.admin') }}</v-btn>
    <v-btn icon @click="cartDrawer = !cartDrawer">
      <v-badge :content="cartStore.totalItems" color="error">
        <v-icon>mdi-cart</v-icon>
      </v-badge>
    </v-btn>
  </v-app-bar>
  <shopping-cart v-model="cartDrawer" />
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useCartStore } from '@/stores/cartStore';
import ShoppingCart from '@/components/order/ShoppingCart.vue';

const { t } = useI18n();
const cartStore = useCartStore();
const cartDrawer = ref(false);
</script>

<style scoped>
</style>
