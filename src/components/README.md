## ① 目的
- 本資料夾負責存放全專案共用的 Vue 元件。

## ② 結構與命名規範
- 檔案/元件命名：必須為多字名稱，例如：`UserCard.vue`。
- 不得事項：嚴禁自行建立與 Vuetify 功能重複的樣式或元件。

## ③ 依賴與界面
- 相依套件/Plugin：`vue`, `vuetify`

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [2024-07-29 14:30 (UTC+8)]  
  **動作**：新增 `CategorySidebar.vue`（分類側邊欄元件）  
  **原因**：建立點餐系統的分類選擇介面。
  **影響檔案**：`src/components/CategorySidebar.vue`, `src/pages/index.vue`  
  **驗證**：在 `index.vue` 中成功渲染並可點擊切換分類。

- [2024-07-29 14:35 (UTC+8)]  
  **動作**：新增 `ProductCard.vue`（商品卡片元件）  
  **原因**：用於顯示單一商品的資訊與加入購物車按鈕。
  **影響檔案**：`src/components/ProductCard.vue`, `src/pages/index.vue`  
  **驗證**：在 `index.vue` 中成功渲染商品列表。

- [2024-07-29 14:40 (UTC+8)]  
  **動作**：新增 `ShoppingCart.vue`（購物車元件）  
  **原因**：顯示購物車內容、總計金額與結帳按鈕。
  **影響檔案**：`src/components/ShoppingCart.vue`, `src/pages/index.vue`  
  **驗證**：在 `index.vue` 中成功渲染並能正確計算總價。
