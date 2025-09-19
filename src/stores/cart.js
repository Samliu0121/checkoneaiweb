import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),
  getters: {
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + item.price, 0);
    },
  },
  actions: {
    addItem(item) {
      this.items.push(item);
    },
  },
});
