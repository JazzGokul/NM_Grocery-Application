import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  onAddToCart: (id: string) => void;
}

export default function ProductCard({ name, price, image, category, onAddToCart, id }: ProductProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <button 
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          onClick={() => {}}
        >
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>
      <div className="p-4">
        <span className="text-sm text-emerald-600 font-medium">{category}</span>
        <h3 className="font-semibold text-gray-800 mt-1">{name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(id)}
            className="flex items-center gap-1 bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}