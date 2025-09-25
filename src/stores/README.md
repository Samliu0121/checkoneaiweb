---
## ① 目的
- 本資料夾負責的角色 / 使用場景：存放所有 Pinia Store 模組，用於全域狀態管理。

## ② 結構與命名規範
- **檔案/元件命名**：
  - Store 檔案應以其功能命名，並使用駝峰式命名法，例如 `cartStore.js`。
  - Store 的導出變數（`defineStore` 的第一個參數 ID 和 `use...` 函式）必須以 `use` 開頭，以 `Store` 結尾，例如 `useCartStore`。
- **輸出/匯入約定**：
  - 每個檔案應只包含一個 `defineStore` 定義。
  - 統一使用 Setup Store 寫法 (`const useMyStore = defineStore('my', () => { ... })`)，不使用 Option Store。
- **不得事項**：
  - Store 之間應盡量保持獨立，避免循環依賴。

## ③ 依賴與界面
- **相依套件/Plugin**：`pinia`
- **對外介面**：導出 `use...Store` 函式，供 Vue 元件注入和使用。

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [2024-07-26 10:50 (UTC+8)]
  **動作**：新增 `cartStore.js`（建立購物車狀態管理）
  **原因**：根據 `need.md` 建議，建立一個 Pinia store 來集中管理購物車的商品資料、數量及總價計算，以便在不同元件間共享狀態。
  **影響檔案**：`src/stores/cartStore.js`
  **驗證**：檔案建立成功，終端機無編譯錯誤。

## ⑤ 待辦（選填）
- 無

---