import Link from 'next/link';

export const Logo = () => (
  <Link href="/" className="flex items-center gap-2 text-xl font-bold text-helsi-black">
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-helsi-green/10 text-helsi-green">
      ❤︎
    </span>
    HelsiHub
  </Link>
);
