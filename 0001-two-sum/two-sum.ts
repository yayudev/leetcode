export function twoSum(numbers: number[], target: number): number[] {
  const checkedNumbers = new Map<number, number>();

  for (const [index, currentNumber] of numbers.entries()) {
    const complementaryNumber = target - currentNumber;
    const complementaryindex = checkedNumbers.get(complementaryNumber);

    if (complementaryindex !== undefined) {
      return [complementaryindex, index];
    }

    checkedNumbers.set(currentNumber, index);
  }

  return [];
}
