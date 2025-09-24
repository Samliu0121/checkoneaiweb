---
## ① 目的
- 本資料夾負責處理點餐頁面的相關功能，包括商品展示、分類和購物車。

## ② 結構與命名規範
- **檔案/元件命名**：`index.vue` 作為此頁面的主要進入點。
- **輸出/匯入約定**：使用 `@` 別名指向 `src/`。

## ③ 依賴與界面
- **相依套件/Plugin**：`vuetify`, `pinia`。
- **Store**: `useOrderStore`。
- **自訂元件**: `@/components/dialog/OrderShoppingCart.vue`。
- **資料來源**: `public/json/ProductData.json`。

## ④ 變更紀錄
- [2024-07-30 16:30 (UTC+8)]
  **動作**：修改 `index.vue`
  **原因**：為了提供更好的使用者體驗，將購物車中的「移除」按鈕 (`X`) 替換為一組「+ / 數量 / -」的數量調整控制項，讓使用者可以直接增減商品數量。
  **影響檔案**：`src/pages/order/index.vue`, `src/stores/cartStore.js`
  **驗證**：終端機驗證成功。

- [2024-07-30 16:00 (UTC+8)]
  **動作**：修改 `index.vue`
  **原因**：為了解決狀態不一致的問題，將原本由 `orderStore` 管理的購物車邏輯，全面切換至 `cartStore`。這確保了點餐頁面的購物車與全站導覽列的購物車狀態同步，實現了單一真相來源。
  **影響檔案**：`src/pages/order/index.vue`, `src/stores/cartStore.js`
  **驗證**：終端機驗證成功。

- [2024-07-30 14:00 (UTC+8)]
  **動作**：修改 `index.vue`
  **原因**：根據使用者回饋，調整 UI 細節。1. 將左側分類選單的字體放大 15%。 2. 調整商品展示區的網格設定，使其在中等尺寸螢幕上也能一排顯示三個品項。
  **影響檔案**：`src/pages/order/index.vue`
  **驗證**：終端機驗證成功。

- [2024-07-30 13:30 (UTC+8)]
  **動作**：修改 `index.vue`
  **原因**：為了實現更專業和更具互動性的點餐體驗，進行了全面的 UI/UX 改造。引入了 `v-tabs` 來實現商品分類，使用 `v-card` 重新設計了商品展示，並優化了購物車的視覺和互動，整體採用三欄式 RWD 佈局。
  **影響檔案**：`src/pages/order/index.vue`, `src/stores/order.js`
  **驗證**：終端機驗證成功。

- [2024-07-30 12:45 (UTC+8)]
  **動作**：修改 `index.vue`
  **原因**：移除了購物車區塊中 Vuetify 2 的 `<v-list-item-content>` 元件，改用 Vuetify 3 的標準寫法，以徹底解決 `Failed to resolve component` 警告。
  **影響檔案**：`src/pages/order/index.vue`
  **驗證**：終端機驗證成功。

## ⑤ 待辦
- 無。
---
