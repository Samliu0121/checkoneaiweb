## ① 目的
- 本資料夾負責存放專案內所有可重複使用的 Vue 元件。

## ② 結構與命名規範
- **檔案/元件命名**：`PascalCase` (例如 `ProductCard.vue`)。
- **輸出/匯入約定**：使用 `@/components/` 路徑別名進行引用。
- **不得事項**：
  - 不得硬編碼顏色，應使用 `primary`, `secondary` 等主題色。
  - 不得自行撰寫 Media Query，應使用 Vuetify Grid System。

## ③ 依賴與界面
- **相依套件/Plugin**：`vue`, `vuetify`。
- **對外介面**：每個元件應透過 `props` 接收資料，透過 `emits` 發送事件。

## ④ 變更紀錄（由 Gemini 追加；一改一記）

- [YYYY-MM-DD HH:mm (UTC+8)]
  **動作**：建立 `README.md`
  **原因**：根據 `GEMINI.md` 規範，為 `components` 資料夾建立說明文件。
  **影響檔案**：`src/components/README.md`
  **驗證**：成功

## ⑤ 待辦（選填）
- TODO 1：開發 `ProductCard.vue`。
- TODO 2：開發 `CategoryMenu.vue`。
- TODO 3: 開發 `ShoppingCart.vue`。
