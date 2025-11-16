'use client';

import { categories, goals } from '@/data/products';

interface FilterState {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  goals: string[];
}

interface Props {
  value: FilterState;
  onChange: (value: FilterState) => void;
}

export const FilterSidebar = ({ value, onChange }: Props) => {
  const toggleGoal = (goal: string) => {
    const exists = value.goals.includes(goal);
    const goalsArray = exists ? value.goals.filter((g) => g !== goal) : [...value.goals, goal];
    onChange({ ...value, goals: goalsArray });
  };

  return (
    <aside className="card hidden w-64 flex-shrink-0 flex-col gap-6 lg:flex">
      <div>
        <p className="text-xs font-semibold uppercase text-gray-400">Kategorie</p>
        <div className="mt-3 flex flex-col gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-4 py-2 text-left text-sm font-semibold transition ${
                value.category === category ? 'bg-helsi-green text-white' : 'bg-helsi-beige text-helsi-black'
              }`}
              type="button"
              onClick={() => onChange({ ...value, category: category === value.category ? undefined : category })}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase text-gray-400">Cena</p>
        <div className="mt-3 flex items-center gap-2">
          <input
            type="number"
            placeholder="Od"
            className="w-full rounded-2xl border border-gray-200 px-3 py-2 text-sm"
            value={value.minPrice ?? ''}
            onChange={(event) => onChange({ ...value, minPrice: Number(event.target.value) || undefined })}
          />
          <input
            type="number"
            placeholder="Do"
            className="w-full rounded-2xl border border-gray-200 px-3 py-2 text-sm"
            value={value.maxPrice ?? ''}
            onChange={(event) => onChange({ ...value, maxPrice: Number(event.target.value) || undefined })}
          />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase text-gray-400">Cel</p>
        <div className="mt-3 flex flex-col gap-2">
          {goals.map((goal) => (
            <label key={goal} className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
                checked={value.goals.includes(goal)}
                onChange={() => toggleGoal(goal)}
              />
              {goal}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};
