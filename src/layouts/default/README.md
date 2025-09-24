---
## ① 目的
- 本資料夾存放預設的版面配置 (Layout) 相關檔案。

## ② 結構與命名規範
- **檔案/元件命名**：`navbar.vue` 為全站共用的導覽列。
- **輸出/匯入約定**：使用 `@` 別名指向 `src/`。
- **不得事項**：無。

## ③ 依賴與界面
- **相依套件/Plugin**：`vuetify`, `vue-i18n`, `pinia`。
- **對外介面**：`navbar.vue` 透過 `App.vue` 在所有頁面中顯示。
- **使用的 Token / i18n key**：`page.index.title`, `btn.order`, `btn.admin`, `btn.reservation`。

## ④ 變更紀錄
- [2024-07-29 16:30 (UTC+8)]
  **動作**：修改 `navbar.vue`
  **原因**：在導覽列中加入 logo (coffee icon)，並調整按鈕順序。
  **影響檔案**：`src/layouts/default/navbar.vue`
  **驗證**：已在頁面上確認 logo 和按鈕皆正常顯示。

## ⑤ 待辦
- 無。
---
