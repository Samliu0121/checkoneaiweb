---
## ① 目的
- 本資料夾存放專案的所有頁面檔案。

## ② 結構與命名規範
- **檔案/元件命名**：`index.vue` 是首頁，其他頁面根據其功能命名。
- **輸出/匯入約定**：使用 `@` 別名指向 `src/`。
- **不得事項**：無。

## ③ 依賴與界面
- **相依套件/Plugin**：`vue-router`, `vuetify`。

## ④ 變更紀錄
- [2024-07-30 10:00 (UTC+8)]
  **動作**：刪除 `src/pages/admin`, `src/pages/dashboard`, `src/pages/index`, `src/pages/reservation`。
  **原因**：清理舊的、不再使用的頁面。
  **影響檔案**：`src/pages/admin`, `src/pages/dashboard`, `src/pages/index`, `src/pages/reservation`
  **驗證**：終端機驗證成功。

- [2024-07-30 10:10 (UTC+8)]
  **動作**：新增 `src/pages/admin` and `src/pages/admin/products`。
  **原因**：建立新的管理頁面和商品管理頁面。
  **影響檔案**：`src/pages/admin/index.vue`, `src/pages/admin/products/index.vue`
  **驗證**：終端機驗證成功。

## ⑤ 待辦
- 無。
---
