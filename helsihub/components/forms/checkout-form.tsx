'use client';

import { useState } from 'react';

interface CheckoutFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  street: string;
  zip: string;
  delivery: string;
  payment: string;
}

const initialValues: CheckoutFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  street: '',
  zip: '',
  delivery: 'express',
  payment: 'card'
};

export const CheckoutForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState('');

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    Object.entries(values).forEach(([key, value]) => {
      if (!value) {
        nextErrors[key] = 'Pole wymagane';
      }
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setMessage('Zamówienie przyjęte! Oczekuj maila z potwierdzeniem.');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2">
        {['firstName', 'lastName', 'email', 'phone', 'country', 'city', 'street', 'zip'].map((field) => (
          <div key={field} className="flex flex-col gap-2">
            <label className="text-sm font-semibold capitalize text-gray-600" htmlFor={field}>
              {field}
            </label>
            <input
              id={field}
              name={field}
              value={(values as any)[field]}
              onChange={handleChange}
              className="rounded-2xl border border-gray-200 px-4 py-3 text-sm"
            />
            {errors[field] && <span className="text-xs text-red-500">{errors[field]}</span>}
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-gray-600">Dostawa</p>
          {[
            { value: 'express', label: 'Express (1-2 dni)' },
            { value: 'pickup', label: 'Odbiór w punkcie' }
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="radio"
                name="delivery"
                value={option.value}
                checked={values.delivery === option.value}
                onChange={handleChange}
              />
              {option.label}
            </label>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-gray-600">Płatność</p>
          {[
            { value: 'card', label: 'Karta / Apple Pay' },
            { value: 'paypal', label: 'PayPal' },
            { value: 'blik', label: 'BLIK / Przelewy24' }
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="radio"
                name="payment"
                value={option.value}
                checked={values.payment === option.value}
                onChange={handleChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
      <button type="submit" className="btn-primary w-full">
        Złóż zamówienie
      </button>
      {message && <p className="text-center text-sm font-semibold text-helsi-green">{message}</p>}
    </form>
  );
};
