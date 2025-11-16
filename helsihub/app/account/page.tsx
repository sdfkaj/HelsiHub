'use client';

import { useState } from 'react';
import { useUserStore } from '@/store/user-store';

const tabs = ['orders', 'profile', 'bonus'] as const;
const orders = [
  { id: '#HH1024', total: 429, status: 'W realizacji' },
  { id: '#HH0980', total: 299, status: 'Dostarczono' }
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('orders');
  const { isAuthenticated, profile, bonusPoints } = useUserStore();

  if (!isAuthenticated) {
    return (
      <div className="card text-center">
        <p className="text-lg font-semibold">Zaloguj się, aby zobaczyć konto.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Twoje konto</h1>
        <p className="text-sm text-gray-500">{profile?.email}</p>
      </div>
      <div className="flex gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              activeTab === tab ? 'bg-helsi-green text-white' : 'bg-white text-helsi-black'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'orders' && 'Zamówienia'}
            {tab === 'profile' && 'Profil'}
            {tab === 'bonus' && 'Punkty bonusowe'}
          </button>
        ))}
      </div>
      <div className="card">
        {activeTab === 'orders' && (
          <div className="flex flex-col gap-4">
            {orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between text-sm">
                <span className="font-semibold">{order.id}</span>
                <span>{order.status}</span>
                <span>{order.total} PLN</span>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'profile' && (
          <div className="space-y-2 text-sm text-gray-600">
            <p>Imię: {profile?.firstName}</p>
            <p>Nazwisko: {profile?.lastName}</p>
            <p>Email: {profile?.email}</p>
          </div>
        )}
        {activeTab === 'bonus' && (
          <div className="text-center text-4xl font-bold text-helsi-green">{bonusPoints} pkt</div>
        )}
      </div>
    </div>
  );
}
