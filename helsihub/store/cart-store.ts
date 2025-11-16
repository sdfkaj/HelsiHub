'use client';

import { create } from 'zustand';
import type { Product } from '@/types';

export type CartItem = {
  product: Product;
  quantity: number;
  variant?: string;
};

interface CartState {
  items: CartItem[];
  addItem: (product: Product, variant?: string) => void;
  removeItem: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (product, variant) =>
    set((state) => {
      const existing = state.items.find((item) => item.product.id === product.id && item.variant === variant);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id && item.variant === variant
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return { items: [...state.items, { product, quantity: 1, variant }] };
    }),
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.product.id !== id) })),
  increase: (id) =>
    set((state) => ({
      items: state.items.map((item) => (item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    })),
  decrease: (id) =>
    set((state) => ({
      items: state.items
        .map((item) => (item.product.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    })),
  clear: () => set({ items: [] })
}));
