---
## ① 目的
- 本資料夾存放與點餐功能相關的 Vue 元件。

## ② 結構與命名規範
- **檔案/元件命名**：元件應以其功能命名，例如 `MenuList.vue`、`OrderItem.vue`、`OrderShoppingCart.vue`。
- **輸出/匯入約定**：使用 `@` 別名指向 `src/`。
- **不得事項**：無。

## ③ 依賴與界面
- **相依套件/Plugin**：`vuetify`, `pinia`。

## ④ 變更紀錄
- [2024-07-29 16:50 (UTC+8)]
  **動作**：新增 `MenuList.vue`
  **原因**：建立顯示菜單列表的元件。
  **影響檔案**：`src/components/order/MenuList.vue`
  **驗證**：尚未驗證。
- [2024-07-29 16:55 (UTC+8)]
  **動作**：新增 `OrderItem.vue` (原為 MenuItem.vue)
  **原因**：建立顯示單一菜單品項的元件，並為了解決命名衝突而重新命名。
  **影響檔案**：`src/components/order/OrderItem.vue`
  **驗證**：尚未驗證。
- [2024-07-29 17:00 (UTC+8)]
  **動作**：新增 `OrderShoppingCart.vue` (原為 ShoppingCart.vue)
  **原因**：建立顯示購物車內容的元件，並為了解決命名衝突而重新命名。
  **影響檔案**：`src/components/order/OrderShoppingCart.vue`
  **驗證**：尚未驗證。

## ⑤ 待辦
- 建立 `cartStore.js`。
---
