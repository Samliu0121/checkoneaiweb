<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-row>
          <v-col v-for="item in menuItems" :key="item.id" cols="12" sm="6" lg="4">
            <MenuItemCard :item="item" @add-to-cart="cartStore.addToCart" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <ShoppingCart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import MenuItemCard from '@/components/MenuItemCard.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

// Dummy data for menu items
const menuItems = ref([
  { id: 1, name: 'Latte', price: 120, image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 2, name: 'Cappuccino', price: 110, image: 'https://images.unsplash.com/photo-1517256064527-09c73b395155?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 3, name: 'Americano', price: 90, image: 'https://images.unsplash.com/photo-1580933219442-f022379d7122?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 4, name: 'Espresso', price: 80, image: 'https://images.unsplash.com/photo-1608713579062-bb96457912f6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 5, name: 'Mocha', price: 130, image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 6, name: 'Macchiato', price: 125, image: 'https://images.unsplash.com/photo-1594965229988-220721204856?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
]);
</script>

<style scoped>
/* Your page-specific styles here */
</style>
