---
## ① 目的
- 本資料夾存放可重複使用的 Vue 元件。

## ② 結構與命名規範
- **檔案/元件命名**：Vue 元件必須為多字名稱，例如 `UserCard.vue`。
- **輸出/匯入約定**：使用 `@` 別名指向 `src/`。
- **不得事項**：無。

## ③ 依賴與界面
- **相依套件/Plugin**：`vuetify`, `pinia`。

## ④ 變更紀錄
- [2024-07-29 17:10 (UTC+8)]
  **動作**：刪除 `MenuItem.vue`（解決命名衝突）
  **原因**：`unplugin-vue-components` 警告存在重複的元件名稱。此元件已移至 `src/components/order/OrderItem.vue`。
  **影響檔案**：`src/components/MenuItem.vue`
  **驗證**：終端機驗證成功。

- [2024-07-29 17:10 (UTC+8)]
  **動作**：刪除 `ShoppingCart.vue`（解決命名衝突）
  **原因**：`unplugin-vue-components` 警告存在重複的元件名稱。此元件已移至 `src/components/order/OrderShoppingCart.vue`。
  **影響檔案**：`src/components/ShoppingCart.vue`
  **驗證**：終端機驗證成功。

## ⑤ 待辦
- 無。
---
