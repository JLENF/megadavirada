export function generateRandomNumbers(quantity: number = 6): number[] {
  if (quantity < 6 || quantity > 20) {
    throw new Error('Quantidade de números deve ser entre 6 e 20');
  }
  
  const numbers: number[] = [];
  while (numbers.length < quantity) {
    const num = Math.floor(Math.random() * 60) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers.sort((a, b) => a - b);
}