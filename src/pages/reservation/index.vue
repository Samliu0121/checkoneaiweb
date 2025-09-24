<template>
  <v-container>
    <v-card max-width="600" class="mx-auto">
      <v-card-title class="text-h5">{{ t('reservation.title') }}</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field :label="t('reservation.name')" variant="outlined"></v-text-field>
          <v-text-field :label="t('reservation.phone')" variant="outlined"></v-text-field>
          <v-text-field :label="t('reservation.guests')" type="number" variant="outlined"></v-text-field>
          <v-text-field :label="t('reservation.date')" type="date" variant="outlined"></v-text-field>
          <v-text-field :label="t('reservation.time')" type="time" variant="outlined"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">{{ t('btn.submitReservation') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
