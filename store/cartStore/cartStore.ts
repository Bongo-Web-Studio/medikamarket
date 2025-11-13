"use client";
import { create } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
};

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (item) => {
    const existing = get().items.find((i) => i.id === item.id);
    if (existing) {
      set({
        items: get().items.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + item.qty } : i
        ),
      });
    } else {
      set({ items: [...get().items, item] });
    }
  },
  removeItem: (id) => {
    set({ items: get().items.filter((i) => i.id !== id) });
  },
  updateQty: (id, qty) => {
    set({
      items: get().items.map((i) => (i.id === id ? { ...i, qty } : i)),
    });
  },
  clearCart: () => set({ items: [] }),
  get cartCount() {
    return get().items.reduce((sum, item) => sum + item.qty, 0);
  },
}));
