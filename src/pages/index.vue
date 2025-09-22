<template>
  <v-container fluid>
    <v-row>
      <!-- Left: Category Menu -->
      <v-col cols="12" md="2">
        <CategoryMenu 
          :categories="menuData.categories"
          :selected-category="selectedCategory"
          @select-category="handleSelectCategory"
        />
      </v-col>

      <!-- Middle: Product Display -->
      <v-col cols="12" md="6">
        <v-row>
          <v-col 
            v-for="product in filteredProducts"
            :key="product.id"
            cols="12" sm="6" lg="4"
          >
            <ProductCard 
              :product="product"
              @add-to-cart="handleAddToCart"
            />
          </v-col>
        </v-row>
      </v-col>

      <!-- Right: Shopping Cart -->
      <v-col cols="12" md="4">
        <ShoppingCart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import CategoryMenu from '@/components/CategoryMenu.vue';
import ProductCard from '@/components/ProductCard.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

const menuData = ref({ categories: [], products: [] });
const selectedCategory = ref('hotpot'); // Default category

// Fetch menu data from public/json/menu.json
async function fetchMenuData() {
  try {
    const response = await fetch('/json/menu.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    menuData.value = await response.json();
  } catch (error) {
    console.error("Could not fetch menu data:", error);
  }
}

onMounted(() => {
  fetchMenuData();
});

const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return menuData.value.products;
  }
  return menuData.value.products.filter(p => p.categoryId === selectedCategory.value);
});

function handleSelectCategory(categoryId) {
  selectedCategory.value = categoryId;
}

function handleAddToCart(product) {
  cartStore.addToCart(product);
}

</script>

<style scoped>
/* Add any page-specific styles here */
</style>
