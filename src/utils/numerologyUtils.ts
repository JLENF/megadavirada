// Numerology value mappings
const PYTHAGOREAN_VALUES: { [key: string]: number } = {
  'a': 1, 'j': 1, 's': 1,
  'b': 2, 'k': 2, 't': 2,
  'c': 3, 'l': 3, 'u': 3,
  'd': 4, 'm': 4, 'v': 4,
  'e': 5, 'n': 5, 'w': 5,
  'f': 6, 'o': 6, 'x': 6,
  'g': 7, 'p': 7, 'y': 7,
  'h': 8, 'q': 8, 'z': 8,
  'i': 9, 'r': 9
};

const KARMIC_NUMBERS = [13, 14, 16, 19];
const MASTER_NUMBERS = [11, 22, 33];

// Calculate destiny number from birth date
export function calculateDestinyNumber(date: string): number {
  const sum = date
    .split('-')
    .join('')
    .split('')
    .reduce((sum, digit) => sum + (parseInt(digit) || 0), 0);
  
  return reduceToSingleDigit(sum);
}

// Calculate expression number from full name
export function calculateExpressionNumber(name: string): number {
  const value = name
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .reduce((sum, char) => sum + (PYTHAGOREAN_VALUES[char] || 0), 0);
  
  return reduceToSingleDigit(value);
}

// Calculate personal year number
export function calculatePersonalYear(birthDate: string): number {
  const currentYear = new Date().getFullYear();
  const birthDay = parseInt(birthDate.split('-')[2]);
  const birthMonth = parseInt(birthDate.split('-')[1]);
  
  return reduceToSingleDigit(birthDay + birthMonth + currentYear);
}

// Calculate life path number
export function calculateLifePath(birthDate: string): number {
  const [year, month, day] = birthDate.split('-').map(Number);
  const sum = reduceToSingleDigit(year) + reduceToSingleDigit(month) + reduceToSingleDigit(day);
  return reduceToSingleDigit(sum);
}

// Reduce number to single digit unless it's a master number
function reduceToSingleDigit(num: number): number {
  if (MASTER_NUMBERS.includes(num)) return num;
  
  while (num > 9) {
    num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
}

// Generate lottery numbers based on numerological calculations
export function generateNumerologyNumbers(name: string, birthDate: string, quantity: number = 6): number[] {
  if (quantity < 6 || quantity > 20) {
    throw new Error('Quantidade de números deve ser entre 6 e 20');
  }

  const destinyNumber = calculateDestinyNumber(birthDate);
  const expressionNumber = calculateExpressionNumber(name);
  const personalYear = calculatePersonalYear(birthDate);
  const lifePath = calculateLifePath(birthDate);
  
  const numbers = new Set<number>();
  const baseNumbers = [destinyNumber, expressionNumber, personalYear, lifePath];
  
  // Use current date energy
  const today = new Date();
  const dayEnergy = reduceToSingleDigit(today.getDate());
  const monthEnergy = reduceToSingleDigit(today.getMonth() + 1);
  
  while (numbers.size < quantity) {
    // Generate numbers based on numerological calculations
    baseNumbers.forEach(base => {
      const num1 = ((base * dayEnergy * monthEnergy) % 60) + 1;
      const num2 = ((base * personalYear * destinyNumber) % 60) + 1;
      
      if (num1 >= 1 && num1 <= 60) numbers.add(num1);
      if (num2 >= 1 && num2 <= 60) numbers.add(num2);
    });
    
    // If we still need more numbers, use karmic numbers as seeds
    if (numbers.size < quantity) {
      KARMIC_NUMBERS.forEach(karmic => {
        const num = ((karmic * dayEnergy) % 60) + 1;
        if (num >= 1 && num <= 60) numbers.add(num);
      });
    }
    
    // Fill remaining with life path number derivatives
    if (numbers.size < quantity) {
      const num = ((lifePath * dayEnergy * monthEnergy) % 60) + 1;
      if (num >= 1 && num <= 60) numbers.add(num);
    }
  }
  
  // Convert to array and ensure we have exactly the desired quantity of numbers
  let result = Array.from(numbers).slice(0, quantity);
  
  // Sort numbers
  return result.sort((a, b) => a - b);
}