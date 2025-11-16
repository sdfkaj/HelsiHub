'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/user-store';

interface Props {
  mode: 'login' | 'register';
}

export const AuthForm = ({ mode }: Props) => {
  const router = useRouter();
  const login = useUserStore((state) => state.login);
  const [values, setValues] = useState({ email: '', password: '', confirm: false });
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!values.email || !values.password) {
      setError('Wypełnij wszystkie pola');
      return;
    }
    if (mode === 'register' && !values.confirm) {
      setError('Zaakceptuj regulamin');
      return;
    }
    login({ firstName: 'Alex', lastName: 'Nowak', email: values.email });
    router.push('/account');
  };

  return (
    <form onSubmit={handleSubmit} className="card mx-auto flex w-full max-w-md flex-col gap-4">
      <h1 className="text-2xl font-bold text-helsi-black">
        {mode === 'login' ? 'Zaloguj się' : 'Utwórz konto HelsiHub'}
      </h1>
      <input
        type="email"
        placeholder="Email"
        className="rounded-2xl border border-gray-200 px-4 py-3 text-sm"
        value={values.email}
        onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
      />
      <input
        type="password"
        placeholder="Hasło"
        className="rounded-2xl border border-gray-200 px-4 py-3 text-sm"
        value={values.password}
        onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))}
      />
      {mode === 'register' && (
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={values.confirm}
            onChange={(event) => setValues((prev) => ({ ...prev, confirm: event.target.checked }))}
          />
          Akceptuję regulamin i politykę prywatności
        </label>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button type="submit" className="btn-primary w-full">
        {mode === 'login' ? 'Wejdź do konta' : 'Zarejestruj się'}
      </button>
      <p className="text-sm text-gray-500">
        {mode === 'login' ? 'Nie masz konta?' : 'Masz już konto?'}{' '}
        <Link href={mode === 'login' ? '/register' : '/login'} className="text-helsi-green">
          {mode === 'login' ? 'Zarejestruj się' : 'Zaloguj'}
        </Link>
      </p>
    </form>
  );
};
