import { create } from 'zustand';

interface CartItem {
  key: string;
  productId: string;
  name: string;
  priceCents: number;
  color: string;
  size: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>, qty: number) => void;
  totalItems: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item, qty) => set((state) => {
    const existing = state.items.find(i => i.key === item.key);
    if (existing) {
      return { items: state.items.map(i => i.key === item.key ? {...i, quantity: i.quantity + qty} : i) };
    }
    return { items: [...state.items, { ...item, quantity: qty }] };
  }),
  totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}));