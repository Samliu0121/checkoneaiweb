## biueprint.md 任務列表格式
  1. **目標**: 根據設計圖，使用 Vuetify 和 Vue 3 建立「向天泓咖啡廳」的線上點餐介面，包含分類、商品列表及購物車功能。
  2. **規範查核**:
      - **核心指令**: 專案規範絕對優先級, 強制行動協議 (任務簽入/簽出)
      - **檔案結構**: `src/pages`, `src/components`, `src/components/common`, `public/json`
      - **命名規範**: Vue 元件多字名稱 (e.g., `ProductCard.vue`)
      - **UI/RWD**: Vuetify Grid System (`v-container`, `v-row`, `v-col`), 統一使用 Vuetify 元件, 禁止硬編碼顏色
      - **全域 SCSS**: `src/styles/scss/_variables.scss`
      - **全域 Text**: `src/utils/i18n/locales/zh-TW.json`
      - **TestData**: `public/json/`
  3. **確認need.md:[GEMINI畫面分析]**: 已完成分析並生成 `GEMINI畫面分析.md`。
  4. **任務列表**:
      - **[設定主題色與全域樣式]**: `src/styles/scss/_variables.scss` - 完成
      - **[建立資料來源]**: `public/json/menu.json` - 完成
      - **[建立狀態管理]**: `src/stores/cartStore.js` - 完成
      - **[建立左側分類元件]**: `src/components/CategoryMenu.vue` - 完成
      - **[建立商品卡片元件]**: `src/components/ProductCard.vue` - 完成
      - **[建立右側購物車元件]**: `src/components/ShoppingCart.vue` - 完成
      - **[整合首頁畫面]**: `src/pages/index.vue` - 完成
