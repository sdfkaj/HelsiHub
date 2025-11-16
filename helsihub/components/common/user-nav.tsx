'use client';

import Link from 'next/link';
import { User2 } from 'lucide-react';
import { useUserStore } from '@/store/user-store';

export const UserNav = () => {
  const { isAuthenticated, profile } = useUserStore();

  return (
    <Link
      href="/account"
      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-helsi-black shadow-soft"
    >
      <User2 className="h-4 w-4" />
      {isAuthenticated ? profile?.firstName ?? 'Konto' : 'Zaloguj'}
    </Link>
  );
};
