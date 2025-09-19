<template>
  <v-container>
    <h1 class="text-h4 mb-4">{{ t('page.index.title') }}</h1>
    <v-row>
      <!-- Menu Section -->
      <v-col cols="12" md="8">
        <v-row>
          <v-col v-for="item in menuItems" :key="item.id" cols="12" sm="6" md="4">
            <MenuItemCard :item="item" @add-to-cart="handleAddToCart" />
          </v-col>
        </v-row>
      </v-col>

      <!-- Shopping Cart Section -->
      <v-col cols="12" md="4">
        <ShoppingCart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import MenuItemCard from '@/components/MenuItemCard.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { useCartStore } from '@/stores/cart';

const { t } = useI18n();
const menuItems = ref([]);
const cartStore = useCartStore();

onMounted(async () => {
  try {
    const response = await fetch('/json/menu.json');
    const data = await response.json();
    menuItems.value = data.menuItems;
  } catch (error) {
    console.error("Failed to load menu items:", error);
  }
});

const handleAddToCart = (item) => {
  cartStore.addItem(item);
};
</script>

<style scoped>
/* Scoped styles for the index page */
</style>
