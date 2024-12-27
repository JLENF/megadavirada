import React from 'react';

interface NumberDisplayProps {
  numbers: number[];
  quantity: number;
}

export function NumberDisplay({ numbers, quantity }: NumberDisplayProps) {
  // Adjust columns based on quantity and screen size
  const getGridClass = () => {
    if (quantity <= 6) return 'grid-cols-3';
    if (quantity <= 10) return 'grid-cols-3 sm:grid-cols-4';
    if (quantity <= 15) return 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5';
    return 'grid-cols-4 sm:grid-cols-5';
  };
  
  return (
    <div className={`grid ${getGridClass()} gap-3 sm:gap-4`}>
      {numbers.map((number, index) => (
        <div
          key={index}
          className="aspect-square bg-green-100 rounded-full flex items-center justify-center p-2 sm:p-3"
        >
          <span className="text-base sm:text-xl md:text-2xl font-bold text-green-700">
            {number}
          </span>
        </div>
      ))}
      {numbers.length === 0 &&
        Array(quantity)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-100 rounded-full flex items-center justify-center p-2 sm:p-3"
            >
              <span className="text-base sm:text-xl md:text-2xl font-bold text-gray-300">
                ?
              </span>
            </div>
          ))}
    </div>
  );
}