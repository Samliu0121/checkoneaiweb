<template>
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list-item>
      <v-list-item-title class="text-h6">{{ t('shoppingCart.title') }}</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-if="cartStore.items.length === 0">
        <v-list-item-title>{{ t('shoppingCart.empty') }}</v-list-item-title>
      </v-list-item>
      <v-list-item v-for="item in cartStore.items" :key="item.id">
        <v-list-item-title>{{ item.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.quantity }} x ${{ item.price }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list-item>
      <v-list-item-title class="text-h6">{{ t('shoppingCart.total') }}: ${{ cartStore.totalPrice }}</v-list-item-title>
    </v-list-item>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block color="primary">{{ t('btn.checkout') }}</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useCartStore } from '@/stores/cartStore';

const { t } = useI18n();
const cartStore = useCartStore();

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const drawer = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>
