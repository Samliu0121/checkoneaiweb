
# GEMINI 畫面分析報告 (向天泓咖啡廳)

## 1. 佈局分析 (Layout Analysis)

*   **主要結構**: 雙欄式佈局。
    *   **左側**: 佔比較大的主內容區，包含頂部 Header 和商品列表。
    *   **右側**: 側邊欄，作為購物車區域。
*   **網格系統 (Grid System)**:
    *   **主內容區 (商品列表)**: 是一個響應式網格佈局。
        *   在大螢幕上（lg），每行顯示 4 個商品。
        *   在中等螢幕上（md），推測為每行 2-3 個商品。
        *   在小螢幕上（sm），推測為每行 1-2 個商品。
    *   **整體頁面**: 可視為一個 12 欄的網格系統。
        *   **左側分類**: `v-col` `cols="12"` `md="2"`
        *   **中間菜單**: `v-col` `cols="12"` `md="7"`
        *   **右側購物車**: `v-col` `cols="12"` `md="3"`
*   **RWD 斷點規則**:
    *   **lg (Large)**: 三欄式佈局（分類、菜單、購物車）。
    *   **md (Medium)**: 可能是兩欄，購物車可能會移至下方或變成彈出式。菜單列表每行項目減少。
    *   **sm (Small)**: 單欄佈局，分類、菜單、購物車垂直堆疊。

## 2. 元件化分析 (Component Analysis)

*   **`ProductCard.vue` (商品卡片)**:
    *   **職責**: 顯示單一商品的資訊，包括圖片、名稱、描述、價格，並提供「加入」按鈕。
    *   **Props**: `product` (Object)，包含 `image`, `name`, `description`, `price`。
    *   **Events**: `@add-to-cart`，點擊「加入」按鈕時觸發，並傳遞商品 ID。
*   **`CategoryMenu.vue` (分類菜單)**:
    *   **職責**: 顯示所有商品分類，並允許用戶篩選。
    *   **Props**: `categories` (Array), `selectedCategory` (String)。
    *   **Events**: `@select-category`，用戶點擊不同分類時觸發。
*   **`ShoppingCart.vue` (購物車)**:
    *   **職責**: 顯示購物車中的商品、數量、小計、總計，並提供結帳按鈕。
    *   **Props**: `cartItems` (Array), `total` (Number)。
    *   **Events**: `@remove-item`, `@update-quantity`, `@checkout`。
*   **`Header.vue` (頁首)**:
    *   **職責**: 顯示 Logo、標題和導航按鈕。
    *   **Props**: `title` (String)。

## 3. 視覺樣式分析 (Visual Style Analysis)

### 3.1 色彩與填充 (Color & Fill)

*   **主色調 (Primary)**: 橘色，用於按鈕、選中狀態和重點提示。
    *   `#F57C00` (推測的橘色) - 用於 "加入" 按鈕、"返回儀表板" 按鈕、"訂位總覽" 按鈕和選中的分類背景。
*   **背景色 (Background)**:
    *   `#FFFFFF` - 卡片背景、購物車背景。
    *   `#F5F5F5` (或類似的淺灰色) - 頁面主背景。
*   **文字顏色 (Text)**:
    *   `#212121` (近黑色) - 主要標題和內文。
    *   `#757575` (灰色) - 商品描述、副標題。
    *   `#FFFFFF` - 按鈕上的文字。
*   **漸層 (Gradient)**:
    *   **類型**: 線性漸層 (Linear)。
    *   **方向**: `to right`。
    *   **色階**: 從較淺的藍色 `(#42A5F5)` 到較深的藍色 `(#1976D2)` (推測)。
    *   **應用目標**: "向天泓咖啡廳" 標題文字，並使用了 `background-clip: text`。

### 3.2 文字排版 (Typography)

*   **標題 (h1, h2)**:
    *   **字體家族**: 一種無襯線字體 (Sans-serif)，如 "Noto Sans TC" 或 "Microsoft JhengHei"。
    *   **字體大小**: 24px - 32px。
    *   **字體粗細**: `700` (Bold)。
*   **商品名稱**:
    *   **字體大小**: 18px。
    *   **字體粗細**: `700` (Bold)。
*   **內文/描述**:
    *   **字體大小**: 14px。
    *   **字體粗細**: `400` (Regular)。
*   **按鈕文字**:
    *   **字體大小**: 14px。
    *   **字體粗細**: `500` (Medium)。

### 3.3 特殊視覺效果 (Special Effects)

*   **背景裁剪 (Background Clipping)**: 應用於主標題 "向天泓咖啡廳"，使漸層背景只顯示在文字內部。
*   **陰影 (Shadows)**:
    *   `v-card` 元件帶有輕微的 `box-shadow`，使其從背景中突顯出來。
    *   按鈕在 `hover` 狀態時可能有更深的陰影。
*   **圓角 (Radius)**:
    *   卡片、按鈕、分類標籤均有 `4px` 到 `8px` 的 `border-radius`。

