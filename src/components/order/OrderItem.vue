<template>
  <v-card>
    <v-img :src="item.image" height="200px"></v-img>
    <v-card-title>{{ item.name }}</v-card-title>
    <v-card-subtitle>${{ item.price }}</v-card-subtitle>
    <v-card-text>{{ item.description }}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="addToCart">{{ t('btn.addToCart') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useCartStore } from '@/stores/cartStore';

const { t } = useI18n();
const cartStore = useCartStore();

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const addToCart = () => {
  cartStore.addItem(props.item);
};
</script>
