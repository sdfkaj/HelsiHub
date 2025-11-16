'use client';

import { useState } from 'react';

interface Props {
  description: string;
  ingredients: string[];
  nutritionFacts: string[];
  howToUse: string;
}

const tabs = [
  { value: 'description', label: 'Opis' },
  { value: 'ingredients', label: 'Skład' },
  { value: 'nutrition', label: 'Wartości odżywcze' },
  { value: 'usage', label: 'Jak stosować' }
] as const;

export const ProductTabs = ({ description, ingredients, nutritionFacts, howToUse }: Props) => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['value']>('description');

  return (
    <div className="card flex flex-col gap-4 bg-white">
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab.value
                ? 'border-helsi-green bg-helsi-green text-white'
                : 'border-gray-200 text-helsi-black'
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="text-sm text-gray-600">
        {activeTab === 'description' && <p>{description}</p>}
        {activeTab === 'ingredients' && (
          <ul className="list-disc space-y-1 pl-4">
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        )}
        {activeTab === 'nutrition' && (
          <ul className="list-disc space-y-1 pl-4">
            {nutritionFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        )}
        {activeTab === 'usage' && <p>{howToUse}</p>}
      </div>
    </div>
  );
};
