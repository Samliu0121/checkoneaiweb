<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>{{ t('page.index.title') }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="text-center">
            <v-btn to="/order" class="ma-2" color="secondary">{{ t('btn.order') }}</v-btn>
            <v-btn to="/reservation" class="ma-2" color="secondary">{{ t('btn.reservation') }}</v-btn>
            <v-btn to="/admin" class="ma-2" color="secondary">{{ t('btn.admin') }}</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
