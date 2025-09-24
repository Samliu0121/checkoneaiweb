<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-row>
          <v-col v-for="item in menu" :key="item.id" cols="12" sm="6" md="4">
            <menu-item :item="item" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <shopping-cart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MenuItem from '@/components/MenuItem.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

const menu = ref([]);

onMounted(async () => {
  const response = await fetch('/json/menu.json');
  const data = await response.json();
  menu.value = data.menu;
});
</script>
