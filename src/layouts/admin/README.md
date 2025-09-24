---
## ① 目的
- 本資料夾存放後台管理的版面配置 (Layout) 相關檔案。

## ② 結構與命名規範
- **檔案/元件命名**：`AdminLayout.vue` 為後台的版面配置。
- **輸出/匯入約定**：使用 `@` 別名指向 `src/`。
- **不得事項**：無。

## ③ 依賴與界面
- **相依套件/Plugin**：`vuetify`, `vue-i18n`。
- **對外介面**：`AdminLayout.vue` 是所有後台頁面的版面配置。
- **使用的 Token / i18n key**：`page.admin.title`, `page.admin.nav.*`。

## ④ 變更紀錄
- [2024-07-31 10:20 (UTC+8)]
  **動作**: 修改 `AdminLayout.vue`
  **原因**: 根據使用者需求，將後台管理介面左側導覽列的文字放大 10%。
  **影響檔案**: `src/layouts/admin/AdminLayout.vue`
  **驗證**: 終端機無錯誤。
- [2024-07-29 16:15 (UTC+8)]
  **動作**: 新增 `AdminLayout.vue`
  **原因**: 建立後台管理介面的基礎版面，包含側邊導覽列和主要內容區域。
  **影響檔案**: `src/layouts/admin/AdminLayout.vue`
  **驗證**: 已在 `/admin` 頁面確認版面配置能正確顯示。

## ⑤ 待辦
- 無。
---
