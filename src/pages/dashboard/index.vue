
<template>
  <div>
    <!-- Header Banner (Full Width) -->
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="12">
          <v-card class="mb-4" tile>
            <v-img
              src="/images/dashboard-banner.jpg"
              class="align-end text-white"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="450px"
              cover
            >
              <v-card-title class="text-h4 font-weight-bold headline-text">
                即時訂單總覽
              </v-card-title>
              <v-card-actions class="banner-actions">
                <v-btn
                  variant="tonal"
                  size="large"
                  prepend-icon="mdi-silverware-fork-knife"
                >
                  前往點餐
                </v-btn>
                <v-btn
                  variant="tonal"
                  size="large"
                  prepend-icon="mdi-poll"
                  class="ml-2"
                >
                  每日結算
                </v-btn>
              </v-card-actions>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Stat Cards (With Padding) -->
    <v-container fluid>
      <v-row>
        <!-- Settled Revenue -->
        <v-col cols="12" md="4">
          <v-card>
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
        <v-col cols="12" md="4">
          <v-card>
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
        <v-col cols="12" md="4">
          <v-card>
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
    </v-container>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useOrderStore } from '@/stores/order';

const orderStore = useOrderStore();

// Assuming all orders in the store are for today for now
const today = new Date().toLocaleDateString();
const todayOrders = computed(() => 
  orderStore.OrderList.filter(order => 
    new Date(order.date).toLocaleDateString() === today
  )
);

// Corresponds to "總訂單數"
const todayOrdersCount = computed(() => todayOrders.value.length);

// Corresponds to "已結帳總額"
// Note: This assumes all orders in the list are settled.
const settledRevenue = computed(() => 
  todayOrders.value.reduce((total, order) => total + order.total, 0)
);

// Corresponds to "未結帳金額"
// Note: This is a placeholder. You'll need to add status to your orders
// in the store to properly calculate this.
const unsettledAmount = computed(() => 0);

</script>

<style scoped lang="scss">
.headline-text {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  padding-left: 24px;
}
.banner-actions {
  padding-left: 24px;
  padding-bottom: 16px;
}
.text-h4 {
  font-size: 2.125rem !important;
  line-height: 2.5rem;
}
</style>
