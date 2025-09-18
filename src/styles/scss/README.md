---
## ① 目的
- 本資料夾負責存放專案的全域 SCSS 樣式檔案。

## ② 結構與命名規範
- `_variables.scss`: 存放全域 Sass 變數，例如顏色、字體大小等。
- `page.scss`: 存放頁面相關的特定樣式。
- `style.scss`: 專案全域樣式的入口點，負責引入其他 SCSS 檔案。
- 命名：變數使用 kebab-case（例如 `$primary-color`）。

## ③ 依賴與界面
- 相依套件/Plugin：`sass`, `vuetify`
- 對外介面：此處的樣式為全域載入，會影響整個專案。

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [2024-07-29 14:35 (UTC+8)]
  **動作**：修改 `style.scss` 與 `page.scss`（修復 Sass 變數未定義錯誤）
  **原因**：轉換為 `@use` 規則後，Sass 變數的作用域改變，導致 `page.scss` 無法存取在 `_variables.scss` 中定義的變數。透過在 `style.scss` 中使用 `@forward` 並在 `page.scss` 中使用 `@use`，來解決此問題。
  **影響檔案**：`src/styles/scss/style.scss`, `src/styles/scss/page.scss`
  **驗證**：通過編輯器內建 Preview 驗證，錯誤已消失。

- [2024-07-29 14:30 (UTC+8)]
  **動作**：修改 `style.scss`（修復 Sass @import 棄用警告）
  **原因**：Sass 語言的 `@import` 規則已被棄用，為了遵循最佳實踐並消除編譯警告，改用新的 `@use` 規則。
  **影響檔案**：`src/styles/scss/style.scss`
  **驗證**：通過編輯器內建 Preview 驗證，警告已消失。

## ⑤ 待辦（選填）
- 無
---
