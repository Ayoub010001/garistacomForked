import create from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'react-hot-toast';

// Helper function to calculate price based on volume
const calculatePrice = (product, volume) => {
  const price = volume === '30' ? product.price : product.priceBig;
  return price;
};

const useCart = create(persist((set, get) => ({
  items: [],

  addItem: (data, quantity) => {
    const productToAdd = {
      id: data.id,
      name: data.name,
      quantity: quantity,
    };
    const currentItems = get().items;
    const existingItemIndex = currentItems.findIndex(item => item.id === data.id);

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update the quantity
      set(state => {
        const updatedItems = [...state.items];
        const existingItem = updatedItems[existingItemIndex];
        existingItem.quantity += quantity;
        return { items: updatedItems };
      });
      toast.success(`Quantity updated for ${data.name}.`);
    } else {
      // If the item does not exist in the cart, add it with the specified quantity
      set({ items: [...get().items, { ...data, quantity,}] });
      toast.success('Item added to cart.');
    }
  },

  incrementQuantity: (id) => {
    set(state => {
      const updatedItems = state.items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { items: updatedItems };
    });
  },

  decrementQuantity: (id) => {
    set(state => {
      const updatedItems = state.items.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
      return { items: updatedItems };
    });
  },

  removeItem: (id) => {
    set({ items: get().items.filter(item => item.id !== id) });
    toast.success('Item removed from cart.');
  },

  removeAll: () => {
    set({ items: [] });
    toast.success('All items removed from cart.');
  },

}), {
  name: 'cart-storage',
  getStorage: () => localStorage,
  serialize: state => JSON.stringify(state),
  deserialize: serialized => JSON.parse(serialized)
}));

export default useCart;
