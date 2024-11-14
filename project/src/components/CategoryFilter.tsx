import React from 'react';

const categories = [
  'All',
  'Fruits',
  'Vegetables',
  'Dairy',
  'Bakery',
  'Meat',
  'Beverages',
];

export default function CategoryFilter({ selected, onSelect }: { 
  selected: string;
  onSelect: (category: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selected === category
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}