<template>
  <v-list nav role="navigation">
    <v-list-item
      v-for="category in categories"
      :key="category.categoryId"
      :value="category.categoryId"
      :active="modelValue === category.categoryId"
      @click="selectCategory(category.categoryId)"
      rounded="lg"
      color="primary"
    >
      {{ category.categoryName }}
    </v-list-item>
  </v-list>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true,
    default: () => [],
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const selectCategory = (categoryId) => {
  emit('update:modelValue', categoryId);
};
</script>

<style scoped>
</style>
