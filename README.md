本專案為咖啡廳點餐系統的前端介面，使用 Vue 3、Vuetify 和 Pinia 等技術開發。詳細的開發計畫請參閱 `blueprint.md`。

---
## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [2024-07-25 15:30 (UTC+8)]
  **動作**：修改 `vite.config.js`（優化建置設定）
  **原因**：解決 `npm run build` 產生過大 chunk 的警告，透過 `manualChunks` 和 `vite-plugin-vuetify` 實現程式碼分割和 tree-shaking，以提升應用程式載入效能。
  **影響檔案**：`vite.config.js`
  **驗證**：使用者回報 `npm run build` 成功，且 chunk 過大警告已解決。

- [2024-07-25 15:45 (UTC+8)]
  **動作**：部署應用程式至 Firebase Hosting
  **原因**：將建置完成的前端應用程式發佈上線。
  **影響檔案**：`firebase.json`
  **驗證**：部署成功，網站可於 https://aicheck-squad.web.app 存取。
