---
## ① 目的
- 本資料夾存放後台管理相關的頁面。

## ② 結構與命名規範
- **檔案/元件命名**：`index.vue` 是後台首頁，子頁面放在對應的資料夾中。
- **輸出/匯入約定**：使用 `@` 別名指向 `src/`。
- **不得事項**：無。

## ③ 依賴與界面
- **相依套件/Plugin**：`vue-router`, `vuetify`, `vue-i18n`。

## ④ 變更紀錄
- [2024-07-30 11:00 (UTC+8)]
  **動作**：修改 `index.vue`
  **原因**：根據設計圖，使用 Vuetify 元件重建後台儀表板介面，並設定 "前往點餐" 按鈕的路由。
  **影響檔案**：`src/pages/admin/index.vue`
  **驗證**：終端機驗證成功，介面與設計圖相符。

- [2024-07-30 11:45 (UTC+8)]
  **動作**：修改 `index.vue`
  **原因**：移除 `<v-app>` 和 `<v-main>` 標籤，解決與根元件 `App.vue` 的結構衝突。修正 `v-list-item` 的 color 屬性用法。
  **影響檔案**：`src/pages/admin/index.vue`
  **驗證**：終端機驗證成功。
- [2024-07-30 12:00 (UTC+8)]
  **動作**：修改 `index.vue`
  **原因**：將 `navItems` 中無效的 `to: '#'` 替換為 `to: undefined`，解決 Vue Router 的 "No match found" 警告。
  **影響檔案**：`src/pages/admin/index.vue`
  **驗證**：終端機驗證成功。

## ⑤ 待辦
- 無。
---
