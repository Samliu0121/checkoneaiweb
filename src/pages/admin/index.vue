'''
<template>
  <div>
    <v-app-bar app color="white" flat>
      <v-toolbar-title class="font-weight-bold text-h5">{{ t('page.admin.title') }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn prepend-icon="mdi-calendar-check" color="orange-lighten-2">{{ t('page.admin.header.reservations') }}</v-btn>
    </v-app-bar>

    <v-navigation-drawer app permanent>
      <v-list-item class="font-weight-bold text-h6 my-4">{{ t('page.admin.nav.dashboard') }}</v-list-item>
      <v-list nav>
        <v-list-item v-for="item in navItems" :key="item.title" :prepend-icon="item.icon" :title="t(item.title)" :to="item.to" :active="item.to === '/admin'" color="orange-lighten-2"></v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="pink-lighten-4" prepend-icon="mdi-logout">{{ t('page.admin.nav.logout') }}</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <v-img
        src="/images/dashboard-banner.jpg"
        gradient="to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)"
        cover
        class="fill-height"
      >
        <v-container fluid class="fill-height">
          <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12">
              <v-row>
                <v-col cols="12">
                   <h1 class="text-h2 font-weight-bold text-white text-center mb-10 headline-text">
                    即時訂單總覽
                  </h1>
                </v-col>
              </v-row>
              <v-row justify="center">
                 <!-- Settled Revenue -->
                <v-col cols="12" md="3">
                  <v-card class="stat-card">
                    <v-card-item class="pb-1">
                      <v-card-title>已結帳總額</v-card-title>
                      <template v-slot:append>
                        <v-icon color="success">mdi-currency-usd</v-icon>
                      </template>
                    </v-card-item>
                    <v-card-text class="text-h4 font-weight-bold">
                      NT$ {{ settledRevenue }}
                    </v-card-text>
                  </v-card>
                </v-col>

                <!-- Unsettled Amount -->
                <v-col cols="12" md="3">
                  <v-card class="stat-card">
                    <v-card-item class="pb-1">
                      <v-card-title>未結帳金額</v-card-title>
                      <template v-slot:append>
                        <v-icon color="warning">mdi-clipboard-text-outline</v-icon>
                      </template>
                    </v-card-item>
                    <v-card-text class="text-h4 font-weight-bold">
                      NT$ {{ unsettledAmount }}
                    </v-card-text>
                  </v-card>
                </v-col>

                <!-- Total Orders -->
                <v-col cols="12" md="3">
                  <v-card class="stat-card">
                    <v-card-item class="pb-1">
                      <v-card-title>總訂單數</v-card-title>
                      <template v-slot:append>
                        <v-icon color="info">mdi-file-document-outline</v-icon>
                      </template>
                    </v-card-item>
                    <v-card-text class="text-h4 font-weight-bold">
                      {{ todayOrdersCount }}
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
               <v-row justify="center" class="mt-10">
                  <v-col cols="auto">
                     <v-btn variant="outlined" size="x-large" prepend-icon="mdi-silverware-fork-knife" to="/order" class="action-btn">
                        前往點餐
                      </v-btn>
                  </v-col>
                   <v-col cols="auto">
                      <v-btn variant="outlined" size="x-large" prepend-icon="mdi-poll" class="action-btn">
                        每日結算
                      </v-btn>
                  </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useOrderStore } from '@/stores/order';

const { t } = useI18n();
const orderStore = useOrderStore();

const navItems = ref([
  { title: 'page.admin.nav.orders', icon: 'mdi-bell', to: '/admin' },
  { title: 'page.admin.nav.menu', icon: 'mdi-food-fork-drink', to: '/admin/products' },
  { title: 'page.admin.nav.tables', icon: 'mdi-table-chair', to: undefined },
  { title: 'page.admin.nav.revenue', icon: 'mdi-poll', to: undefined },
  { title: 'page.admin.nav.promotions', icon: 'mdi-ticket-percent', to: undefined },
  { title: 'page.admin.nav.settings', icon: 'mdi-cog', to: undefined },
]);

const today = new Date().toLocaleDateString();
const todayOrders = computed(() => 
  orderStore.OrderList.filter(order => 
    new Date(order.date).toLocaleDateString() === today
  )
);

const todayOrdersCount = computed(() => todayOrders.value.length);

const settledRevenue = computed(() => 
  todayOrders.value.reduce((total, order) => total + order.total, 0)
);

const unsettledAmount = computed(() => 0); // Placeholder

</script>

<style scoped>
.fill-height {
  height: 100%;
}

.headline-text {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
}

.stat-card {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
}

.action-btn {
  color: white;
  border-color: white;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}

.text-h4 {
  font-size: 2.125rem !important;
  line-height: 2.5rem;
}
</style>
'''