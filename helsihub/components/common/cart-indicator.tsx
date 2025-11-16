'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cart-store';

export const CartIndicator = () => {
  const items = useCartStore((state) => state.items);
  const count = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link href="/cart" className="relative inline-flex items-center rounded-full bg-white p-3 shadow-soft">
      <ShoppingBag className="h-5 w-5 text-helsi-black" />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-helsi-green text-xs text-white">
          {count}
        </span>
      )}
    </Link>
  );
};
