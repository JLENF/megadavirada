import React, { useState } from 'react';
import { Clover, RefreshCw } from 'lucide-react';
import { NumberDisplay } from './components/NumberDisplay';
import { NumerologyForm } from './components/NumerologyForm';
import { generateRandomNumbers } from './utils/numberGenerator';

function App() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [mode, setMode] = useState<'random' | 'numerology'>('random');

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-600 to-green-800 flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Clover className="w-8 h-8 text-green-600" />
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Mega Sena da Virada
          </h1>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setMode('random')}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              mode === 'random'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Aleatório
          </button>
          <button
            onClick={() => setMode('numerology')}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              mode === 'numerology'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Numerologia
          </button>
        </div>

        <NumberDisplay numbers={numbers} />

        {mode === 'random' ? (
          <button
            onClick={() => setNumbers(generateRandomNumbers())}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Gerar Números Aleatórios
          </button>
        ) : (
          <NumerologyForm onGenerate={setNumbers} />
        )}
      </div>
    </div>
  );
}

export default App;