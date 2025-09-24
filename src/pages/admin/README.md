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

- [2024-07-31 10:30 (UTC+8)]
  **動作**：修改 `index.vue` (介面佈局調整)
  **原因**：根據使用者需求，移除標題、將功能按鈕移至頂部導覽列，並將登出按鈕樣式統一。
  **影響檔案**：`src/pages/admin/index.vue`
  **驗證**：終端機驗證成功。

- [2024-07-31 11:00 (UTC+8)]
  **動作**：修改 `index.vue` 及 `zh-TW.json` (i18n 文字修正)
  **原因**：為頂部導覽列按鈕新增 i18n 文字定義，並在 `index.vue` 中使用 `t()` 函數，確保介面文字的國際化管理。
  **影響檔案**：`src/pages/admin/index.vue`, `src/utils/i18n/locales/zh-TW.json`
  **驗證**：終端機驗證成功。
- [2024-07-31 12:00 (UTC+8)]
  **動作**: 新增 `index.vue` 及 `zh-TW.json` (每日結算功能)
  **原因**: 實現了「每日結算」功能，包括點擊按鈕彈出對話框顯示當日總營業額，並遵循 i18n 規範進行文字國際化。
  **影響檔案**: `src/pages/admin/index.vue`, `src/utils/i18n/locales/zh-TW.json`
  **驗證**: 終端機驗證成功。
- [2024-07-31 14:00 (UTC+8)]
  **動作**：重構 `index.vue`，將版面程式碼移至 `src/layouts/AdminLayout.vue`。
  **原因**：修正因版面與頁面職責混淆導致的重複導覽列問題。此頁面現在只負責顯示儀表板的內容，版面結構由 `AdminLayout.vue` 控制。
  **影響檔案**：`src/pages/admin/index.vue`, `src/layouts/AdminLayout.vue`
  **驗證**：重新部署後，後台介面應恢復正常。

## ⑤ 待辦
- 無。
---
