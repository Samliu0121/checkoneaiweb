<template>
  <v-container>
    <v-row>
      <v-col v-for="item in menuItems" :key="item.id" cols="12" sm="6" md="4">
        <menu-item :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MenuItem from '@/components/order/MenuItem.vue';

const menuItems = ref([]);

onMounted(async () => {
  const response = await fetch('/json/menu.json');
  const data = await response.json();
  menuItems.value = data.items;
});
</script>
