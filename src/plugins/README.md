---
## ① 目的
- 本資料夾存放應用程式的插件設定，例如 Vuetify、i18n 等。

## ② 結構與命名規範
- **檔案命名**：以插件名稱命名，例如 `vuetify.js`。

## ③ 變更紀錄
- [2024-07-30 11:30 (UTC+8)]
  **動作**：修改 `vuetify.js`
  **原因**：解決 "Failed to resolve component" 警告，透過匯入 `components` 和 `directives` 來正確註冊所有 Vuetify 元件。
  **影響檔案**：`src/plugins/vuetify.js`
  **驗證**：終端機驗證成功。

## ④ 待辦
- 無。
---
