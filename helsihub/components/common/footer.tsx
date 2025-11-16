import Link from 'next/link';

const footerLinks = [
  { label: 'O nas', href: '/#about' },
  { label: 'Regulamin', href: '#' },
  { label: 'Polityka prywatności', href: '#' },
  { label: 'Kontakt', href: '#' }
];

export const Footer = () => (
  <footer className="mt-16 border-t border-black/5 bg-white">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-gray-500">© {new Date().getFullYear()} HelsiHub. Premium supplements dla Polski.</p>
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        {footerLinks.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-helsi-green">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);
