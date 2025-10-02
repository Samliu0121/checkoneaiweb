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
## 畫面描述 ---
【畫面結構與 Vue 前端建構說明（向天泓咖啡廳—菜單＋購物車頁）】
版本：v1.0
語言/框架：Vue 3（<script setup>）、Pinia（狀態）、Vue Router（頁面切換）、Vite（開發建置）
UI 工具：可用原生 CSS / Tailwind / Vuetify（下文以中立命名與 class 說明，實作時可對應到任一 UI 套件）

### 1. **畫面分析規範 (更新版)**

當收到設計圖或畫面截圖時，需根據以下結構化框架進行詳細分析，並將結果輸出至 `GEMINI畫面分析.md`。

#### 1.1 **佈局分析 (Layout Analysis)**
*   **主要結構**: 描述畫面的總體佈局（例如：單欄式、雙欄式 - 內容區 + 側邊欄、三欄式）。
*   **網格系統 (Grid System)**: 如可辨識，描述網格的欄數、間距 (gutter)。
*   **RWD 斷點規則**: 根據畫面變化，推斷不同斷點 (lg, md, sm) 下的佈局調整。

#### 1.2 **視覺樣式分析 (Visual Style Analysis)**
*   **1.2.1 色彩與填充 (Color & Fill)**
    *   **色彩類型**: 識別顏色的應用方式。
        *   **純色 (Solid Color)**: `[色碼]` - `[對應的 UI 元素描述]` (例如: `#FFFFFF` - 主背景)。
        *   **漸層 (Gradient)**: 
            *   **類型**: 線性漸層 (Linear) / 徑向漸層 (Radial)。
            *   **方向/角度**: `[例如: to bottom, 45deg]`
            *   **色階 (Color Stops)**: `[起始色碼]` -> `[結束色碼]`。
            *   **應用目標**: `[例如: "向天泓咖啡廳" 標題文字]`。

*   **1.2.2 文字排版 (Typography)**
    *   針對不同文本角色（標題、內文、按鈕文字）分析：
        *   **字體家族 (Font Family)**: `[字體名稱]`。
        *   **字體大小/行高 (Font Size / Line Height)**: `[例如: 16px / 24px]`。
        *   **字體粗細 (Font Weight)**: `[例如: 400 (Regular), 700 (Bold)]`。

*   **1.2.3 特殊視覺效果 (Special Effects & Advanced CSS)**
    *   識別並描述任何超越基本顏色和排版的技術。
    *   **範例**:
        *   **背景裁剪 (Background Clipping)**: 描述如何使用 `background-clip: text` 將背景（如漸層）應用於文字。
        *   **陰影 (Shadows)**: `box-shadow` 或 `text-shadow` 的數值和顏色。
        *   **邊框與圓角 (Borders & Radius)**: `border` 的樣式、`border-radius` 的數值。
        *   **濾鏡與混合模式 (Filters & Blend Modes)**: 如 `filter: blur()` 或 `mix-blend-mode`。

## 執行GEMINI.md,必須完全依照GEMINI.md內強制行動協議及規範,執行作業,確認後開始執行