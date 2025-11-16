'use client';

const languages = ['PL', 'EN', 'UA', 'RU'];

export const LanguageSwitcher = () => {
  return (
    <div className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow-soft">
      {languages.map((lang) => (
        <button
          key={lang}
          type="button"
          className="rounded-full px-2 py-1 text-helsi-black transition hover:text-helsi-green"
          aria-label={`Switch language to ${lang}`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};
