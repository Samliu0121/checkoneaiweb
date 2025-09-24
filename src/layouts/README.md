---
## ① 目的
- 本資料夾存放應用程式的全域版面(Layout)元件。
- 版面元件負責定義不同頁面群組的通用外部結構，例如頁首、頁尾、導覽列等。

## ② 結構與命名規範
- **檔案/元件命名**：以其負責的區塊命名，並以 `Layout` 結尾，例如 `AdminLayout.vue`, `DefaultLayout.vue`。
- **`default.vue`**：預設版面，應用於所有未明確指定版面的頁面。
- **`AdminLayout.vue`**：後台管理介面的專用版面。

## ③ 依賴與界面
- **相依套件/Plugin**：`vue-router`。
- **對外介面**：每個版面檔案中必須包含一個 `<router-view />` 元件，用於渲染當前路由對應的頁面。

## ④ 變更紀錄
- [2024-07-31 14:00 (UTC+8)]
  **動作**：新增 `AdminLayout.vue`，並將後台版面程式碼從 `pages/admin/index.vue` 移入。
  **原因**：修正因版面與頁面職責混淆，導致部署後出現重複導覽列的結構性問題。確保後台頁面使用專屬、獨立的版面元件。
  **影響檔案**：`src/layouts/AdminLayout.vue`, `src/pages/admin/index.vue`, `src/router/index.js`
  **驗證**：重新部署後，線上網站後台介面應恢復正常，只有一個導覽列。

## ⑤ 待辦
- 無。
---
