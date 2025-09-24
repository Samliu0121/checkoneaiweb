
import { defineStore } from 'pinia';
import axios from 'axios';

export const useOrderStore = defineStore('order', {
  state: () => ({
    menuData: [], // 完整的菜單，包含分類和產品
    OrderList: [],   // 訂單列表 (歷史訂單)
    shoppingCart: [], // 目前購物車
    currentCategoryIndex: 0, // 當前選中的分類索引
  }),

  getters: {
    // 計算購物車總金額
    cartTotal() {
      return this.shoppingCart.reduce((total, item) => total + item.Price, 0);
    },
    // 獲取所有分類名稱
    categories() {
      return this.menuData.map(category => category.categoryName);
    },
    // 獲取當前分類下的所有產品
    currentCategoryProducts() {
      if (this.menuData.length === 0) {
        return [];
      }
      return this.menuData[this.currentCategoryIndex].products;
    },
  },

  actions: {
    // 從 JSON 獲取菜單資料
    async fetchProducts() {
      try {
        const response = await axios.get('/json/ProductData.json');
        this.menuData = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },

    // 設定當前選中的分類
    setCurrentCategory(index) {
      this.currentCategoryIndex = index;
    },

    // 加入購物車
    addToCart(product) {
      this.shoppingCart.push(product);
    },

    // 結帳
    checkout() {
      if (this.shoppingCart.length === 0) return;

      const newOrder = {
        items: [...this.shoppingCart],
        total: this.cartTotal,
        date: new Date().toLocaleString(),
      };

      this.OrderList.push(newOrder);
      this.shoppingCart = []; // 清空購物車
    },
  },
});
