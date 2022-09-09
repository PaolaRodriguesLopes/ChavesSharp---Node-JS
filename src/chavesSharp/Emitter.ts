import {
  BinaryExpressionNode,
  CallExpressionNode,
  NumericNode,
  Program,
  Node,
} from "./TokenTypes";
// Return the generated javascript output
export function emitter(program: Program): string {
  function emit(node: Node): string {
    switch (node.type) {
      case "NumericToken":
        return emitNumericLiteral(node);
      case "BinaryExpression":
        return emitBinaryExpression(node);
      case "CallExpression":
        return emitCallExpression(node);
      default:
        throw new SyntaxError("Unknown Node");
    }
  }

  function emitNumericLiteral(node: NumericNode) {
    return node.value;
  }

  function emitBinaryExpression(node: BinaryExpressionNode) {
    return `${emit(node.left)} ${
      node.operator.type === "PlusToken"
        ? "+"
        : node.operator.type === "MinusToken"
        ? "-"
        : node.operator.type === "MultiplyToken"
        ? "*"
        : "/"
    } ${emit(node.right)}`;
  }

  function emitCallExpression(node: CallExpressionNode) {
    if (node.identifier.value === "e_que_me_escapuliu") {
      return `console.log(${emit(node.argument)})`;
    } else {
      throw new SyntaxError(
        `Unknown Identifier in call expression: ${node.identifier}`
      );
    }
  }

  const output: string[] = [];
  for (const node of program.body) {
    output.push(emit(node));
  }
  return output.join("\n");
}
