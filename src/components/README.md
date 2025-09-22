---
## ① 目的
- 本資料夾負責存放專案中可重複使用的 Vue 元件。

## ② 結構與命名規範
- **檔案/元件命名**：Vue 元件檔名必須使用多字駝峰式命名 (PascalCase)，例如 `ProductCard.vue`。
- **輸出/匯入約定**：元件應透過 `export default` 導出。
- **子資料夾**：
    - `common/`: 存放與業務邏輯無關的基礎元件 (如自訂按鈕、輸入框)。
    - 業務元件直接存放在 `components/` 根目錄下。

## ③ 依賴與界面
- **相依套件/Plugin**：`vue`, `vuetify`
- **對外介面**：每個元件的 Props 和 Events 都應在 `<script setup>` 中明確定義。

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [創建][2024-07-30]
  **動作**：新增 `CategoryMenu.vue`（商品分類選單元件）
  **原因**：根據 `GEMINI畫面分析.md` 的規劃，建立可重複使用的分類導航菜單，便於使用者篩選商品。
  **影響檔案**：`src/components/CategoryMenu.vue`
  **驗證**：終端機驗證成功

- [創建][2024-07-30]
  **動作**：新增 `ProductCard.vue`（商品資訊卡片元件）
  **原因**：根據 `GEMINI畫面分析.md` 的規劃，用於以統一格式展示單一商品，包含圖片、名稱、價格與加入購物車按鈕。
  **影響檔案**：`src/components/ProductCard.vue`
  **驗證**：終端機驗證成功

- [創建][2024-07-30]
  **動作**：新增 `ShoppingCart.vue`（購物車詳情元件）
  **原因**：根據 `GEMINI畫面分析.md`，此元件用於顯示購物車內容、總計金額，並提供與 `cartStore` 互動的操作（移除商品、清空購物車）。
  **影響檔案**：`src/components/ShoppingCart.vue`, `src/stores/cartStore.js`
  **驗證**：終端機驗證成功

## ⑤ 待辦（選填）
- N/A
---
