import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref([]);

  const addToCart = (item) => {
    const existingItem = items.value.find((i) => i.Id === item.Id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...item, quantity: 1 });
    }
  };

  const removeFromCart = (itemToRemove) => {
    const index = items.value.findIndex(item => item.Id === itemToRemove.Id);
    if (index !== -1) {
      items.value.splice(index, 1);
    }
  };

  const decreaseQuantity = (item) => {
    const existingItem = items.value.find((i) => i.Id === item.Id);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity--;
    } else {
      removeFromCart(item);
    }
  };

  const clearCart = () => {
    items.value = [];
  };

  const total = computed(() => {
    return items.value.reduce((acc, item) => acc + item.Price * item.quantity, 0);
  });

  const totalItems = computed(() => {
    return items.value.reduce((acc, item) => acc + item.quantity, 0);
  });

  return { items, addToCart, removeFromCart, decreaseQuantity, clearCart, total, totalItems };
});
