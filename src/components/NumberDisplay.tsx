import React from 'react';

interface NumberDisplayProps {
  numbers: number[];
}

export function NumberDisplay({ numbers }: NumberDisplayProps) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
      {numbers.map((number, index) => (
        <div
          key={index}
          className="aspect-square bg-green-100 rounded-full flex items-center justify-center"
        >
          <span className="text-xl sm:text-2xl font-bold text-green-700">
            {number}
          </span>
        </div>
      ))}
      {numbers.length === 0 &&
        Array(6)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-100 rounded-full flex items-center justify-center"
            >
              <span className="text-xl sm:text-2xl font-bold text-gray-300">
                ?
              </span>
            </div>
          ))}
    </div>
  );
}