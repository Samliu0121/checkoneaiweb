---
## ① 目的
- 本資料夾存放專案中所有的「頁面級元件」。每個 `.vue` 檔案代表一個獨立的頁面路由。

## ② 結構與命名規範
- **命名**: 頁面檔案名應對應其路由，使用 kebab-case (例如 `user-profile.vue`) 或 `index.vue`。
- **輸出/匯入**: 頁面之間的導航應使用 Vue Router 進行管理。

## ③ 依賴與界面
- **相依套件**: `vue`, `vue-router`, `vuetify`
- **對外介面**: 頁面通常不對外提供 Props，但會從 `vue-router` 接收路由參數。

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [2024-07-29 10:15 (UTC+8)]
  **動作**: 修改 `index.vue`（功能簡述：建立主頁面佈局）
  **原因**: 根據 `need.md` 的畫面分析，使用 Vuetify Grid System 搭建了包含菜單和購物車區塊的響應式佈局。
  **影響檔案**: `src/pages/index.vue`, `src/components/ShoppingCart.vue`, `src/components/MenuItemCard.vue`
  **驗證**: 終端機無編譯錯誤。

- [2024-07-29 10:25 (UTC+8)]
  **動作**: 修改 `index.vue`（功能簡述：動態載入菜單數據）
  **原因**: 實作從 `public/json/menu.json` 非同步獲取菜單項目，並將其傳遞給 `MenuItemCard` 元件進行渲染。同時，新增了 `@add-to-cart` 事件的處理。
  **影響檔案**: `src/pages/index.vue`, `public/json/menu.json`
  **驗證**: 終端機無編譯錯誤。

## ⑤ 待辦（選填）
- TODO 1: 為頁面添加標題等 SEO 相關元素。
- TODO 2: 將購物車的 `console.log` 替換為實際的 Pinia store 操作。
---
