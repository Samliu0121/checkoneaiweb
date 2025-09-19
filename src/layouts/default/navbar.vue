<template>
  <v-app-bar app color="white" elevation="1">
    <v-btn color="primary" depressed>
      <v-icon left>mdi-arrow-left</v-icon>
      返回儀表板
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-title class="text-h5 font-weight-bold primary--text">向天泓咖啡廳</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text>
      <v-icon left>mdi-view-list</v-icon>
      訂位總覽
    </v-btn>
    <v-btn text>
      <v-icon left>mdi-home</v-icon>
      回到首頁
    </v-btn>
  </v-app-bar>
</template>

<script setup>

</script>

<style scoped>
.v-toolbar-title {
  color: #333;
}
</style>
