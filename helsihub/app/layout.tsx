import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';

export const metadata: Metadata = {
  title: 'HelsiHub – Premium Supplements',
  description: 'Sklep internetowy HelsiHub z suplementami klasy premium inspirowany UX iHerb.',
  openGraph: {
    title: 'HelsiHub – Premium Supplements',
    description: 'Polski sklep z suplementami dla fighterów, gamerów i atletów.',
    url: 'https://helsihub.pl',
    siteName: 'HelsiHub',
    locale: 'pl_PL',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-helsi-beige text-helsi-black">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
