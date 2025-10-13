# GEMINI 畫面分析報告

**分析目標**：分析「向天泓咖啡廳」線上點餐頁面，拆解其結構、元件與狀態，為前端開發提供可執行的技術規格。
**輸入**：使用者提供的畫面截圖 (`螢幕截圖 2024-05-23 162909.png`)
**行動計畫**：
1) 解析版面 → 2) 主題/色彩轉 Token → 3) 元件矩陣 → 4) 狀態/互動 → 5) 資源盤點 → 6) 實作計畫

---

## 1. 宏觀佈局與 RWD
- **結構**：三欄式結構
  - **左欄**：分類導覽區
  - **中欄**：商品展示區
  - **右欄**：購物車區
- **Vuetify 佈局**：`v-container(fluid) > v-row > v-col`
- **RWD 配置**：
  - **lg (≥1280px)**：左欄 `2` / 中欄 `7` / 右欄 `3` (參考比例)
  - **md (≥960px)**：左欄 `3` / 中欄 `9` / 右欄 `12` (購物車移至下方或 Modal)
  - **sm (≥600px)**：左欄 `12` (變為下拉選單) / 中欄 `12` / 右欄 `12` (隱藏)
  - **xs (<600px)**：單欄佈局，所有內容垂直排列。

**間距/對齊規則**
- 間距 Token 參考 Vuetify 標準，例如 `pa-2`, `ma-4`。
- 商品卡片之間使用 `v-row` 和 `v-col` 的 `gutter` 進行間距控制。
- Z-index：`modal 2000 > fab 1600 > navbar 1200 > content 1`

---

## 2. 視覺主題（Token 映射）
### 2.1 色彩
- `primary`: `#D95A2B` (近似值，用於漸層主色) 用途：選中分類、加入按鈕、結帳按鈕、浮動按鈕。
- `secondary`: `#FCEFEA` (近似值，用於漸層主色) 用途：次要按鈕 (訂位總覽、回到首頁) 的背景色。
- `surface`: `#FFFFFF` 用途：卡片、購物車、頁面背景。
- `on-primary`: `#FFFFFF` (文字對比需驗證)
- `on-secondary`: `#D95A2B` (近似值)
> **執行**：同步至 `src/styles/scss/_variables.scss` 與 Vuetify 主題設定。

### 2.2 字體
- **標題/Logo** (`向天泓咖啡廳`): 特殊字體，帶有藍色漸層，建議作為 SVG 處理。
- **元件標題** (`分類`, `我的購物車`): `font-weight: 500`, `font-size: 1.25rem` (H6)。
- **商品名稱**: `font-weight: 500`, `font-size: 1rem` (Body 1)。
- **價格**: `font-weight: 700`, `color: primary`。
- **購物車總計**: `font-size: 2rem` (H4), `font-weight: bold`, `color: primary`

### 2.3 精細樣式
- **按鈕**：圓角 `rounded-pill`。
- **卡片**：輕微陰影 `elevation-2`，圓角 `rounded-lg`。
- **圖標**：使用 MDI (Material Design Icons)。

#### 2.3.1 漸層 (Gradients)
- **Logo 文字**: 垂直線性漸層 (近似 `#007BFF` → `#00A2FF`)。
- **主要按鈕 (Primary)**: 徑向漸層 (橘紅, 近似 `radial-gradient(circle, #FF8A65, #D95A2B)`)。應用於「加入」、已選分類。
- **次要按鈕 (Secondary)**: 線性漸層 (淡橘, 近似 `linear-gradient(to right, #FFE0B2, #FFCC80)`)。應用於「返回儀表板」、「訂位總覽」、「回到首頁」。
- **結帳按鈕 (Checkout)**: 線性漸層 (粉橘, 近似 `linear-gradient(to right, #FFAB91, #FF8A65)`)。
- **浮動按鈕 (FAB)**: 徑向漸層 (橘紅, 同主要按鈕)。

> **執行**：需在 SCSS 中定義漸層樣式，並透過 class 應用於對應的 Vuetify 元件，因 Vuetify theme 不直接支援漸層背景。

---

## 3. 元件化拆解矩陣（API 完整）
| 元件 | 路徑 | 依賴 Vuetify | Props（name:type|required|default|desc） | Emits | Slots | 狀態 | A11y |
|---|---|---|---|---|---|---|---|
| `CategoryMenu` | `src/components/` | `v-list`, `v-list-item` | `categories:Array|Y|-|分類列表` <br> `activeCategory:String|Y|-|當前選中分類` | `select-category(category:String)` | - | `loading` | `role=navigation` |
| `ProductCard` | `src/components/` | `v-card`, `v-img`, `v-btn`, `v-icon` | `product:Object|Y|-|商品資訊` | `add-to-cart(product:Object)` | - | `loading`, `disabled` | `role=article` (按鈕含`mdi-plus-circle-outline`圖示) |
| `ShoppingCart` | `src/components/` | `v-card`, `v-list`, `v-btn` | `cartItems:Array|Y|-|購物車內商品` <br> `total:Number|Y|-|總計金額` | `checkout` <br> `remove-item(itemId:String)` | `#empty` | `loading`, `empty` | `role=region` (標題含`mdi-cart`圖示) `aria-live=polite` |
| `AppBar` | `src/layouts/default/` | `v-app-bar`, `v-btn` | `title:String|N|向天泓咖啡廳|頁面標題` | `back-to-dashboard` <br> `view-reservations` <br> `back-to-home` | `#actions` | - | Landmark `header` (按鈕含`mdi-book-clock`, `mdi-home`圖示) |
| `HelpFAB` | `src/components/common/` | `v-btn` | - | `open-help-chat` | - | - | `aria-label="聯繫客服"` (含`mdi-message-text-outline`圖示) |

---

## 4. 互動與狀態
- **Loading**:
  - `ProductCard`: 使用 `v-skeleton-loader` (矩形圖片 + 兩行文字)。
  - `CategoryMenu`: 使用 `v-skeleton-loader` (多個條列)。
- **Empty**:
  - `ShoppingCart`: 顯示「購物車是空的」文字，可透過 `#empty` slot 自訂內容。
- **Error**:
  - 商品加載失敗時，在中欄顯示錯誤訊息及重試按鈕。
- **Focus/Hover**:
  - `ProductCard`: `elevation` 增加，顯示更深的陰影。
  - `v-list-item` (分類): 背景色變更。
- **鍵盤操作**: Tab 應能在分類、商品卡片、購物車按鈕、浮動按鈕間有序移動。

---

## 5. 靜態資源盤點
- **i18n** (`zh-TW.json`):
  - `page.title`: "向天泓咖啡廳"
  - `product.addToCart`: "加入"
  - `cart.title`: "我的購物車"
  - `cart.empty`: "購物車是空的"
  - `cart.subtotal`: "小計"
  - `cart.total`: "總計"
  - `cart.checkout`: "前往結帳"
  - `cart.discount.text1`:"全品項85折優惠實施中！"
  - `cart.discount.text2`:"滿500元再送炸物拼盤一份！"
  - `common.help`: "聯繫客服"
- **圖片** (`public/images/`):
  - `menu/`: 存放所有商品圖片，以商品 ID 或英文名命名，例如 `tomato-milk-hotpot.png`。
  - `layout/logo.svg` (建議)
- **JSON** (`public/json/`):
  - `menu.json`: 包含所有商品資訊的陣列 (結構見下節)。

---

## 6. 資料 Schema 與 Mock
```json
// public/json/menu.json
[
  {
    "id": "prod-001",
    "name": "蕃茄牛奶鍋 (雞肉)",
    "category": "特色風味小火鍋",
    "description": "特色風味小火鍋",
    "price": 400,
    "image": "/images/menu/Americano.png" // 暫用圖，需替換
  },
  {
    "id": "prod-002",
    "name": "泰式酸辣鍋 (雞肉)",
    "category": "特色風味小火鍋",
    "description": "特色風味小火鍋",
    "price": 380,
    "image": "/images/menu/latte.png" // 暫用圖，需替換
  }
]
```
- **清單端點/檔案**: `public/json/menu.json`
- **卡片最小需求**: `id`, `name`, `price`, `image`

---

## 7. 性能 / 可用性 / 無障礙

*   **性能**: 商品圖片應使用 `v-img` 的 `lazy-src` 屬性，並考慮對 `menu.json` 進行分頁加載，避免一次性請求過大數據。
*   **可用性**: 在行動裝置上 (sm/xs)，購物車應考慮使用 `v-bottom-sheet` 或跳轉至獨立頁面，以提供更佳體驗。
*   **無障礙**: 所有按鈕需提供 `aria-label`，例如「加入蕃茄牛奶鍋到購物車」。

---

## 8. 差異說明

| 來源 | 項目 | 設計值 | 規範值 | 採用 | 理由 | 影響面 |
|---|---|---|---|---|---|---|
| 截圖 | 按鈕 | 圖示 + 文字 | 規範無此組合 | 設計 | 視覺上更清晰 | `v-btn` |
| 截圖 | LOGO字體 | 特殊黑體 | N/A | 設計 | 品牌識別 | `AppBar` |
| 截圖 | 漸層背景 | 使用漸層 | Vuetify 預設為單色 | 設計 | 豐富視覺層次 | 全站按鈕、Logo |

---

## 9. 風險與缺漏

*   **圖片資源缺失**: 所有商品圖片 (`.png`) 目前皆為示意圖，需由設計提供正式圖檔。
*   **折扣邏輯不明**: 購物車中「全品項85折」、「滿500送炸物」的詳細計算規則未提供，需與後端或 PM 確認。
*   **API 未定義**: 目前使用靜態 JSON (`menu.json`) 作為資料來源，未來需替換為正式的後端 API 端點。
*   **漸層色碼不精確**: 所有漸層顏色均為從截圖中提取的近似值，需由設計師提供精確色碼與漸層角度/類型。

---

## 10. 實作計畫（優先序）

1.  **環境設定**: 在 `vite.config.js` 與 `_variables.scss` 中設定主題色、別名，並新增漸層樣式的輔助 class。
2.  **資料模擬**: 建立 `public/json/menu.json` 靜態檔案。
3.  **元件開發 (由小到大)**:
    1.  `ProductCard.vue`
    2.  `CategoryMenu.vue`
    3.  `ShoppingCart.vue`
    4.  `AppBar.vue`
    5.  `HelpFAB.vue`
4.  **頁面整合**: 在 `src/pages/index.vue` 中組合上述元件，並完成資料綁定與事件處理。
5.  **狀態管理**: 引入 Pinia 或其他狀態管理工具，管理購物車狀態。
6.  **RWD 適配**: 根據 RWD 規劃調整各斷點的顯示效果。
7.  **最終驗證**: 完整測試頁面功能、互動、無障礙與 RWD。
