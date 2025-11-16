'use client';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const options = [
  { value: 'popular', label: 'Popularność' },
  { value: 'price-asc', label: 'Cena rosnąco' },
  { value: 'price-desc', label: 'Cena malejąco' },
  { value: 'newest', label: 'Nowości' }
];

export const SortSelect = ({ value, onChange }: Props) => (
  <select
    value={value}
    onChange={(event) => onChange(event.target.value)}
    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600"
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);
