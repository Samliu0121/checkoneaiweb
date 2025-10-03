# GEMINI 畫面分析執行規範（強化可複製版）

> **總原則**
>
> 1. 若設計圖與本規範衝突，**以本規範為優先**；
> 2. 所有不一致處，**必須**填寫「差異說明」表；
> 3. 唯一輸出產物為 **`GEMINI畫面分析.md`**（依本文模板）。

---

## 0. 執行流程（MANDATORY）

**任務簽入（Task Check‑in）**

* 列出：分析目標、輸入檔（設計圖/截圖/路徑）、預期產出、風險與假設。
* 以 ≤10 行行動計畫（步驟 + 依賴）描述執行順序。

**分析產出（Deliverables）**

* 嚴格依「第 10 節模板」輸出 `GEMINI畫面分析.md`。
* 缺圖或資訊不足 → 於「風險與缺漏」記錄可驗證假設。

**驗收（Acceptance）檢核清單**

* ✅ 有「差異說明表」
* ✅ RWD 斷點完整（lg/md/sm/xs）
* ✅ **元件 API 表**（Props/Emits/Slots/States/A11y）
* ✅ i18n / 圖片 / JSON 資源盤點
* ✅ 可執行的實作計畫與優先序

---

## 1. 規範優先與差異管理

* 本規範 **優先** 於設計圖；設計圖僅作比對依據。
* 任何差異 **必填** 下表：

| 來源  | 項目   | 設計值 |  規範值 | 採用 | 理由                  | 影響面  |
| --- | ---- | --: | ---: | -- | ------------------- | ---- |
| 設計圖 | 卡片邊角 | 6px | 12px | 規範 | 與全站 radius token 對齊 | 所有卡片 |

> **填寫規則**：一行一差異；「採用」必為 `設計圖/規範` 其一；「影響面」需能被工程追蹤（元件或頁面層級）。

---

## 2. 元件化拆解規範

### 2.1 識別規則

* **重複結構/內容不同 → 元件化**（例：`ProductCard.vue`）。
* **獨立狀態/邏輯 → 功能元件**（例：`ShoppingCart.vue`）。
* **跨頁可重用 → `/src/components/`；通用 Primitive → `/src/components/common/`**。

### 2.2 命名/定位

* 檔名：**PascalCase**（`UserCard.vue`）。
* 目錄：

  * 業務元件：`/src/components/`
  * 通用元件：`/src/components/common/`
  * 佈局：`/src/layouts/`
  * 頁面：`/src/pages/`

### 2.3 元件 API（必填表格）

| 元件 | 路徑 | 依賴 Vuetify | Props（name:type|required|default|desc） | Emits（event(payload)） | Slots | States（loading/empty/error/active/disabled） | A11y |
|---|---|---|---|---|---|---|---|
| ProductCard | `src/components/` | `v-card, v-img, v-btn` | `product:Object|Y|-|含 id/name/price/img` | `add-to-cart(id:number)` | `#actions` | loading, disabled | `role=article`, 按鈕 `aria-label` |

> **指令樣板**：建立 `ProductCard.vue` 於 `/src/components/`，接收 `product:Object(required)`，點擊加入 emit(`add-to-cart`, product.id)，提供 `#actions` slot。

---

## 3. 佈局 / RWD / 間距

* **Grid**：優先 `v-container > v-row > v-col`。
* **預設斷點**（可覆寫並需明列於報告）：xs <600，sm ≥600，md ≥960，lg ≥1280。
* **間距 Token（示例）**：`space-0=0, 1=4px, 2=8px, 3=12px, 4=16px, 5=24px, 6=32px, 7=48px`。
* **Z-index 層級**：`modal 2000 > dropdown 1500 > overlay 1400 > navbar 1200 > content 1`。
* **對齊規則**：需描述圖文排列（例：圖左文右，垂直置中）。

---

## 4. 視覺主題代碼化

### 4.1 色彩 Token（**禁止硬編碼 HEX**）

* `primary/secondary/success/warning/error/info/surface/on-*` → 一律寫入 `src/styles/scss/_variables.scss` 與 Vuetify 主題設定。
* **對比度**：文字對比需 ≥ 4.5:1（小字）/ 3:1（大字）；於報告標記未達標處置方案。

### 4.2 字體系統

* H1–H6/Body/Caption：家族、字重（400/500/700）、字級、行高。
* 按鈕字體與顏色綁 `primary/on-primary` 規則。

### 4.3 Elevation / Radius / Motion

* 陰影三檔（低/中/高）對映 `v-card` elevation。
* 圓角：`radius-1=8px, radius-2=12px, radius-3=16px`（示例）。
* 動效：進場/懸浮/點擊（easing/duration/distance）。

---

## 5. 互動狀態（必覆蓋）

* **Loading**：Skeleton 或 `v-progress-circular`；提供配置。
* **Empty**：插圖/文案與 i18n key 位置。
* **Error**：錯誤卡、重試按鈕之事件。
* **Focus/Hover/Active/Disabled**：需列出樣式差異（陰影、邊框、顏色）。
* **鍵盤操作**：Tab 順序、Enter/Space 行為、`aria-*`。

---

## 6. 圖標與圖片

* 圖標來源（MDI 名稱或 SVG 路徑），大小單位（px/rem），顏色對應哪個 token。
* 圖片裁切與比例（`cover/contain`），固定尺寸或等比策略。
* 特殊遮色片/濾鏡/漸層 → 提供 CSS 片段。

---

## 7. 最小資料 Schema（前端）

```json
{
  "product": {
    "id": 123,
    "name": "商品名稱",
    "price": 499,
    "coverUrl": "/images/p123.jpg",
    "badges": ["new", "hot"]
  }
}
```

> **要求**：對每個關鍵元件列出最小可渲染資料結構；若後端未提供 → 於第 9 節附 Mock JSON。

---

## 8. i18n 與靜態資源

* **i18n key 命名**：`page.section.element.state`（例：`product.card.add`）。
* **圖片**：`public/images/[模組]/[語意].png`。
* **JSON**：`public/json/[模組]/[語意].json`。

---

## 9. 性能 / 可用性 / 無障礙（分析時即列出）

* 首屏卡片數、圖片尺寸建議、lazy 策略（如需虛擬卷軸則註明）。
* 互動回饋 ≤ 100ms，轉場 ≤ 300ms。
* 無障礙：表單 label、aria-label、tabIndex、對比度。

---

## **10. `GEMINI畫面分析.md` 輸出模板**

````markdown
# GEMINI 畫面分析報告

**分析目標**：[…簡述畫面/頁…]  
**輸入**：[…設計圖連結/檔名…]  
**行動計畫**：
1) 解析版面 → 2) 主題/色彩轉 Token → 3) 元件矩陣 → 4) 狀態/互動 → 5) 資源盤點 → 6) 實作計畫

---

## 1. 宏觀佈局與 RWD
- **結構**：單欄 / 雙欄 / 三欄（說明每欄用途）
- **Vuetify 佈局**：`v-container > v-row > v-col`
- **RWD 配置**：
  - **lg (≥1280)**：[…欄寬、顯/隱…]
  - **md (≥960)**：[…]
  - **sm (≥600)**：[…]
  - **xs (<600)**：[…]

**間距/對齊規則**  
- 間距 Token：`space-1=4px`…  
- 卡片群組水平/垂直對齊：[…]  
- Z-index：`modal 2000 > dropdown 1500 > navbar 1200 > content 1`

---

## 2. 視覺主題（Token 映射）
### 2.1 色彩
- `primary`: `#xxxxxx` 用途：主要 CTA / 高亮
- `secondary`: `#xxxxxx` 用途：次級按鈕
- `surface`: `#xxxxxx` 用途：卡片底
- `on-primary`: `#xxxxxx`（文字對比 ≥ 4.5:1）
> **執行**：同步至 `src/styles/scss/_variables.scss` 與 Vuetify 主題設定。

### 2.2 字體
- H1–H6/Body/Caption：字體、字重、字級、行高
- 按鈕字體/大小/字重：[…]

### 2.3 精細樣式（僅列差異）
- **漸層**（目標 / CSS 片段）
- **陰影/邊框**（目標 / CSS 片段）
- **圖標**（來源/大小/顏色 token）

---

## 3. 元件化拆解矩陣（API 完整）
| 元件 | 路徑 | 依賴 Vuetify | Props（name:type|required|default|desc） | Emits | Slots | 狀態 | A11y |
|---|---|---|---|---|---|---|---|
| PageHeader | `src/layouts/default/` | `v-app-bar` | `title:String|Y|-|頁標` | - | `#actions` | - | Landmark `header` |
| ProductCard | `src/components/` | `v-card,v-img,v-btn` | `product:Object|Y|-|見第7節` | `add-to-cart(id:number)` | `#actions` | loading/disabled | `role=article` |
| … | … | … | … | … | … | … | … |

---

## 4. 互動與狀態
- **Loading**：`v-skeleton-loader`（卡片圖 + 兩行文）
- **Empty**：插圖 `images/empty/product.png`，文案 `i18n: product.empty`
- **Error**：錯誤卡 + `重試`（emit: `retry`）
- **Focus/Hover**：按鈕陰影 + 邊框色變更（token）
- **鍵盤操作**：Tab 流程、Enter/Space 行為

---

## 5. 靜態資源盤點
- **i18n**（`zh-TW.json`）：  
  - `product.card.add`: "加入購物車"  
  - `product.empty`: "目前沒有商品"
- **圖片**（`public/images/`）：  
  - `product/empty.png`（600×400, ≤60KB）
- **JSON**（`public/json/`）：  
  - `product/mock-list.json`（結構見第 7 節）

---

## 6. 資料 Schema 與 Mock
```json
{
  "product": {
    "id": 123,
    "name": "商品名稱",
    "price": 499,
    "coverUrl": "/images/product/p123.jpg",
    "badges": ["new", "hot"]
  }
}
````

* **清單端點/檔案**：`public/json/product/mock-list.json`
* **卡片最小需求**：`id, name, price, coverUrl`

---

## 7. 性能 / 可用性 / 無障礙

* 首屏最多 12 張卡片，清單採 lazy/虛擬卷軸（如需）
* 圖片：`<v-img>` `lazy-src` + 尺寸（w=360, h=240）
* 對比度：檢核 `on-primary` 文色 ≥ 4.5:1

---

## 8. 差異說明

| 來源  | 項目       |  設計值 |  規範值 | 採用 | 理由           | 影響面  |
| --- | -------- | ---: | ---: | -- | ------------ | ---- |
| 設計圖 | CTA 文字大小 | 18px | 16px | 規範 | 與按鈕 token 同步 | 全站按鈕 |
| 規範  | 卡片圓角     | 12px | 12px | 規範 | 一致           | 無    |

---

## 9. 風險與缺漏

* [缺圖/缺 key/無法辨識字級 …]
* 假設：[無折扣時，`price` 即售價]

---

## 10. 實作計畫（優先序）

1. **主題設定**（色彩 token、字體、陰影/半徑）
2. **基礎元件**（Button/Dialog/Icon）
3. **業務元件**（ProductCard → List → 篩選）
4. **狀態佈局**（loading/empty/error）
5. **整頁組裝與 i18n/資源接線）
6. **RWD/可用性與對比度調整**

```

---

## 11. 直接可用指令樣板（複製即用）

- **重複模式元件化**  
`請將「商品卡片」（圖片/標題/價格/加入按鈕）元件化為 ProductCard.vue，放在 /src/components/，Props=product:Object(required)，Emits=add-to-cart(id:number)，Slots=#actions。`

- **功能元件拆出**  
`請建立 ShoppingCart.vue（/src/components/），管理清單/小計/結帳 CTA，Props=items:Array，Emits=checkout(items)。`

- **主題映射**  
`請將設計圖中 #005BBB 映射為 primary，#FFD500 映射為 secondary，寫入 _variables.scss 並同步至 Vuetify 主題設定。`

```
