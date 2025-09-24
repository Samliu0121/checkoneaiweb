<template>
  <v-card>
    <v-img :src="item.image" height="200px"></v-img>
    <v-card-title>{{ item.name }}</v-card-title>
    <v-card-subtitle>${{ item.price }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="primary" @click="addToCart">{{ t('btn.addToCart') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['addToCart']);

const addToCart = () => {
  emit('addToCart', props.item);
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>
