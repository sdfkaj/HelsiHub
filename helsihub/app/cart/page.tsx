'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/cart-store';
import { formatCurrency } from '@/lib/format';

export default function CartPage() {
  const { items, increase, decrease, removeItem } = useCartStore();
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const taxes = subtotal * 0.08;
  const total = subtotal + taxes;

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Koszyk</h1>
      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div className="card flex flex-col gap-4">
          {items.length === 0 && <p className="text-sm text-gray-500">Twój koszyk jest pusty.</p>}
          {items.map((item) => (
            <div key={item.product.id} className="flex gap-4 border-b border-gray-100 pb-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl">
                <Image src={item.product.imageUrl} alt={item.product.name} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-lg font-semibold">{item.product.name}</p>
                    <p className="text-sm text-gray-500">{item.product.shortDescription}</p>
                  </div>
                  <button className="text-sm text-red-500" onClick={() => removeItem(item.product.id)}>
                    Usuń
                  </button>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1">
                    <button onClick={() => decrease(item.product.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increase(item.product.id)}>+</button>
                  </div>
                  <span className="text-lg font-semibold">{formatCurrency(item.product.price * item.quantity)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="card h-fit bg-white">
          <h2 className="text-xl font-bold">Podsumowanie</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Podatki</span>
              <span>{formatCurrency(taxes)}</span>
            </div>
            <div className="flex items-center justify-between font-semibold text-helsi-black">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/catalog" className="rounded-full border border-helsi-green px-4 py-3 text-center text-sm font-semibold text-helsi-green">
              Kontynuuj zakupy
            </Link>
            <Link href="/checkout" className="btn-primary w-full text-center">
              Do kasy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
