'use client';

import { useCartStore } from '@/store/cart-store';
import type { Product } from '@/types';

interface Props {
  product: Product;
}

export const AddToCartButton = ({ product }: Props) => {
  const addItem = useCartStore((state) => state.addItem);
  return (
    <button type="button" className="btn-primary" onClick={() => addItem(product)}>
      Dodaj do koszyka
    </button>
  );
};

export const BuyNowButton = ({ product }: Props) => {
  const addItem = useCartStore((state) => state.addItem);
  return (
    <button
      type="button"
      className="rounded-full border border-helsi-green px-6 py-3 text-sm font-semibold text-helsi-green"
      onClick={() => addItem(product)}
    >
      Kup teraz
    </button>
  );
};
