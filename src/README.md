### `src/`

#### ① 目的
- 專案的主要原始碼目錄。

#### ② 結構與命名規範
- `App.vue`: 應用程式的根元件。
- `main.js`: 應用程式的進入點。

#### ③ 依賴與界面
- 相依套件: `vue`, `vuetify`, `pinia`, `vue-i18n`, `vue-router`

#### ④ 變更紀錄
- [2024-07-29 15:25 (UTC+8)]
  **動作**：修改 `src/main.js`（重新註冊 Vue Router）
  **原因**：為了修復因先前移除 router 註冊而導致的 `Failed to resolve component: router-view` 錯誤，並恢復頁面導航功能。
  **影響檔案**：`src/plugins/index.js`
  **驗證**：成功
- [2024-07-29 15:15 (UTC+8)]
  **動作**：修改 `src/main.js`（移除手動 router 註冊）
  **原因**：為了解決 `Plugin has already been applied` 警告，因為 `unplugin-vue-router` 會自動處理路由註冊。
  **影響檔案**：`src/plugins/index.js`
  **驗證**：成功
- [2024-07-29 14:35 (UTC+8)]
  **動作**：修改 `src/main.js`（引入並使用 Vue Router）
  **原因**：為了啟用路由功能。
  **影響檔案**：`src/App.vue`
  **驗證**：成功
- [2024-07-29 14:40 (UTC+8)]
  **動作**：修改 `src/App.vue`（使用 `<router-view>`）
  **原因**：為了根據路由顯示不同的頁面元件。
  **影響檔案**：`src/pages/index.vue`
  **驗證**：成功
