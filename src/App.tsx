import React, { useState } from 'react';
import { Clover, Github } from 'lucide-react';
import { NumberDisplay } from './components/NumberDisplay';
import { NumerologyForm } from './components/NumerologyForm';
import { NumberSelector } from './components/NumberSelector';
import { generateRandomNumbers } from './utils/numberGenerator';

function App() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [mode, setMode] = useState<'random' | 'numerology'>('random');
  const [quantity, setQuantity] = useState<number>(6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-600 to-green-800 flex flex-col items-center px-2 py-4 sm:p-8">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-4 sm:p-6 mb-16">
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
          <Clover className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Mega Sena da Virada
          </h1>
        </div>

        <div className="flex gap-1 sm:gap-2 mb-4 sm:mb-6">
          <button
            onClick={() => setMode('random')}
            className={`flex-1 py-2 px-2 sm:px-4 rounded-lg text-sm sm:text-base font-medium transition-colors ${
              mode === 'random'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Aleatório
          </button>
          <button
            onClick={() => setMode('numerology')}
            className={`flex-1 py-2 px-2 sm:px-4 rounded-lg text-sm sm:text-base font-medium transition-colors ${
              mode === 'numerology'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Numerologia
          </button>
        </div>

        <NumberSelector quantity={quantity} onChange={setQuantity} />
        <NumberDisplay numbers={numbers} quantity={quantity} />

        {mode === 'random' ? (
          <button
            onClick={() => setNumbers(generateRandomNumbers(quantity))}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Clover className="w-4 h-4 sm:w-5 sm:h-5" />
            Gerar Números Aleatórios
          </button>
        ) : (
          <NumerologyForm onGenerate={setNumbers} quantity={quantity} />
        )}
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm py-2 sm:py-3 shadow-lg">
        <div className="container mx-auto flex justify-center items-center">
          <a
            href="https://github.com/JLENF/megadavirada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-green-600 transition-colors text-xs sm:text-sm font-medium"
          >
            <Github className="w-3 h-3 sm:w-4 sm:h-4" />
            Ver código no GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;