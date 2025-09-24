### `src/utils/i18n/locales/`

#### ① 目的
- 存放多國語系的翻譯檔案。

#### ② 結構與命名規範
- 檔案命名: 使用語言代碼命名，例如 `zh-TW.json`。
- JSON 結構: 使用巢狀結構來組織翻譯字串。

#### ④ 變更紀錄
- [2024-07-29 14:55 (UTC+8)]
  **動作**：修改 `src/utils/i18n/locales/zh-TW.json`（新增後台頁面文字）
  **原因**：為了將後台儀表板的靜態文字納入 i18n 管理。
  **影響檔案**：`src/pages/AdminDashboard.vue`
  **驗證**：成功
