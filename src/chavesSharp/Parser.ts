import {
  CalculationOperator,
  BinaryExpressionNode,
  CallExpressionNode,
  IdentifierToken,
  Node,
  NumericNode,
  NumericToken,
  Program,
  Token,
} from "./TokenTypes";

// Convert token to abstract syntax
// Take array of tokens and return a program
export function parser(tokens: Token[]): Program {
  const program: Program = { body: [] };

  let current = 0;

  // The parse function look at a particular token and determine the kink of
  // token that it is and make a decision on what kind of parsing it needs
  function parse(): Node {
    const token = tokens[current]!;
    if (token.type === "Identifier") {
      return parseCallExpression(token);
    }

    if (token.type === "NumericToken") {
      // When looking to a numeric node, need to look to next node in order to dermine
      // whitch kind of passing need to do
      const next = tokens[current + 1];
      if (
        next?.type === "PlusToken" ||
        next?.type === "MinusToken" ||
        next?.type === "MultiplyToken" ||
        next?.type === "DivideToken"
      ) {
        return parseBinaryExpression(token, next);
      } else {
        return parseNumeric(token);
      }
    }
    // if something goes wrong
    throw new SyntaxError(`Token inválido: ${token.type}`);
  }

  function parseNumeric(token: NumericToken): NumericNode {
    current++;
    return { type: "NumericToken", value: token.value };
  }

  function parseCallExpression(token: IdentifierToken): CallExpressionNode {
    // the first token must be a identifier
    const identifier = token;
    current++;

    // The expression must iniciate with a open parentheses
    if (tokens[current]?.type !== "OpenToken") {
      throw new SyntaxError("Indentifier must be followed by (");
    }
    current++;

    // The expression must have an argument
    const argument: Node = parse();

    // The expression must finish with a close parentheses
    if (tokens[current]?.type !== "CloseToken") {
      throw new SyntaxError("Call expressions terminate with )");
    }
    current++;

    return { type: "CallExpression", identifier, argument };
  }

  function parseBinaryExpression(
    token: NumericToken,
    next: CalculationOperator
  ): BinaryExpressionNode {
    // Get the current token
    const left = parseNumeric(token);

    // Store the next token that alredy verified
    const operator = next;
    current++;

    // Invokink the parse recursively and finaly have a binary expression
    const right = parse();
    return { type: "BinaryExpression", left, operator, right };
  }

  while (current < tokens.length) {
    program.body.push(parse());
  }
  return program;
}
