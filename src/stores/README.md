---
## ① 目的
- 本資料夾存放專案中所有 Pinia stores，用於全域狀態管理。

## ② 結構與命名規範
- **命名**: Store 檔案必須以 `Store` 結尾，例如 `useAuthStore`。
- **輸出/匯入**: 統一使用 `@/stores/` 路徑別名進行引用。

## ③ 依賴與界面
- **相依套件**: `pinia`
- **對外介面**: 每個 store 都應有清晰的 state、getters 和 actions 定義。

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [2024-07-29 10:35 (UTC+8)]
  **動作**: 新增 `cart.js`（功能簡述：購物車狀態管理）
  **原因**: 根據 `need.md` 的需求，使用 Pinia 建立 `useCartStore` 來管理購物車的狀態，包括商品列表 (`items`)、總價 (`totalPrice`) 和新增商品 (`addItem`) 的功能。
  **影響檔案**: `src/stores/cart.js`, `src/pages/index.vue`
  **驗證**: 終端機無編譯錯誤。

## ⑤ 待辦（選填）
- TODO 1: 在 `cart.js` 中新增移除商品、清空購物車等功能。
---
