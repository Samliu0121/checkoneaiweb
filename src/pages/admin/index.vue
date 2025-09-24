
<template>
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
                {{ t('page.admin.dashboard.title') }}
              </h1>
            </v-col>
          </v-row>
          <v-row justify="center">
            <!-- Settled Revenue -->
            <v-col cols="12" md="3">
              <v-card class="stat-card">
                <v-card-item class="pb-1">
                  <v-card-title>{{ t('page.admin.summary.settled') }}</v-card-title>
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
                  <v-card-title>{{ t('page.admin.summary.unsettled') }}</v-card-title>
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
                  <v-card-title>{{ t('page.admin.summary.totalOrders') }}</v-card-title>
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
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useOrderStore } from '@/stores/order';

const { t } = useI18n();
const orderStore = useOrderStore();

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
  height: 100vh; /* Changed from 100% to 100vh */
}

.headline-text {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
}

.stat-card {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
}

.text-h4 {
  font-size: 2.125rem !important;
  line-height: 2.5rem;
}
</style>
