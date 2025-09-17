<template>
  <v-card class="pa-4">
    <v-list-item-title class="text-h6 mb-4">{{ t('label.classification') }}</v-list-item-title>
    <v-list dense nav>
      <v-list-item
        v-for="category in categories"
        :key="category.id"
        @click="selectCategory(category.id)"
        :class="{ 'v-list-item--active': category.id === selectedCategory }"
        color="secondary"
      >
        <v-list-item-title>{{ category.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  categories: Array,
  selectedCategory: String,
});

const emit = defineEmits(['update:selectedCategory']);

const selectCategory = (categoryId) => {
  emit('update:selectedCategory', categoryId);
};
</script>

<style scoped>
.v-list-item--active {
  background-color: #fa320f;
  color: white;
}
</style>
