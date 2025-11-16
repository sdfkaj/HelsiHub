import { CheckoutForm } from '@/components/forms/checkout-form';

export default function CheckoutPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold">Zamówienie</h1>
        <p className="text-sm text-gray-500">Wprowadź dane dostawy i płatności</p>
      </div>
      <CheckoutForm />
    </div>
  );
}
