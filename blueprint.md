# blueprint.md

## 任務列表格式
  1. **目標**: 根據 `need.md` 提供的畫面分析，建構咖啡廳點餐系統的主介面。
  2. **規範查核**:
      - `GEMINI.md`: 所有規範，特別是檔案結構、命名、UI/RWD、Vuetify 元件使用、主題色管理。
      - `need.md`: `[GEMINI畫面分析]` 區塊作為本次開發的具體規格。
  3. **確認need.md:[GEMINI畫面分析]**: `need.md` 中的 `[GEMINI畫面分析]` 區塊已確認，將作為本次開發的 UI/UX 藍圖。
  4. **行動列表**:
      - [設定專案主色調]:src/styles/scss/_variables.scss - 完成
      - [設定全域文字]:src/utils/i18n/locales/zh-TW.json - 完成
      - [建立購物車狀態管理]:src/stores/cartStore.js - 完成
      - [建立菜單項目卡片元件]:src/components/MenuItemCard.vue - 完成
      - [建立購物車元件]:src/components/ShoppingCart.vue - 完成
      - [建構點餐主頁面]:src/pages/index.vue - 完成
