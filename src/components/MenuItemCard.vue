<template>
  <v-card>
    <v-img :src="item.imageUrl" height="200px"></v-img>
    <v-card-title>{{ item.name }}</v-card-title>
    <v-card-subtitle>${{ item.price }}</v-card-subtitle>
    <v-card-text>{{ item.description }}</v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="onAddToCart">{{ t('btn.addToCart') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['addToCart']);
const { t } = useI18n();

const onAddToCart = (item) => {
  emit('addToCart', item);
};
</script>

<style scoped>
/* Scoped styles for the menu item card */
</style>
