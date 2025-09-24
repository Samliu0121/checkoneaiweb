
<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <v-toolbar-title class="font-weight-bold text-h5" style="color: #2c3e50;">{{ t('page.admin.title') }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn prepend-icon="mdi-calendar-check" color="orange-darken-2" variant="flat">{{ t('page.admin.header.reservations') }}</v-btn>
    </v-app-bar>

    <v-navigation-drawer app permanent width="250" color="white">
      <v-list nav>
        <v-list-item-title class="font-weight-bold text-h6 pa-4">{{ t('page.admin.nav.dashboard') }}</v-list-item-title>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :prepend-icon="item.icon"
          :title="t(item.title)"
          class="my-2"
          :class="{ 'v-list-item--active': item.title === 'page.admin.nav.orders' }"
          active-class="orange-lighten-4"
        ></v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-4">
          <v-btn block color="pink-lighten-4" prepend-icon="mdi-logout">{{ t('page.admin.nav.logout') }}</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main style="background-image: url('/images/admin-bg.jpg'); background-size: cover;">
      <v-container fluid class="pa-8">
        <v-row>
          <v-col cols="12">
            <h2 class="text-h4 font-weight-bold mb-4" style="color: white; text-shadow: 1px 1px 2px black;">{{ t('page.admin.dashboard.title') }}</h2>
          </v-col>
          <v-col cols="12" class="d-flex justify-end mb-4">
            <v-btn color="red-lighten-1" class="mr-4" prepend-icon="mdi-silverware-fork-knife" @click="$router.push('/')">{{ t('page.admin.dashboard.goToPOS') }}</v-btn>
            <v-btn color="grey-darken-3" prepend-icon="mdi-chart-bar">{{ t('page.admin.dashboard.dailyReport') }}</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="card in summaryCards" :key="card.title" md="4">
            <v-card class="pa-4" flat>
              <div class="d-flex justify-space-between align-center">
                <div>
                  <p class="text-subtitle-1 text-grey-darken-1">{{ t(card.title) }}</p>
                  <p class="text-h4 font-weight-bold">{{ card.value }}</p>
                </div>
                <v-icon size="x-large" :color="card.iconColor">{{ card.icon }}</v-icon>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const navItems = ref([
  { title: 'page.admin.nav.orders', icon: 'mdi-bell-ring' },
  { title: 'page.admin.nav.menu', icon: 'mdi-silverware-variant' },
  { title: 'page.admin.nav.tables', icon: 'mdi-table-chair' },
  { title: 'page.admin.nav.revenue', icon: 'mdi-chart-line' },
  { title: 'page.admin.nav.promotions', icon: 'mdi-ticket-percent' },
  { title: 'page.admin.nav.settings', icon: 'mdi-cog' },
]);

const summaryCards = ref([
  { title: 'page.admin.summary.settled', value: 'NT$0', icon: 'mdi-currency-usd', iconColor: 'grey-lighten-1' },
  { title: 'page.admin.summary.unsettled', value: 'NT$0', icon: 'mdi-file-document-outline', iconColor: 'grey-lighten-1' },
  { title: 'page.admin.summary.totalOrders', value: '0', icon: 'mdi-receipt-text-outline', iconColor: 'grey-lighten-1' },
]);

</script>

<style scoped>
.v-list-item--active {
  color: #D68910 !important;
  background-color: #FEF5E7 !important;
}
.v-list-item--active .v-icon {
    color: #D68910 !important;
}
</style>
