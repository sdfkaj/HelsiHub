import Link from 'next/link';
import { Logo } from './logo';
import { SearchBar } from './search-bar';
import { LanguageSwitcher } from './language-switcher';
import { UserNav } from './user-nav';
import { CartIndicator } from './cart-indicator';

const navLinks = [
  { href: '/catalog', label: 'Katalog' },
  { href: '/#best-sellers', label: 'Bestsellery' },
  { href: '/#benefits', label: 'Dlaczego my' }
];

export const Header = () => (
  <header className="sticky top-0 z-50 border-b border-black/5 bg-helsi-beige/80 backdrop-blur-xl">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center">
      <div className="flex items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-semibold text-gray-500 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-helsi-black">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <UserNav />
          <CartIndicator />
        </div>
      </div>
      <SearchBar />
      <div className="hidden items-center gap-3 md:flex">
        <LanguageSwitcher />
        <UserNav />
        <CartIndicator />
      </div>
    </div>
  </header>
);
