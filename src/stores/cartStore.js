import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref([]);

  // Getters
  const totalItems = computed(() => items.value.length);
  const totalPrice = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0);
  });

  // Actions
  function addItem(item) {
    const existingItem = items.value.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...item, quantity: 1 });
    }
  }

  function removeItem(itemId) {
    const index = items.value.findIndex(i => i.id === itemId);
    if (index !== -1) {
      items.value.splice(index, 1);
    }
  }

  function clearCart() {
    items.value = [];
  }

  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    clearCart,
  };
});
