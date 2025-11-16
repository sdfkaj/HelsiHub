'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { products } from '@/data/products';
import Link from 'next/link';

export const SearchBar = () => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query) return [];
    return products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5);
  }, [query]);

  return (
    <div className="relative flex-1">
      <div className="flex items-center rounded-full bg-white px-4 py-2 shadow-soft">
        <Search className="h-4 w-4 text-gray-500" />
        <input
          className="ml-2 w-full bg-transparent text-sm outline-none"
          placeholder="Szukaj produktów"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      {filtered.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl bg-white p-4 shadow-soft">
          <p className="mb-2 text-xs uppercase text-gray-400">Popularne</p>
          <div className="flex flex-col gap-2">
            {filtered.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="text-sm text-helsi-black">
                {product.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
