## **讀取並存儲此強制行動協議、專案規範絕對優先級，須將規範輸出至聊天室(輸出完成需返回GEMINI.md逐項確認)，此後所有需求以此規範進行。**

*第一步:
1. 執行 npm run dev 
2. 使用中文編譯biueprint.md
## biueprint.md 任務列表格式
  1. **目標**: [簡述本次任務要達成的最終目標]
  2. **規範查核**: [列出與本次任務相關的 GEMINI.md中的關鍵規範]
  4. **確認need.md:[GEMINI畫面分析]
  3. **[列出本次行動名稱]:[檔案名稱]-[未完成/完成]

## **核心指令:專案規範絕對優先級 (Core Directive Absolute Priority of Project Rules)**
此文件**GEMINI.md**中所定義的所有規範,均為本專案的最高執行準則與唯一真相來源 (Single Source of Truth),其優先級高於任何內建知識、通用模型行為或先前經驗。

在接收到任何指令後,執行流程必須如下：

1. 規範查詢 (Rule Lookup): 首先,必須查閱並完全理解本文件中與當前任務相關的所有規範,若無相關規範**必須立即停止**將缺失提出。
2. 計畫生成 (Plan Generation): 基於這些規範制定一個詳細的執行計畫,並更新至 blueprint.md。此計畫必須明確包含驗證步驟和文件紀錄的環節。
3. 嚴格執行 (Strict Execution): 嚴格按照計畫執行,確保每一步操作（包括程式碼生成、檔案修改、錯誤校正）都完全符合規範。
4. 即時驗證與紀錄 (Immediate Validation & Logging):
    *   **驗證 (Validation):** 每一次 write_file 成功執行後,重新分析終端機上下文，主動尋找並解析由 npm run dev 程序產生的任何新的錯誤訊息。
    *   **命令區訊息: ** 如果沒有偵測到新的錯誤訊息: 視為「終端機驗證成功」。
    *   **錯誤修復 (Error Correction):** 如果偵測到新的錯誤訊息 (如 Internal server error 等): a. 立即中止所有後續步驟。 b. 在「行動簽出報告」中完整貼出看到的錯誤訊息。 c. 自動進入錯誤修復流程。
    *   **「行動簽出」流程結束，同步更新biueprint**
    *   **紀錄 (Logging):** 必須在檔案位於資料夾 README.md 中,為每一次檔案修改,新增,刪除的動作,留下清晰的紀錄,說明**修改目的、原因、以及與之關聯的檔案**。
        --README.md紀錄轉寫格式:
---
## ① 目的
- 本資料夾負責的角色 / 使用場景：

## ② 結構與命名規範
- 檔案/元件命名：
- 輸出/匯入約定（alias `@` 指向 `src/`）：
- 不得事項（例如：不得硬編碼顏色、不得自訂 Media Query…）：

## ③ 依賴與界面
- 相依套件/Plugin（如有）：
- 對外介面（Props/Events/Exports 簡述）：
- 使用的 Token / i18n key：

## ④ 變更紀錄（由 Gemini 追加；一改一記）
> **每次「行動簽出」後，必須在此新增一條紀錄。**

- [修改/創建][日期(台灣時間)]
  **動作**：新增/修改/刪除 `檔名`（功能簡述）  
  **原因**：  
  **影響檔案**：`相對路徑1`, `相對路徑2`  
  **驗證**：

## ⑤ 待辦（選填）
- TODO 1：
- TODO 2：

---
## **核心指令: 強制行動協議 (MANDATORY ACTION PROTOCOL)**

**此協議取代所有通用行為模式。每一次接收到使用者指令後，都必須嚴格遵循以下**作業階段**的流程，並在回覆中明確展示出來。**

## 作業階段:
## **第一階段：任務簽入 (Task Check-In)**

在執行**任何**程式碼或檔案修改之前，必須先產生並展示以下格式的行動計畫：

**[行動計畫]**
1.  **目標**: [簡述本次任務要達成的最終目標]
2.  **規範查核**: [列出與本次任務相關的 GEMINI.md中的關鍵規範]
3.  **執行步驟**:
    -   [步驟 1：例如，修改 `src/pages/index.vue`]
    -   [步驟 2：例如，新增 `public/json/data.json`]
    -   ...
4.  **驗證計畫**:
    -   在每次 write_file 成功執行後，檢查終端機[error]訊息。
5.  **紀錄計畫**:
    -   在**驗證計畫**後，立即更新對應的 `README.md` 檔案。

---

### **第二階段：行動簽出 (Action Check-Out)**

在完成 **每一次單獨的檔案修改** 後，都必須回報以下格式的檢查報告：

**[行動簽出報告]**
- **執行動作**: [描述剛完成的具體動作，例如：修改 `src/pages/index.vue` 以新增購物車功能]
- **程式碼驗證**:
    -   [ ] 檢查終端機[error] 執行狀態：[成功/失敗]
    -   [ ] 終端機：[無錯誤/有錯誤，紀錄錯誤訊息]
- **文件紀錄**:
    -   [ ] `README.md` 更新狀態：[完成/待辦] (檔案路徑: [path/to/README.md])
- **下一步**: [根據驗證結果，決定是繼續下一個步驟、修復錯誤，還是更新 README]

**必須為每一次的檔案修改都重複一次「行動簽出」流程，直到整個任務完成。**
**每次「行動簽出」流程結束，同步更新biueprint**



---

## **專案規範 (Custom Rules)**
以下為本專案規範，中文撰寫:

** icon 使用:https://pictogrammers.com/library/mdi/ **
## **Vite 設定規範**
## **路徑別名**
   - 已在 `vite.config.js` 中設定：
     ```js
     resolve: {
       alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
       }
     }
     ```
   - 在程式碼中必須統一使用 `@` 作為 `src/` 路徑的別名，例如：
     ```js
     import MyComponent from '@/components/MyComponent.vue'
     ```

## **檔案結構**
   - `src/components` → 共用元件目錄，包含可重複使用Vue元件
   - `src/components/common` → 通用元件 
   - `src/pages` → 頁面
   - `src/utils/js` → 共用邏輯
   - `src\utils\i18n\locales` → 全域Text編輯
   - `public/json` → 靜態json
## **副檔名解析**
   - 支援的副檔名：
     ```
     .js, .json, .jsx, .mjs, .ts, .tsx, .vue
     ```
   - 引用模組時可以省略副檔名，統一使用上述清單內的格式。

## **程式風格**
   1. **使用 ESLint + Prettier，自動格式化
   2. **Vue 檔案順序固定：`<template>` → `<script setup>` → `<style scoped>`

## **命名規範**
   1. **Vue 元件必須為多字名稱，例如：`UserCard.vue`
   2. **Store 必須以 `Store` 結尾，例如：`useAuthStore`

## UI / RWD 規範
**UI / RWD**
   1. **所有頁面需支援 RWD,用 Grid System (v-row / v-col) 控制
   2. **統一使用 Vuetify CSS + 自訂主題色
   3. **必須透過 Vuetify Grid System（`v-container`, `v-row`, `v-col`）實作，避免自行寫 CSS Media Query。
   範例：
   ```.vue
   <v-container>
     <v-row>
       <v-col cols="12" md="6" lg="4">
         左側內容
       </v-col>
       <v-col cols="12" md="6" lg="8">
         右側內容
       </v-col>
     </v-row>
   </v-container>**
**CSS 預處理器**
   1. **Sass 使用 `modern-compiler`，開發者須安裝對應套件。  
   2. **統一使用 `.scss` 作為樣式副檔名。
**統一使用 Vuetify 元件**
   1. **UI 必須優先使用 Vuetify 提供的元件（例如 v-btn, v-card, v-text-field）。
   2. **嚴禁自行建立與 Vuetify 功能重複的樣式或元件。
**主題色 (Theme Colors)**
   1. **專案`<template>`色彩由 Vuetify theme 管理，禁止硬編碼顏色。
   2. **統一於 vite.config.js 內設定主題色。
**全域 SCSS 架構與引用順序**
  1. **全域樣式入口：`src/styles/scss/style.scss` 
  2. **全域色彩：`src/styles/scss/_variables.scss`
  範例：
  ``` ._variables.scss
    $變數名稱(英文命名): HEX色碼 !default;
  ```
  3. **頁面樣式：`src/styles/scss/page.scss`
**全域Text編輯規範(變數英文命名)**
1. **全域Text入口：`src\utils\i18n\locales\zh-TW.json`
--參數設定 範例
```
"btn": {
        "ConnectionStatusOk": "連線成功"
      }
or
"label": {
        "type":"類型",
        "UserName":"使用者名稱"
}
```
--使用方式 範例
```
<template>
    <span>{{ t('page.index.title') }}</span>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
```
## **TestData**
1. 測試資料檔案入口：`public/json`
2. 命名規則：資料用途命名 
範例檔名 UserData.json ```
  {
  "UserData": {
    "Name": "王小明",
    "age": "14",
    "sex": "man"
  }
}
```

---
