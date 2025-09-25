---
## ① 目的
- 本資料夾負責的角色 / 使用場景：存放所有語系的翻譯檔案，用於實現應用程式的國際化 (i18n)。

## ② 結構與命名規範
- **檔案/元件命名**：
  - 檔案命名應遵循 [ISO 639-1](https://www.loc.gov/standards/iso639-2/php/code_list.php) 語言代碼與 [ISO 3166-1 alpha-2](https://www.iso.org/obp/ui/#search) 地區代碼的組合，例如 `zh-TW.json`, `en-US.json`。
- **輸出/匯入約定**：
  - 所有 JSON 檔案都應在 `src/utils/i18n/index.js` 中被引入並整合至 Vue I18n 實例中。
- **不得事項**：
  - 不得在程式碼中硬編碼 (Hard Code) 任何面向使用者的 UI 文字。
  - Key 的命名應有結構，避免扁平化，例如使用 `page.index.title` 而非 `page_index_title`。

## ③ 依賴與界面
- **相依套件/Plugin**：`vue-i18n`
- **對外介面**：導出 JSON 物件，其鍵值對將被 `vue-i18n` 用於文字翻譯。

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [2024-07-26 10:45 (UTC+8)]
  **動作**：驗證 `zh-TW.json`（設定全域文字）
  **原因**：根據 `need.md` 中的畫面分析，確認「加入購物車」、「結帳」、「總計」等全域文字的 i18n 鍵值已存在。
  **影響檔案**：`src/utils/i18n/locales/zh-TW.json`
  **驗證**：經查閱，檔案內容已包含所需鍵值 (`btn.addToCart`, `btn.checkout`, `shoppingCart.total`)，無需修改。

## ⑤ 待辦（選填）
- 無

---