const correspondingHash: Record<string, string> = {
  "(": ")",
  "{": "}",
  "[": "]",
};

export function isValid(input: string): boolean {
  const stack = [];

  for (let char of input.split("")) {
    if (correspondingHash[char]) {
      stack.push(char);
      continue;
    } else if (stack.length === 0) {
      return false;
    }

    const previousChar = stack.pop() as string;

    if (
      correspondingHash[previousChar] &&
      char !== correspondingHash[previousChar]
    ) {
      return false;
    }
  }

  return stack.length === 0;
}
