
<template>
  <v-dialog :model-value="dialog" @update:model-value="$emit('close-dialog')" max-width="500px">
    <v-card>
      <v-card-title class="text-h5">確認您的訂單</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(item, index) in order.items" :key="index">
            <v-list-item-title>{{ item.Name }}</v-list-item-title>
            <v-list-item-subtitle>NT$ {{ item.Price }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <div class="text-h6 text-right mt-4">總計: NT$ {{ order.total }}</div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="$emit('close-dialog')">取消</v-btn>
        <v-btn color="primary" @click="$emit('checkout')">確認結帳</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  dialog: Boolean,
  order: Object,
});

defineEmits(['close-dialog', 'checkout']);
</script>

<style scoped>
</style>
