# src

專案主要程式碼目錄，包含元件、頁面、路由、狀態管理、樣式與工具。

---
## ① 目的
- 本資料夾負責的角色 / 使用場景：存放所有前端原始碼。

## ② 結構與命名規範
- `assets`: 靜態資源，如圖片、字型。
- `components`: 共用 Vue 元件。
- `layouts`: 頁面佈局元件。
- `pages`: 頁面級 Vue 元件。
- `plugins`: Vite/Vue 插件設定。
- `router`: Vue Router 路由設定。
- `styles`: 全域 SCSS 樣式。
- `utils`: 共用函式與工具。

## ③ 依賴與界面
- `main.js`: 應用程式進入點。

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [2024-07-29 10:00 (UTC+8)]
  **動作**：修改 `vite.config.mjs`（功能簡述：設定 Vuetify 主題顏色）  
  **原因**：根據 `need.md` 專案需求，設定 primary, secondary, accent 等主題色。
  **影響檔案**：`vite.config.mjs`  
  **驗證**：終端機無錯誤，頁面顏色符合預期。

## ⑤ 待辦（選填）
- TODO 1：
- TODO 2：