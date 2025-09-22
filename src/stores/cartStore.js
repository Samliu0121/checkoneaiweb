import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // { productId, name, price, quantity }
  }),
  getters: {
    // 購物車商品總數
    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    // 小計 (折扣前)
    subtotal: (state) => {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    // 折扣金額 (全品項85折)
    discount: (state) => {
        const discountRate = 0.15; // 85折等於減去15%
        return state.subtotal * discountRate;
    },
    // 總計 (折扣後)
    total: (state) => {
        return state.subtotal - state.discount;
    },
    // 滿額贈品提示
    bonusMessage: (state) => {
        const threshold = 500;
        if (state.total >= threshold) {
            return '已達滿額贈條件！';
        } else {
            return `差${threshold - state.total}元即可獲得炸物拼盤一份！`;
        }
    }
  },
  actions: {
    addToCart(product) {
      const existingItem = this.items.find(item => item.productId === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ 
            productId: product.id, 
            name: product.name, 
            price: product.price, 
            quantity: 1 
        });
      }
    },
    removeFromCart(productId) {
      const index = this.items.findIndex(item => item.productId === productId);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
    clearCart() {
      this.items = [];
    },
  },
});
