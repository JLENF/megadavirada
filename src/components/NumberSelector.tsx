import React from 'react';

interface NumberSelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

export function NumberSelector({ quantity, onChange }: NumberSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Quantidade de Números
      </label>
      <select
        value={quantity}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full px-3 py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
      >
        {Array.from({ length: 15 }, (_, i) => i + 6).map((num) => (
          <option key={num} value={num} className="py-1">
            {num} números
          </option>
        ))}
      </select>
      <p className="mt-2 text-xs sm:text-sm text-gray-500">
        Selecione entre 6 e 20 números para seu jogo
      </p>
    </div>
  );
}
