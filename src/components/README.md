---
## ① 目的
- 本資料夾存放專案中所有可重複使用的「業務邏輯元件」。這些元件通常與特定的業務功能相關，例如 `MenuItemCard` 或 `ShoppingCart`。

## ② 結構與命名規範
- **命名**: 元件檔案必須使用 PascalCase 格式，且為多字組合 (e.g., `UserProfile.vue`)。
- **輸出/匯入**: 統一使用 `@/components/` 路徑別名進行引用。
- **不得事項**: 
    - 不得在元件內部硬編碼顏色，應使用 `_variables.scss` 中的 SCSS 變數或 Vuetify theme。
    - 盡量避免使用自訂的 Media Query，優先使用 Vuetify 的 Grid System。

## ③ 依賴與界面
- **相依套件**: `vue`, `vuetify`, `pinia`
- **對外介面**: 元件的 Props 和 Events 應有清晰的定義，以利於父元件的調用和互動。

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [2024-07-29 10:15 (UTC+8)]
  **動作**: 新增 `ShoppingCart.vue`（功能簡述：購物車容器元件）
  **原因**: 根據 `need.md` 的畫面分析，建立購物車的主要顯示區域。
  **影響檔案**: `src/components/ShoppingCart.vue`, `src/pages/index.vue`
  **驗證**: 終端機無編譯錯誤。

- [2024-07-29 10:25 (UTC+8)]
  **動作**: 修改 `MenuItemCard.vue`（功能簡述：完成菜單卡片元件）
  **原因**: 根據 `need.md` 的畫面分析，完成了卡片結構、Props (`item`) 和 Events (`addToCart`) 的開發，使其能夠展示菜單項目並與父元件互動。
  **影響檔案**: `src/components/MenuItemCard.vue`, `src/pages/index.vue`
  **驗證**: 終端機無編譯錯誤。

- [2024-07-29 10:45 (UTC+8)]
  **動作**: 修改 `ShoppingCart.vue`（功能簡述：完成購物車元件）
  **原因**: 根據 `need.md` 的畫面分析，開發了 `ShoppingCart.vue`，使其能夠從 `useCartStore` 中讀取購物車內容、顯示商品列表、總價，並提供結帳按鈕。
  **影響檔案**: `src/components/ShoppingCart.vue`
  **驗證**: 瀏覽器預覽正常，功能符合預期。

## ⑤ 待辦（選填）
- 無
---
