---
## ① 目的
- 本資料夾存放全局對話框相關的元件。

## ② 結構與命名規範
- **檔案/元件命名**：以功能命名，例如 `OrderShoppingCart.vue`。
- **輸出/匯入約定**：使用 `@` 別名指向 `src/`。
- **不得事項**：無。

## ③ 依賴與界面
- **相依套件/Plugin**：`vuetify`。

## ④ 變更紀錄
- [2024-07-30 12:30 (UTC+8)]
  **動作**：修改 `OrderShoppingCart.vue`
  **原因**：移除了 Vuetify 2 的 `<v-list-item-content>` 元件，改用 Vuetify 3 的標準寫法，以解決 `Failed to resolve component` 警告。
  **影響檔案**：`src/components/dialog/OrderShoppingCart.vue`
  **驗證**：終端機驗證成功。

## ⑤ 待辦
- 無。
---
