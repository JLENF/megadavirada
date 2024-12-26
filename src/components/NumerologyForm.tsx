import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { generateNumerologyNumbers } from '../utils/numerologyUtils';

interface NumerologyFormProps {
  onGenerate: (numbers: number[]) => void;
}

export function NumerologyForm({ onGenerate }: NumerologyFormProps) {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateNumerologyNumbers = () => {
    try {
      setIsCalculating(true);
      const numbers = generateNumerologyNumbers(name, birthDate);
      onGenerate(numbers);
    } catch (error) {
      console.error('Error calculating numbers:', error);
      // Fallback to basic numbers if calculation fails
      const fallbackNumbers = Array.from({ length: 6 }, (_, i) => i + 1);
      onGenerate(fallbackNumbers);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Seu Nome Completo
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome completo"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          required
          maxLength={100}
          disabled={isCalculating}
        />
        <p className="mt-1 text-sm text-gray-500">
          Use seu nome completo para maior precisão
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Data de Nascimento
        </label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          required
          disabled={isCalculating}
        />
        <p className="mt-1 text-sm text-gray-500">
          A data de nascimento influencia seus números de sorte
        </p>
      </div>

      <button
        onClick={calculateNumerologyNumbers}
        disabled={!name || !birthDate || isCalculating}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <Calculator className={`w-5 h-5 ${isCalculating ? 'animate-spin' : ''}`} />
        {isCalculating ? 'Calculando...' : 'Gerar Números Personalizados'}
      </button>
    </div>
  );
}