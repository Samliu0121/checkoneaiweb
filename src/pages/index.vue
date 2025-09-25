<template>
  <v-container fluid>
    <h1 class="text-h3 text-center my-4">{{ t('page.index.title') }}</h1>
    <v-row>
      <!-- Menu Items Section -->
      <v-col cols="12" md="8">
        <v-row>
          <v-col
            v-for="item in menuItems"
            :key="item.id"
            cols="12"
            sm="6"
            lg="4"
          >
            <MenuItemCard :item="item" @add-to-cart="onAddToCart" />
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

const { t } = useI18n();
const menuItems = ref([]);

async function fetchMenuData() {
  try {
    const response = await fetch('/json/menu.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    menuItems.value = await response.json();
  } catch (error) {
    console.error('Failed to fetch menu data:', error);
  }
}

function onAddToCart(item) {
  console.log(`${item.name} was added to cart from the main page.`);
  // 可以在此處添加額外的響應邏輯，例如顯示一個提示訊息
}

onMounted(() => {
  fetchMenuData();
});
</script>

<style scoped>
/* Page-specific styles */
</style>
