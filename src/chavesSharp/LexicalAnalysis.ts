import { Token } from "./TokenTypes";

// Function that will do the lexical analysis
// Is going to take input code and return a set of tokens
export function lexicalAnalysis(input: string): Token[] {
  const tokens: Token[] = [];

  // Create cursor to be a index into the input string
  let cursorPos = 0;

  // The interation of the loop is colecting the current character
  // and using to determinate what kind of token it should be
  while (cursorPos < input.length) {
    let char = input[cursorPos]!;
    // If it's white space we're ignore
    if (/\s/.test(char)) {
      cursorPos++;
      continue;
    }

    // Validate open and close tokens
    if (char === "(") {
      tokens.push({ type: "OpenToken" });
      cursorPos++;
      continue;
    }

    if (char === ")") {
      tokens.push({ type: "CloseToken" });
      cursorPos++;
      continue;
    }

    // Validate numbers
    const numbers = /[0-9]/;
    if (numbers.test(char)) {
      let numberValue = "";
      while (numbers.test(char)) {
        numberValue += char;
        char = input[++cursorPos]!;
      }
      tokens.push({ type: "NumericToken", numberValue });
      continue;
    }

    // validate indentifier
    const LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = "";
      while (LETTERS.test(char)) {
        value += char;
        char = input[++cursorPos]!;
      }

      if (value === "mais") {
        tokens.push({ type: "PlusToken" });
      } else if (value === "menos") {
        tokens.push({ type: "MinusToken" });
      } else if (value === "vezes") {
        tokens.push({ type: "MultiplyToken" });
      } else if (value === "dividir") {
        tokens.push({ type: "DivideToken" });
      } else {
        tokens.push({ type: "Identifier", value });
      }
      continue;
    }
    throw new SyntaxError(`Token incorreto, digite um válido: "${char}"`);
  }
  return tokens;
}
