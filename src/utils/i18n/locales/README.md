---
## ① 目的
- 本資料夾存放專案中所有 `vue-i18n` 的語言包檔案。

## ② 結構與命名規範
- **命名**: 語言包檔案應以對應的語言代碼命名，例如 `en-US.json`, `zh-TW.json`。
- **輸出/匯入**: 統一由 `src/plugins/i18n.js` 進行管理和匯出。

## ③ 依賴與界面
- **相依套件**: `vue-i18n`
- **對外介面**: 無

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [2024-07-29 11:00 (UTC+8)]
  **動作**: 新增 `zh-TW.json` 並完成 i18n 設定
  **原因**: 根據 `GEMINI.md` 的規範，將專案中的硬編碼文字移至 `zh-TW.json` 中進行統一管理，並透過 `src/plugins/i18n.js` 和 `src/plugins/index.js` 完成 `vue-i18n` 的初始化與掛載。
  **影響檔案**: `src/utils/i18n/locales/zh-TW.json`, `src/plugins/i18n.js`, `src/plugins/index.js`, `src/components/MenuItemCard.vue`, `src/components/ShoppingCart.vue`
  **驗證**: 瀏覽器預覽正常，所有文字均能正確顯示。

## ⑤ 待辦（選填）
- 無
---
