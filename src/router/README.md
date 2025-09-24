---
## ① 目的
- 本資料夾負責配置和管理專案的路由系統。

## ② 結構與命名規範
- **檔案/元件命名**：主要的路由設定檔為 `index.js`。
- **輸出/匯入約定**：使用 `@` 別名指向 `src/`。
- **不得事項**：由於使用了 `unplugin-vue-router`，禁止在 `index.js` 中手動定義 `routes` 陣列。

## ③ 依賴與界面
- **相依套件/Plugin**：`vue-router`, `unplugin-vue-router`。
- **對外介面**：匯出一個 `router` 實例供 `main.js` 使用。
- **使用的 Token / i18n key**：無。

## ④ 變更紀錄
- [2024-07-29 14:45 (UTC+8)]
  **動作**：修改 `index.js`，從 `vue-router/auto` 匯入 `createRouter`。
  **原因**：啟用 `unplugin-vue-router` 的自動化路由生成功能，取代手動定義。
  **影響檔案**：`src/router/index.js`
  **驗證**：已確認 `src/pages` 下的頁面被自動註冊為路由。

- [2024-07-29 14:50 (UTC+8)]
  **動作**：修改 `src/main.js`，新增根路徑 `/` 到 `/order` 的重定向。
  **原因**：設定專案的預設首頁為點餐頁面。
  **影響檔案**：`src/main.js`
  **驗證**：已在瀏覽器中驗證訪問根目錄會自動跳轉。

## ⑤ 待辦
- 無。
---
