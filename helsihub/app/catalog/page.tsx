'use client';

import { useMemo, useState } from 'react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/catalog/product-card';
import { FilterSidebar } from '@/components/catalog/filter-sidebar';
import { SortSelect } from '@/components/catalog/sort-select';
import { useSearchParams } from 'next/navigation';

const applySort = (list: typeof products, sort: string) => {
  switch (sort) {
    case 'price-asc':
      return [...list].sort((a, b) => a.price - b.price);
    case 'price-desc':
      return [...list].sort((a, b) => b.price - a.price);
    case 'newest':
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    default:
      return list;
  }
};

export default function CatalogPage() {
  const params = useSearchParams();
  const [filters, setFilters] = useState({
    category: params.get('category') ?? undefined,
    minPrice: undefined as number | undefined,
    maxPrice: undefined as number | undefined,
    goals: [] as string[]
  });
  const [sort, setSort] = useState('popular');

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (filters.category) {
      result = result.filter((product) => product.category === filters.category);
    }
    if (filters.minPrice) {
      result = result.filter((product) => product.price >= (filters.minPrice ?? 0));
    }
    if (filters.maxPrice) {
      result = result.filter((product) => product.price <= (filters.maxPrice ?? Infinity));
    }
    if (filters.goals.length) {
      result = result.filter((product) => filters.goals.every((goal) => product.goals.includes(goal)));
    }
    return applySort(result, sort);
  }, [filters, sort]);

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      <FilterSidebar value={filters} onChange={setFilters} />
      <section className="flex-1">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Katalog HelsiHub</h1>
            <p className="text-sm text-gray-500">Suplementy tworzone dla rynku PL</p>
          </div>
          <SortSelect value={sort} onChange={setSort} />
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <p className="text-sm text-gray-500">Brak produktów dla wybranych filtrów.</p>
          )}
        </div>
      </section>
    </div>
  );
}
