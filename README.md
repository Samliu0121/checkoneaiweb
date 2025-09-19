---
## ① 目的
- 本專案為一個使用 Vue 3、Vite 和 Vuetify 框架建置的咖啡廳線上點餐系統。
- Gemini 將作為主要的開發夥伴，負責遵循 `GEMINI.md` 中的規範，從需求分析到元件開發、狀態管理和最終部署。

## ② 結構與命名規範
- **核心規範**: 所有開發活動都必須嚴格遵循 `GEMINI.md` 中定義的規範。
- **檔案結構**:
  - `src/pages`: 存放所有頁面級元件。
  - `src/components`: 存放可重複使用的業務邏輯元件。
  - `src/components/common`: 存放高度通用的基礎 UI 元件。
  - `src/stores`: 存放 Pinia 狀態管理模組。
  - `src/utils/i18n`: 存放國際化 (i18n) 相關設定與翻譯檔。
  - `public/json`: 存放靜態測試資料。
- **命名**:
  - 元件: PascalCase，多字組合 (e.g., `MenuItemCard.vue`)。
  - Store: `use` + 功能 + `Store` (e.g., `useCartStore`)。

## ③ 依賴與界面
- **主要依賴**:
  - `vue`: ^3.0.0
  - `vite`: ^5.0.0
  - `vuetify`: ^3.0.0
  - `vue-i18n`: ^9.0.0
  - `pinia`: ^2.0.0
- **對外介面**: 本專案將部署為一個靜態網站，可透過 Web 伺服器訪問。

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [2024-07-29 10:00 (UTC+8)]
  **動作**: 修改 `need.md`（新增畫面分析）
  **原因**: 遵循 `need.md` 中的指示，對專案的參考設計圖進行了全面的分析，並將結果格式化輸出至 `need.md` 中，作為後續開發的依據。
  **影響檔案**: `need.md`
  **驗證**: `need.md` 為非原始碼文件，無需進行終端機驗證。

## ⑤ 待辦（選填）
- TODO 1: 根據 `need.md` 中的畫面分析，開始建構 `index.vue` 頁面的基本佈局。
- TODO 2: 建立 `MenuItemCard.vue` 和 `ShoppingCart.vue` 元件。
- TODO 3: 建立 `useCartStore` 來管理購物車狀態。
---
