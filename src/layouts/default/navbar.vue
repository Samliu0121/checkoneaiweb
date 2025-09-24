<template>
  <v-app-bar color="primary" dark>
    <v-icon class="ml-4">mdi-coffee</v-icon>
    <v-toolbar-title class="ml-2">{{ t('page.index.title') }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/order" class="nav-btn">{{ t('btn.order') }}</v-btn>
    <v-btn to="/admin" class="nav-btn">{{ t('btn.admin') }}</v-btn>
    <v-btn icon @click="cartDrawer = !cartDrawer">
      <v-badge :content="cartStore.totalItems" color="error">
        <v-icon class="nav-icon">mdi-cart</v-icon>
      </v-badge>
    </v-btn>
  </v-app-bar>
  <OrderShoppingCart v-model="cartDrawer" />
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useCartStore } from '@/stores/cartStore';
import OrderShoppingCart from '@/components/order/OrderShoppingCart.vue';

const { t } = useI18n();
const cartStore = useCartStore();
const cartDrawer = ref(false);

// When the cart is empty, totalItems will be 0. 
// The v-badge will display '0' when the cart is empty.
</script>

<style scoped>
.nav-btn {
  font-size: 1.1em; 
}

.nav-icon {
  font-size: 1.1em;
}
</style>
