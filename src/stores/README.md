## ① 目的
- 本資料夾負責存放 Pinia stores，用於全域狀態管理。

## ② 結構與命名規範
- Store 檔案以 `use` 開頭，`Store` 結尾，例如 `useCartStore.js`。

## ③ 依賴與界面
- 使用 `pinia` 套件。

## ④ 變更紀錄（由 Gemini 追加；一改一記）
- [2024-07-29 14:40 (UTC+8)]
  **動作**：新增 `cartStore.js`（管理購物車狀態）  
  **原因**：根據 `blueprint.md` 的建議，建立一個集中的 store 來處理購物車的加入、移除、清空等邏輯，方便跨元件的狀態共享。  
  **影響檔案**：`src/stores/cartStore.js`  
  **驗證**：終端機驗證成功

## ⑤ 待辦（選填）
- 無
