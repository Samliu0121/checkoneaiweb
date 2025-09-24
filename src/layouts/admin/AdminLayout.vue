<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-title class="text-h6">{{ t('page.admin.title') }}</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in navItems" :key="item.title" :to="item.to">
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const navItems = [
  { title: t('page.admin.nav.dashboard'), icon: 'mdi-view-dashboard', to: '/admin/dashboard' },
  { title: t('page.admin.nav.orders'), icon: 'mdi-receipt', to: '/admin/orders' },
  { title: t('page.admin.nav.menu'), icon: 'mdi-book-open-page-variant', to: '/admin/menu' },
  { title: t('page.admin.nav.tables'), icon: 'mdi-table-chair', to: '/admin/tables' },
  { title: t('page.admin.nav.revenue'), icon: 'mdi-chart-bar', to: '/admin/revenue' },
  { title: t('page.admin.nav.promotions'), icon: 'mdi-ticket-percent', to: '/admin/promotions' },
  { title: t('page.admin.nav.settings'), icon: 'mdi-cog', to: '/admin/settings' },
  { title: t('page.admin.nav.logout'), icon: 'mdi-logout', to: '/' },
];
</script>
