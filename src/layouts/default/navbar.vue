<template>
  <v-app-bar app color="white" elevation="1">
    <v-btn color="primary" class="ml-4">
      <v-icon left>mdi-arrow-left</v-icon>
      {{ t('btn.backToDashboard') }}
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-title class="text-center text-h5 font-weight-bold">{{ t('page.index.title') }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn outlined class="mr-2">
      <v-icon left>mdi-calendar-check</v-icon>
      {{ t('btn.reservations') }}
    </v-btn>
    <v-btn outlined>
      <v-icon left>mdi-home</v-icon>
      {{ t('btn.backToHome') }}
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.v-toolbar-title {
  flex: none;
}
</style>
