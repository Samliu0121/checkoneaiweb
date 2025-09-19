---
## ① 目的
- 本資料夾用於存放和管理專案中所使用的 Vue 插件的初始化腳本。

## ② 結構與命名規範
- **命名**: 每個插件對應一個獨立的 `.js` 檔案，例如 `vuetify.js`, `pinia.js`。
- **輸出/匯入**: 所有插件都在 `index.js` 中被引入，並透過 `registerPlugins` 函數統一註冊到 Vue 實例中。

## ③ 依賴與界面
- **相依套件**: `vuetify`, `pinia`, `vue-router`, `vue-i18n`
- **對外介面**: `registerPlugins(app)`

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [2024-07-29 11:30 (UTC+8)]
  **動作**: 新增 `pinia.js` 並在 `index.js` 中註冊，以修復 Pinia 未啟用的錯誤。
  **原因**: `getActivePinia()` 錯誤表明 Pinia 未被正確安裝。此修改確保了在應用程式中使用 Store 之前，Pinia 實例已經被建立並掛載到 Vue App 上。
  **影響檔案**: `src/plugins/pinia.js`, `src/plugins/index.js`
  **驗證**: 瀏覽器預覽正常，Pinia 相關錯誤消失。

## ⑤ 待辦（選填）
- 無
---
