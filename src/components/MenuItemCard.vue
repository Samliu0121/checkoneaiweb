<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="item.image" height="200px" cover></v-img>
    <v-card-title>
      {{ item.name }}
    </v-card-title>
    <v-card-subtitle>
      NT$ {{ item.price }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn color="primary" variant="elevated" @click="handleAddToCart">
        {{ t('btn.addToCart') }}
      </v-btn>
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
    default: () => ({ name: '', price: 0, image: '' }),
  },
});

const emit = defineEmits(['addToCart']);

function handleAddToCart() {
  cartStore.addItem(props.item);
  emit('addToCart', props.item);
}
</script>

<style scoped>
/* 可在此處添加特定於此元件的樣式 */
</style>
