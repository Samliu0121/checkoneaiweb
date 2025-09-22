<template>
  <v-list>
    <v-list-item
      v-for="category in categories"
      :key="category.id"
      @click="$emit('selectCategory', category.id)"
      :class="{ 'v-list-item--active': selectedCategory === category.id }"
    >
      <v-list-item-title>{{ category.name }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
  selectedCategory: {
    type: String,
    required: true,
  },
});

defineEmits(['selectCategory']);
</script>

<style scoped>
.v-list-item--active {
  background-color: $primary-color;
  color: white;
}
</style>
