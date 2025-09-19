## **專案需求**

## 
專案:咖啡廳點餐系統前端畫面
1. **專案color:```#ffb58a,#fa320f,#fff```
        
2. **頁面
    1. **首頁**
        -- 將參考圖片push至聊天室:/public/images/ReferencePicture/index.png
        -- 導覽列修改檔案入口:@/layouts/default/navbar.vue
        -- 購物車、菜單樣式,皆使用參考圖片範例
        **功能
        -- 提供消費者閱讀店家商品
        -- 商品用Card呈現,需有明確的商品名稱、圖片、價格
        -- 點擊商品Card,使用dialog呈現商品介紹,圖片
        -- 加入購物車btn,並且購物車中計算價格
        -- 可以切換餐點類別
            餐點圖片入口:public/images/menu
            範例:
                1. 飲品:咖啡,茶,歐蕾
                2. 甜點:布朗尼,甜甜圈,鬆餅
        -- 購物車狀態Card:計算價格,提供金額總計,預覽選擇中餐點,餐點刪除,數量修改
--- 

## **設計圖**
**首頁[image](https://github.com/Samliu0121/checkoneaiweb/blob/main/public/images/%20ReferencePicture/index.png?raw=true)**


## **元件化分析**
## **如有提供設計圖,請以下規範分析將該區塊元件化**
1.  **識別重複出現的 UI 模式 (Repetitive Patterns):**
    *   **分析**: 找出畫面中結構相同、但內容不同的所有元素。這些是元件化的首要目標。
    *   **範例**: 商品列表中的每一張「商品卡片」(`ProductCard.vue`)、購物車中的每一個「商品項目」(`CartItem.vue`)。
    *   **指令**: "請將[重複的區塊描述]元件化為 `[ComponentName].vue`。"

2.  **隔離功能獨立的區塊 (Functional Blocks):**
    *   **分析**: 尋找管理著特定、獨立功能的區塊。這些區塊通常有自己的內部狀態和複雜邏輯。
    *   **範例**: 右側的「我的購物車」(`ShoppingCart.vue`)，它獨立管理購物車內容、計算總價等。
    *   **指令**: "請將[功能區塊描述]建立為一個獨立的元件 `[ComponentName].vue`。"

3.  **劃分元件職責 (Props & Events):**
    *   **分析**: 為每個待建立的元件定義其職責邊界。
        *   **Props (屬性)**: 它需要接收哪些資料才能正確顯示？(例如，`ProductCard` 需要一個 `product` 物件)。
        *   **Events (事件)**: 它需要對外發出哪些通知？(例如，`ProductCard` 在點擊按鈕後，需要發出 `@addToCart` 事件)。
    *   **指令**: "建立 `ProductCard.vue`，它需要接收 `product` 作為 prop，並在點擊時發出 `addToCart` 事件。"

4.  **命名與定位 (Naming & Placement):**
    *   **分析**: 根據 `GEMINI.md` 的規範，為元件命名並決定其存放位置。
        *   **命名**: 必須是多字、PascalCase 格式，例如 `UserCard.vue`、`ShoppingCart.vue`。
        *   **定位**:
            *   可於多個頁面重複使用的業務元件，應放置於 `src/components/`。
            *   極度通用、與業務邏輯無關的基礎元件（如自定義按鈕、對話框），應放置於 `src/components/common/`。
    *   **指令**: "建立 `ProductCard.vue` 並將其放置在 `src/components/` 目錄下。"

## **如無提供設計圖,請以下文字描述進行元件化**
1.  **從需求文字中提取名詞 (Extract Nouns from Requirements):**
    *   **分析**: 仔細閱讀需求文檔，將描述到的所有具體「事物」或「區塊」當作潛在的元件。
    *   **範例**: 如果需求提到「顯示一個**商品列表**，每個**商品**都應有**加入按鈕**」，那麼「商品列表」、「商品」、「加入按鈕」都是元件的候選者。
    *   **指令**: "根據需求，我識別出以下潛在元件：`ProductList`、`ProductItem`、`AddToCartButton`。"

2.  **按功能組織和分組 (Group by Functionality):**
    *   **分析**: 將提取出的名詞按照其在系統中的功能進行分組。一個複雜的功能區塊可能由數個小元件組成。
    *   **範例**: 「購物車」功能可能包含「購物車列表」(`CartList`)、「購物車項目」(`CartItem`) 和「結帳按鈕」(`CheckoutButton`)。
    *   **指令**: "我建議將購物車功能拆分為 `CartList`、`CartItem` 和 `CheckoutButton` 三個元件。"

3.  **定義元件的職責與層級 (Define Responsibilities and Hierarchy):**
    *   **分析**: 思考元件之間的父子關係。哪個元件管理狀態？哪個元件僅負責顯示？
    *   **範例**: `ProductList` (父元件) 應該負責獲取商品資料，然後透過 `v-for` 將單個 `product` 資料傳遞給多個 `ProductItem` (子元件)。
    *   **指令**: "`ProductList` 將作為父元件，獲取資料並遍歷 `ProductItem` 子元件，將 `product` 資料作為 prop 傳入。"

## **畫面描述** 
【畫面結構與 Vue 前端建構說明（向天泓咖啡廳—菜單＋購物車頁）】
版本：v1.0
語言/框架：Vue 3（<script setup>）、Pinia（狀態）、Vue Router（頁面切換）、Vite（開發建置）
UI 工具：可用原生 CSS / Tailwind / Vuetify（下文以中立命名與 class 說明，實作時可對應到任一 UI 套件）

────────────────────────────────────────
一、頁面總覽與版面配置
────────────────────────────────────────
頁面類型：商品清單 + 側邊購物車
整體佈局：
- Header（上方工具列）
- Main（左右兩欄）
  - LeftAside：分類目錄（左側窄欄）
  - ProductArea：商品卡片網格（中間主欄）
  - RightAside：購物車（右側窄欄）

使用 CSS Grid 或 Flex：
- Grid 方案：
  .page { display: grid; grid-template-rows: auto 1fr; height: 100vh; }
  .main { display: grid; grid-template-columns: 220px 1fr 360px; gap: 16px; }
- RWD：
  ≥1280px：維持三欄
  1024–1279px：購物車折疊為抽屜；主區域改 220px + 1fr
  <1024px：改為上下結構（分類折疊成 Drawer），商品採 2 欄或 1 欄，購物車以浮動/底部抽屜呈現
三、各區塊視覺與交互細節
────────────────────────────────────────
1) HeaderBar
- 置中頁名（大字：「向天泓咖啡廳」），左右各有功能鈕。
- 左上角「返回樣板」為淺橘色 Pill 按鈕；右側兩顆為淺色圓角按鈕。
- 事件：
  - onBackTemplate()：返回上一頁或樣板清單
  - onReservation()：導向訂位頁/外部連結
  - onHome()：回到首頁（router.push('/')）

2) CategorySidebar（左側分類）
- 包含：特色風味小火鍋、特色風味簡餐、單品咖啡、義式咖啡、茶、無咖啡因飲品、甜點、炸物
- 目前「特色風味小火鍋」高亮（紅底白字；圓角 Pill），其他為一般清單。
- 交互：點擊分類 → 觸發 setCategory(categoryId) → ProductGrid 依分類過濾。
- 可支援「滾動同步」：當中間商品滾動到某分類分段時，左側自動高亮對應分類。

3) ProductGrid（商品卡片區）
- 每列 3 張卡片（≥1280px），卡片等高，含大圖、品名、副標/標籤、售價、加入按鈕。
- 商品命名樣式（示例）：
  - 蕃茄牛切鍋（雞肉）—售價 NT$400
  - 泰式酸辣鍋（雞肉）—NT$380
  - 羊奶相相鍋（雞肉）—NT$380 等等
- 卡片元素：
  - 商品圖（上方）
  - 文字區：標題（粗體）、副標（灰字，如「特色風味小火鍋」）
  - 售價（「NT$380」）
  - 行動列：
    - 「加入」圓角紅色按鈕，含購物車小圖示與文字
- 事件/狀態：
  - addToCart(product, qty=1)
  - 可擴充：點卡進入「商品詳情對話框」選擇口味/加料/備註

4) CartSidebar（右側購物車）
- 空狀態：顯示「購物車是空的」
- 有品項時：
  - 列出每個 CartItem（縮圖、品名、口味、單價、數量 +/-、小計、刪除）
  - 活動橫幅（例：全品項85折優惠實施中！、滿500元再送炸物拼盤一份！）
  - 小計、總計（粗體）
  - 「前往結帳」主要按鈕（滿版橘色），disabled 條件：購物車為空或未達最低金額
- 右下角圓形按鈕（畫面顯示的「？」風格）：可作為「客服/說明/QA」
- 事件：
  - updateQty(itemId, +1/-1)
  - removeItem(itemId)
  - applyCoupon(code)（可在 CartPromo 中）
  - goCheckout()
  - 價格使用整數（TWD），顯示「NT$」字樣由前端格式化。
5) RWD 與可用性建議
────────────────────────────────────────
- 手機版將左側分類與右側購物車改為抽屜（Drawer）；固定底部顯示「查看購物車（總計）」浮動條。
- 圖片需等比例裁切（object-fit: cover）確保網格整齊。
- 鍵盤操作：Tab 可導覽卡片與加入按鈕。
- 無障礙：img 加 alt、按鈕加 aria-label、金額朗讀友善。
6) 骨架已對應到畫面：
- 左側類別清單（「特色風味小火鍋」高亮）
- 中間 3xN 商品卡（每張含圖、標題、副標、價格、加入）
- 右側購物車（空狀態、活動提示、小計/總計、前往結帳）
---
 **讀取GEMINI.md文件，強制行動協議、專案規範絕對優先級，須將規範輸出至聊天室(輸出完成需返回GEMINI.md逐項確認)，此後所有需求以此規範進行。**
