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
- **使用的 Token / i18n key**：`page.index.title`, `btn.order`, `btn.admin`。

## ④ 變更紀錄
- [2024-07-30 15:30 (UTC+8)]
  **動作**：修改 `navbar.vue`
  **原因**：為了優化使用者體驗，將導覽列上的按鈕文字與購物車圖示放大 10%，並實作了購物車數量徽章功能，可即時顯示購物車內的商品總數。
  **影響檔案**：`src/layouts/default/navbar.vue`, `src/stores/cartStore.js`
  **驗證**：終端機驗證成功。

- [2024-07-30 11:50 (UTC+8)]
  **動作**：修改 `navbar.vue`
  **原因**：移除 `v-app-bar` 的 `app` 屬性，避免與 `admin` 頁面的布局衝突。
  **影響檔案**：`src/layouts/default/navbar.vue`
  **驗證**：終端機驗證成功。

- [2024-07-30 10:20 (UTC+8)]
  **動作**：修改 `navbar.vue`
  **原因**：移除無效的 `/reservation` 和 `/admin` 按鈕，並新增一個指向新管理頁面的 `/admin` 按鈕。
  **影響檔案**：`src/layouts/default/navbar.vue`
  **驗證**：終端機驗證成功。

## ⑤ 待辦
- 無。
---
