---
## ① 目的
- 本資料夾負責的角色 / 使用場景：存放應用程式的「頁面」級別元件。每個檔案通常對應一個獨立的路由 (Route)。

## ② 結構與命名規範
- **檔案/元件命名**：
  - 檔名應對應其路由路徑，例如 `index.vue` 對應 `/`，`about.vue` 對應 `/about`。
  - 對於巢狀路由，可以建立子目錄，例如 `user/profile.vue`。
- **輸出/匯入約定**：
  - 每個檔案應只包含一個 Vue 元件，作為該路由的進入點。
- **不得事項**：
  - 不應包含可在多個頁面重複使用的「業務元件」（應放在 `src/components/`）。

## ③ 依賴與界面
- **相依套件/Plugin**：`vue`, `vue-router`, `vuetify`
- **對外介面**：頁面元件是 Vue Router 的渲染目標，通常不對外提供 `props` 或 `emits`，但會從 Store 獲取狀態並組合業務元件。

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [2024-07-26 11:10 (UTC+8)]
  **動作**：新增 `index.vue`（建構點餐主頁面）
  **原因**：整合 `MenuItemCard` 和 `ShoppingCart` 元件，完成點餐系統的主介面。此頁面使用 Vuetify Grid System 進行響應式佈局，並從 `public/json/menu.json` 非同步載入菜單資料。
  **影響檔案**：`src/pages/index.vue`, `public/json/menu.json`
  **驗證**：檔案建立成功，終端機無編譯錯誤。

## ⑤ 待辦（選填）
- 無

---