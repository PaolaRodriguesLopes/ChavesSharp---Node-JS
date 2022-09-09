import { emitter } from "./Emitter";
import { parser } from "./Parser";
import { lexicalAnalysis } from "./LexicalAnalysis";

export function compiler(input: string): string {
  const tokens = lexicalAnalysis(input);
  const ast = parser(tokens);
  const output = emitter(ast);

  return output;
}

export function interpreter(code: string) {
  return eval(code);
}
