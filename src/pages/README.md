---
## ① 目的
- 本資料夾負責存放專案的頁面級 Vue 元件。

## ② 結構與命名規範
- **檔案/元件命名**：頁面元件通常對應一個路由，直接使用 `index.vue` 或具體頁面名稱，例如 `About.vue`。
- **子資料夾**：如果頁面邏輯複雜，可以建立與頁面同名的子資料夾來存放相關元件。

## ③ 依賴與界面
- **相依套件/Plugin**：`vue`, `vue-router`, `vuetify`, `pinia`。
- **對外介面**：頁面元件通常不對外提供 Props 或 Events，而是作為應用程式的進入點。

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [修改][2024-07-30]
  **動作**：修改 `index.vue`，整合 `CategoryMenu`、`ProductCard` 與 `ShoppingCart` 元件，完成點餐系統主畫面。
  **原因**：根據 `GEMINI畫面分析.md` 的規劃，將先前建立的各個獨立元件組合起來，形成一個具有完整互動流程的功能頁面。
  **影響檔案**：`src/pages/index.vue`, `src/components/CategoryMenu.vue`, `src/components/ProductCard.vue`, `src/components/ShoppingCart.vue`, `src/stores/cartStore.js`
  **驗證**：終端機驗證成功

## ⑤ 待辦（選填）
- N/A
---
