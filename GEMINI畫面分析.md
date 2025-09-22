## **檔案名稱[GEMINI畫面分析.md]**
**專案:[向天泓咖啡廳]
版本：v[1.0]
語言/框架：Vue 3（<script setup>）、Pinia（狀態）、Vue Router（頁面切換）、Vite（開發建置）
UI 工具：Vuetify
1. **專案主色調**:
    - 主色 (按鈕、選中項): `#D95F52`
    - 輔色 (提示、背景): `#FDF3F2`
    - 文字/標題: `#333333`
    -- [編輯SCSS]: `src/styles/scss/_variables.scss`
2. **[page][首頁]**
    -- [檔案名稱]: `index.vue`
    -- [page檔案路徑]: `src/pages/index.vue`
    -- [功能]: 顯示菜單分類、商品列表和購物車。
    -- [布局結構]: 三欄式佈局。
        - 左欄：分類導航 (`v-navigation-drawer`)。
        - 中欄：商品展示區 (`v-main`)，使用 `v-row` 和 `v-col` 呈現網格。
        - 右欄：購物車 (`v-navigation-drawer`，`permanent`，`location="right"`)。
    -- [響應式設計]:
        - `v-col` 的 `cols`, `md`, `lg` 屬性將用於控制不同螢幕尺寸下的商品卡片寬度。
        - 購物車和分類導航在小螢幕上可能需要調整為浮動或隱藏。
    -- [顏色分析]:
        - 背景: `#F5F5F5` (頁面整體背景)
        - 區塊: `#FFFFFF` (商品卡片、購物車、分類背景)
        - 按鈕: `#D95F52` ("加入"、"前往結帳"按鈕)
        - Card: `#FFFFFF` (商品卡片背景)
    -- [補充]: 頁面頂部有一個 Header，包含 Logo 和返回儀表板等按鈕，應為 `default.vue` 佈局的一部分。
3. **[components][業務元件]**
    -- [元件名稱]: `CategoryMenu.vue`
    -- [元件檔案路徑]: `src/components/CategoryMenu.vue`
    -- [功能]: 顯示所有商品分類，並允許使用者切換。
    -- [Props]: `categories` (Array of category objects), `selectedCategory` (String)
    -- [Events]: `@selectCategory` (當用戶點擊一個分類時觸發)
    -- [佈局結構]: 使用 `v-list` 和 `v-list-item` 渲染分類列表。
    -- [顏色分析]: 選中項背景色為 `#D95F52`。

    -- [元件名稱]: `ProductCard.vue`
    -- [元件檔案路徑]: `src/components/ProductCard.vue`
    -- [功能]: 以卡片形式顯示單一商品資訊。
    -- [Props]: `product` (Object with name, image, price, etc.)
    -- [Events]: `@addToCart` (點擊"加入"按鈕時觸發)
    -- [佈局結構]: 使用 `v-card`，包含 `v-img`, `v-card-title`, `v-card-subtitle`, `v-card-actions`。
    -- [顏色分析]: 按鈕顏色為 `#D95F52`。

    -- [元件名稱]: `ShoppingCart.vue`
    -- [元件檔案路徑]: `src/components/ShoppingCart.vue`
    -- [功能]: 顯示購物車中的商品、計算總計、應用折扣和觸發結帳。
    -- [Props]: `cartItems` (Array of cart items)
    -- [Events]: `@checkout` (點擊"前往結帳"時觸發)
    -- [佈局結構]: 包含標題、商品列表 (`v-list`)、小計、總計和結帳按鈕 (`v-btn`)。
    -- [顏色分析]: 總計文字、結帳按鈕為 `#D95F52`。

4. **[GEMINI補充]**
    -- Logo "向天泓咖啡廳" 應為圖片或特殊字體，需確認資源。
    -- Header 中的 "訂位總覽" 和 "回到首頁" 按鈕樣式為 `v-btn`，並帶有 icon。
    -- 購物車中的優惠訊息 "全品項85折優惠實施中!" 和 "滿500元再送炸物拼盤一份!" 應為動態文字，可由後端或全域狀態管理。
