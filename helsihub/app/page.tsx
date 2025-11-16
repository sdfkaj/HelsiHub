import Link from 'next/link';
import Image from 'next/image';
import { ProductCard } from '@/components/catalog/product-card';
import { products, categories } from '@/data/products';

const heroImage = 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1400&q=80';

const perks = [
  { title: 'Ekspresowa wysyłka', description: '24h z magazynu w Warszawie' },
  { title: 'Lab tested', description: 'Każda partia analizowana w UE' },
  { title: 'Made in EU', description: 'Produkcja w certyfikowanych zakładach' }
];

export default function HomePage() {
  const bestSellers = products.slice(0, 4);

  return (
    <div className="flex flex-col gap-16">
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="card flex flex-col justify-center gap-6 bg-gradient-to-br from-helsi-green to-emerald-600 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">HelsiHub</p>
          <h1 className="text-4xl font-bold leading-tight">Premium Supplements by HelsiHub</h1>
          <p className="text-lg text-white/80">For fighters, gamers and athletes.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/catalog" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-helsi-green">
              Shop now
            </Link>
            <Link href="#best-sellers" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white">
              Best sellers
            </Link>
          </div>
        </div>
        <div className="relative h-96 overflow-hidden rounded-3xl">
          <Image src={heroImage} alt="HelsiHub hero" fill className="object-cover" priority />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Popularne kategorie</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/catalog?category=${category}`}
              className="card flex flex-col gap-2 bg-white"
            >
              <span className="text-sm uppercase text-gray-400">Kategoria</span>
              <span className="text-xl font-semibold">{category}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="best-sellers" className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Bestsellery</h2>
          <Link href="/catalog" className="text-sm font-semibold text-helsi-green">
            Zobacz wszystkie
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="benefits" className="grid gap-6 md:grid-cols-3">
        {perks.map((perk) => (
          <div key={perk.title} className="card bg-white">
            <h3 className="text-xl font-semibold text-helsi-black">{perk.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{perk.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
