---
## ① 目的
- 本資料夾存放 Pinia Stores，用於全域狀態管理。

## ② 結構與命名規範
- **Store 命名**：以 `use` 開頭，以 `Store` 結尾，例如 `useOrderStore`。

## ③ 依賴與界面
- **相依套件/Plugin**：`pinia`, `axios`。

## ④ 變更紀錄
- [2024-07-30 16:30 (UTC+8)]
  **動作**：修改 `cartStore.js`
  **原因**：新增 `decreaseQuantity` 函式，用於處理購物車中商品的數量減少邏輯。如果商品數量大於 1，則減 1；如果等於 1，則直接移除該商品，以配合新的 UI 數量調整功能。
  **影響檔案**：`src/stores/cartStore.js`, `src/pages/order/index.vue`
  **驗證**：終端機驗證成功。

- [2024-07-30 16:15 (UTC+8)]
  **動作**：修改 `cartStore.js`
  **原因**：修復因資料欄位大小寫不符 (`id`/`Id`, `price`/`Price`) 而導致的錯誤。此錯誤造成無法新增不同品項至購物車，以及總價計算為 `NaN` 的問題。
  **影響檔案**：`src/stores/cartStore.js`
  **驗證**：終端機驗證成功。

- [2024-07-30 16:00 (UTC+8)]
  **動作**：修改 `cartStore.js`
  **原因**：為了解決狀態管理混亂的問題，將購物車的「移除商品」(`removeFromCart`) 和「清空購物車」(`clearCart`) 的邏輯也統一到 `cartStore` 中，使其成為唯一管理購物車狀態的中心。
  **影響檔案**：`src/stores/cartStore.js`, `src/pages/order/index.vue`
  **驗證**：終端機驗證成功。

- [2024-07-30 15:30 (UTC+8)]
  **動作**：修改 `cartStore.js`
  **原因**：新增 `totalItems` getter，用於計算購物車中所有商品的總數量，以實作導覽列上的購物車數量徽章功能。
  **影響檔案**：`src/stores/cartStore.js`, `src/layouts/default/navbar.vue`
  **驗證**：終端機驗證成功。

- [2024-07-30 13:15 (UTC+8)]
  **動作**：修改 `order.js`
  **原因**：為了適應新的 `ProductData.json` 菜單資料結構，並增加對商品分類的狀態管理邏輯（如 `currentCategoryIndex`, `categories` getter 等）。
  **影響檔案**：`src/stores/order.js`, `src/pages/order/index.vue`
  **驗證**：終端機驗證成功。

## ⑤ 待辦
- 無。
---
