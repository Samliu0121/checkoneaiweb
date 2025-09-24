<template>
  <v-layout>
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" :title="t('page.admin.nav.dashboard')" value="dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-receipt" :title="t('page.admin.nav.orders')" value="orders"></v-list-item>
        <v-list-item prepend-icon="mdi-food-variant" :title="t('page.admin.nav.menu')" value="menu"></v-list-item>
        <v-list-item prepend-icon="mdi-table-chair" :title="t('page.admin.nav.tables')" value="tables"></v-list-item>
        <v-list-item prepend-icon="mdi-chart-line" :title="t('page.admin.nav.revenue')" value="revenue"></v-list-item>
        <v-list-item prepend-icon="mdi-tag" :title="t('page.admin.nav.promotions')" value="promotions"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" :title="t('page.admin.nav.settings')" value="settings"></v-list-item>
        <v-list-item prepend-icon="mdi-logout" :title="t('page.admin.nav.logout')" value="logout"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :title="t('page.admin.title')">
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main style="height: 100vh; background-color: #f5f5f5;">
      <v-container>
        <h1>{{ t('page.admin.header.reservations') }}</h1>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
