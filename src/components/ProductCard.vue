<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="align-end text-white"
      height="200"
      :src="product.image"
      cover
    >
    </v-img>

    <v-card-title>{{ product.name }}</v-card-title>

    <v-card-subtitle class="pt-4">
      特色風味小火鍋
    </v-card-subtitle>

    <v-card-text>
      <div>NT${{ product.price }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="secondary" @click="addToCart">
        {{ t('btn.addToCart') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
  product: Object,
});

const emit = defineEmits(['add-to-cart']);

const addToCart = () => {
  emit('add-to-cart', props.product);
};
</script>
