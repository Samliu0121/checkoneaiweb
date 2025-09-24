## ① 目的
- 本資料夾負責存放全域 SCSS 樣式檔案。

## ② 結構與命名規範
- `_variables.scss`: 定義全域 SCSS 變數，如主題色、字體大小等。
- `page.scss`: 引入各頁面的獨立樣式。
- `style.scss`: 整合所有 SCSS 檔案的總入口點。

## ③ 依賴與界面
- 無

## ④ 變更紀錄（由 Gemini 追加；一改一記）
- [2024-07-29 14:30 (UTC+8)]
  **動作**：新增/修改 `_variables.scss`（設定專案主題色）  
  **原因**：根據 `blueprint.md` 的畫面分析，設定 `$primary`、`$secondary`、`$background` 等顏色，以統一全站視覺風格。  
  **影響檔案**：`src/styles/scss/_variables.scss`  
  **驗證**：終端機驗證成功

## ⑤ 待辦（選填）
- 無
