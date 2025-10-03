## **專案需求**

> **原則**：若設計圖與本規範衝突，**以本規範為優先**；差異需於「差異說明」條列。  
> **產出**：所有分析結果須輸出為 `GEMINI畫面分析.md`（見第 4 節模板）。

---

## 一、專案需求描述為 GEMINI 優先於設計圖分析
- 本文件之規則在未另行註明前，**優先於設計圖**。  
- 設計圖僅作為補充與比對依據；任何與本規範不一致之處，需在「差異說明」列出原因與數值。

---

## 二、元件化分析規範
### 2.1 重複 UI 模式（Repetitive Patterns）
- **目的**：將結構相同、內容不同的區塊元件化。  
- **範例**：商品列表之「商品卡片」`ProductCard.vue`、購物車之「商品項目」`CartItem.vue`。  
- **指令**：`請將 [重複的區塊描述] 元件化為 [ComponentName].vue`。

### 2.2 功能獨立區塊（Functional Blocks）
- **目的**：拆出具獨立狀態與邏輯之區塊。  
- **範例**：右側「我的購物車」`ShoppingCart.vue`（管理清單、計價、結帳 CTA）。  
- **指令**：`請將 [功能區塊描述] 建立為獨立元件 [ComponentName].vue`。

### 2.3 職責邊界（Props & Events）
- **Props**：呈現所需最小資料集合（型別、是否必填、預設）。  
- **Events**：向外通報的事件（事件名、參數）。  
- **指令**：`建立 ProductCard.vue，接收 product 作為 prop，點擊時 emit('add-to-cart', productId)`。

### 2.4 命名與定位（Naming & Placement）
- **命名**：PascalCase（例：`UserCard.vue`、`ShoppingCart.vue`）。  
- **目錄**：
  - 可重用的業務元件：`/src/components/`  
  - 通用基礎元件（Button/Dialog 等）：`/src/components/common/`  
- **指令**：`建立 ProductCard.vue 並置於 /src/components/`。

### 2.5 無設計圖時的元件化流程
1. **從需求抽取名詞**：如「商品列表 / 商品 / 加入按鈕」。  
2. **按功能分組**：如購物車 → `CartList` / `CartItem` / `CheckoutButton`。  
3. **層級與職責**：父元件抓資料、子元件純展示；明確 Props/Emits。

---

## 三、畫面分析報告規範 (V2)

當收到設計圖或畫面截圖時，必須產出以下結構的 `GEMINI畫面分析.md` 報告。此報告是將**視覺設計**精確轉換為**可執行程式碼**的唯一藍圖，涵蓋從宏觀佈局到微觀樣式的全部分析維度。

---

### **`GEMINI畫面分析.md` 模板**

```markdown
# GEMINI 畫面分析報告

**分析目標**: [畫面截圖的簡要描述，例如：電商網站的商品列表頁]

---

## 1. 宏觀佈局 (Macro Layout)

*   **主體結構**: [單欄式 / 雙欄式 (內容+側邊欄) / 三欄式 (導航+內容+購物車) ...]
*   **佈局實現**: 推薦使用 `Vuetify Grid System` (`v-container`, `v-row`, `v-col`)。
*   **RWD 斷點分析**:
    *   **大螢幕 (lg)**: [描述佈局，例如：左側選單佔 2 欄，中間商品區佔 7 欄，右側購物車佔 3 欄]
    *   **平板 (md)**: [描述佈局，例如：左側選單收起，商品區佔 8 欄，購物車佔 4 欄]
    *   **手機 (sm/xs)**: [描述佈局，例如：所有區塊變為單欄堆疊，選單透過漢堡按鈕開關]

---

## 2. 視覺主題 (Visual Theme)

### 2.1 色彩配置 (Color Palette)
*   `primary`: `#[色碼]` - [用途描述]
*   `secondary`: `#[色碼]` - [用途描述]
*   ... (其他 Vuetify 主題色)
*   **執行動作**: 將以上顏色更新至 `src/styles/scss/_variables.scss` 及 `vite.config.js` 的 Vuetify 主題設定中。

### 2.2 字體排版 (Typography)
*   **標題 (Headings)**: `[字體家族]`, `[字重]`, `[大小]`, `[顏色 (關聯到主題色)]`
*   **內文 (Body)**: `[字體家族]`, `[字重]`, `[大小]`, `[顏色]`

### 2.3 精確樣式分析 (Precise Style Analysis)
> **目的**: 捕捉無法被全域主題概括的、特定元件的精細視覺樣式。

*   **漸層 (Gradients)**:
    *   **目標元素**: [例如：`.navbar .brand-title`]
    *   **CSS 實作**: `background-image: linear-gradient(to bottom, #54C7E8, #254A97); -webkit-background-clip: text; background-clip: text; color: transparent;`

*   **圖標 (Icons)**:
    *   **目標**: [例如：購物車按鈕圖標]
    *   **來源**: [MDI: `mdi-cart` / 自訂 SVG 路徑 / 圖片 URL]
    *   **樣式**: `color: accent; font-size: 24px;`

*   **特殊陰影/邊框 (Unique Shadows/Borders)**:
    *   **目標元素**: [例如：`.special-promo-card`]
    *   **CSS 實作**: `box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15); border: 2px dashed var(--v-primary-base);`

---

## 3. 元件化拆解 (Component Breakdown)

| 元件名稱 | Vuetify 元件/標籤 | 路徑 | Props | Events | i18n Keys & 靜態資源 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `PageHeader.vue` | `v-app-bar` | `src/layouts/default/` | `title` | - | `page.header.title` |
| ... | ... | ... | ... | ... | ... |

---

## 4. 靜態資源盤點 (Asset Inventory)

*   **i18n (`zh-TW.json`)**: [列出所有靜態文字]
*   **圖片 (`public/images/`)**: [列出所有圖片/圖示]
*   **JSON (`public/json/`)**: [列出所有資料檔案及其結構]

---

## 5. 實作計畫草案 (Draft Implementation Plan)

1.  **環境設定**: 更新 Vuetify 主題顏色與全域 SCSS。
2.  **資源準備**: 準備 i18n、圖片、JSON。
3.  **元件開發**: 根據元件拆解清單進行開發。
4.  **頁面整合**: 組合所有元件，完成頁面。

```
