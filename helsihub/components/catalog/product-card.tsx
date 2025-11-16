'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cart-store';
import type { Product } from '@/types';
import { formatCurrency } from '@/lib/format';

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="card flex flex-col gap-4">
      <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-helsi-beige">
        <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
        <div className="absolute left-4 top-4 flex gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-helsi-green">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <Link href={`/product/${product.slug}`} className="text-lg font-semibold text-helsi-black">
          {product.name}
        </Link>
        <p className="mt-2 text-sm text-gray-500">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-xl font-bold text-helsi-black">{formatCurrency(product.price)}</span>
          <button
            type="button"
            className="rounded-full bg-helsi-green px-4 py-2 text-sm font-semibold text-white shadow-soft"
            onClick={() => addItem(product)}
          >
            Dodaj
          </button>
        </div>
      </div>
    </div>
  );
};
