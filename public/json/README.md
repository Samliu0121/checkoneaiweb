---
## ① 目的
- 本資料夾用於存放專案中使用的靜態 JSON 資料檔案。

## ② 結構與命名規範
- **檔案命名**: 以資料的用途命名，例如 `ProductData.json`。

## ③ 依賴與界面
- 無。

## ④ 變更紀錄
- [2024-07-30 15:00 (UTC+8)]
  **動作**：修改 `ProductData.json`
  **原因**：根據檔案系統的實際情況，將「紅燒牛腩飯」的圖片路徑修正為 `/images/meal001.jpg`。
  **影響檔案**：`public/json/ProductData.json`
  **驗證**：終端機驗證成功。

- [2024-07-30 14:45 (UTC+8)]
  **動作**：修改 `ProductData.json`
  **原因**：修正圖片路徑錯誤。根據檔案系統的實際情況，將「無咖啡因飲品」的圖片路徑修正為 `ocaffeine001.jpg`。
  **影響檔案**：`public/json/ProductData.json`
  **驗證**：終端機驗證成功。

- [2024-07-30 14:30 (UTC+8)]
  **動作**：修改 `ProductData.json`，刪除 `menu.json`
  **原因**：根據使用者回報的圖片路徑問題，將 `ProductData.json` 中的 `Photo` 路徑全部更新為指向 `/images/menu/` 子資料夾。同時，為了保持專案整潔，刪除了已不再使用的舊版 `menu.json`。
  **影響檔案**：`public/json/ProductData.json`
  **驗證**：終端機驗證成功。

- [2024-07-30 14:15 (UTC+8)]
  **動作**：修改 `ProductData.json`
  **原因**：更新了所有品項的 `Photo` 欄位，使其指向具體的圖片檔案路徑，不再使用佔位圖片。
  **影響檔案**：`public/json/ProductData.json`
  **驗證**：終端機驗證成功。

- [2024-07-30 13:00 (UTC+8)]
  **動作**：新增 `ProductData.json`
  **原因**：為了提供一個結構化的菜單資料來源，其中包含了產品分類和品項資訊，以利於點餐頁面的開發。
  **影響檔案**：`src/stores/order.js`
  **驗證**：終端機驗證成功。

## ⑤ 待辦
- 無。
---
