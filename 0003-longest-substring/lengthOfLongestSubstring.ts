export function lenghtOfLongestSubstring(input: string): number {
  let foundCharacters = new Map<string, number>();
  let currentSubstringStart = 0;
  let maxLengthFound = 0;

  for (let index = 0; index < input.length; index++) {
    const currentCharacter = input[index];
    const currentCharacterLastIndex = foundCharacters.get(currentCharacter);

    if (
      currentCharacterLastIndex !== undefined &&
      currentCharacterLastIndex >= currentSubstringStart
    ) {
      const currentSubstringLength = index - currentSubstringStart;
      maxLengthFound = Math.max(currentSubstringLength, maxLengthFound);

      currentSubstringStart = currentCharacterLastIndex + 1;
    }

    foundCharacters.set(currentCharacter, index);
  }

  const currentSubstringLength = input.length - currentSubstringStart;
  maxLengthFound = Math.max(currentSubstringLength, maxLengthFound);
  return maxLengthFound;
}
