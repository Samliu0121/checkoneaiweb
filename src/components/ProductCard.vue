<template>
  <v-card>
    <v-img :src="product.image" height="200px"></v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-text>
      <div>{{ product.description }}</div>
      <div>NT${{ product.price }}</div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="$emit('addToCart', product)">加入購物車</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

defineEmits(['addToCart']);
</script>

<style scoped>
/* 可根據需要添加樣式 */
</style>
