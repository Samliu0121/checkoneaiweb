各分頁內容，包含首頁及多個功能分頁。

- text需使用src\utils\i18n\locales\zh-TW.json進行管控。

- 依據 /public/images/page/home.png 版型，畫面分為三大區塊：
  1. 左側分類選單（可元件化：CategoryMenu.vue）
  2. 中間商品列表（可元件化：ProductList.vue、ProductCard.vue）
  3. 右側購物車（可元件化：CartSidebar.vue）
- Header 可直接修改編碼，支援返回、訂位總覽、回首頁等按鈕
- 所有可重複使用區塊皆元件化，放置於 src/components/common/

建議元件結構：
- Header.vue
- CategoryMenu.vue
- ProductList.vue
- ProductCard.vue
- CartSidebar.vue

分頁 index.vue 組合以上元件，達到高可維護性與重複使用。