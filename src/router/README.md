---
## ① 目的
- 本資料夾負責存放 Vue Router 的設定檔案，定義整個應用程式的頁面路由規則。

## ② 結構與命名規範
- **檔案命名**: `index.js` 作為路由設定的主進入點。

## ③ 變更紀錄
- [2024-07-31 10:35 (UTC+8)]
  **動作**: 修改 `index.js`
  **原因**: 將後台相關路由重構成巢狀路由，並指定 `AdminLayout.vue` 作為父層版面，以修正後台頁面未正確載入版面的問題。
  **影響檔案**: `src/router/index.js`
  **驗證**: 已由使用者確認預覽畫面正常。
- [2024-07-30 10:30 (UTC+8)]
  **動作**: 修改 `index.js`
  **原因**: 移除舊的路由，並新增 `/admin` 和 `/admin/products` 的路由。
  **影響檔案**: `src/router/index.js`
  **驗證**: 終端機驗證成功。
- [2024-07-30 12:15 (UTC+8)]
  **動作**: 修改 `index.js`
  **原因**: 將根路徑 `/` 的重定向從 `/dashboard` 改為 `/order`，以統一路由行為並解決 `No match found` 警告。
  **影響檔案**: `src/router/index.js`
  **驗證**: 終端機驗證成功。
- [2024-07-31 11:30 (UTC+8)]
  **動作**: 修改 `index.js`
  **原因**: 移除了對已刪除檔案 `@/pages/dashboard/index.vue` 的無效路由，解決了 Vite 編譯時的 `import-analysis` 錯誤。
  **影響檔案**: `src/router/index.js`
  **驗證**: 終端機驗證成功。
- [2024-07-31 11:45 (UTC+8)]
  **動作**: 修改 `index.js`
  **原因**: 新增路由重新導向，將舊的 `/admin/dashboard` 路徑指向 `/admin`，以解決 `No match found` 警告並確保舊連結的相容性。
  **影響檔案**: `src/router/index.js`
  **驗證**: 終端機驗證成功。

## ④ 待辦
- 無。
---
