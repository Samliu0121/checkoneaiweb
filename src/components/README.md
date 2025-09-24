## ① 目的
- 本資料夾負責存放專案中的共用 Vue 元件。

## ② 結構與命名規範
- 元件檔案命名：使用 PascalCase，且必須為多字名稱 (e.g., `MenuItemCard.vue`)。
- `common/`: 存放與業務邏輯無關的基礎元件。

## ③ 依賴與界面
- 無

## ④ 變更紀錄（由 Gemini 追加；一改一記）
- [2024-07-29 14:50 (UTC+8)]
  **動作**：新增 `ShoppingCart.vue`（購物車）  
  **原因**：根據 `blueprint.md` 的規劃，建立一個元件來顯示購物車內容、總金額及結帳按鈕，並與 `useCartStore` 連動。
  **影響檔案**：`src/components/ShoppingCart.vue`  
  **驗證**：終端機驗證成功

- [2024-07-29 14:45 (UTC+8)]
  **動作**：新增 `MenuItemCard.vue`（菜單項目卡片）  
  **原因**：根據 `blueprint.md` 的規劃，建立一個獨立的元件來展示單一菜單項目，包含其圖片、名稱、價格與加入購物車的功能。  
  **影響檔案**：`src/components/MenuItemCard.vue`  
  **驗證**：終端機驗證成功

## ⑤ 待辦（選填）
- 無
