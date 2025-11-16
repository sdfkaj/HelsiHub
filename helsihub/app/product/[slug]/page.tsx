import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { ProductTabs } from '@/components/product/product-tabs';
import { ProductCard } from '@/components/catalog/product-card';
import { formatCurrency } from '@/lib/format';
import { AddToCartButton, BuyNowButton } from '@/components/product/add-to-cart';

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return { title: 'Produkt nie znaleziony' };
  return {
    title: `${product.name} | HelsiHub`,
    description: product.shortDescription
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return notFound();
  const recommendations = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <div className="flex flex-col gap-12">
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="card relative h-96 overflow-hidden">
          <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
        </div>
        <div className="card flex flex-col gap-4 bg-white">
          <p className="text-sm uppercase text-gray-400">{product.category}</p>
          <h1 className="text-3xl font-bold text-helsi-black">{product.name}</h1>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-helsi-beige px-3 py-1 text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xl font-semibold">{formatCurrency(product.price)}</p>
          <label className="text-sm font-semibold text-gray-500">
            Waga / smak
            <select className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm">
              {product.weightOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <div className="flex flex-wrap gap-4 pt-4">
            <AddToCartButton product={product} />
            <BuyNowButton product={product} />
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500">Korzyści</h3>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-gray-600">
              {product.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500">Dla kogo</h3>
            <p className="mt-2 text-sm text-gray-600">{product.targetAudience.join(', ')}</p>
          </div>
        </div>
      </section>
      <ProductTabs
        description={product.longDescription}
        ingredients={product.ingredients}
        nutritionFacts={product.nutritionFacts}
        howToUse={product.howToUse}
      />
      <section>
        <h2 className="text-2xl font-bold">Polecamy również</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {recommendations.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
