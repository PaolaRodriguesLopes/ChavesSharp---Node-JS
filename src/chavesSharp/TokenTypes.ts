// Create all tokens to our chaves sharp
export type IdentifierToken = { type: "Identifier"; value: string };
export type OpenToken = { type: "OpenToken" };
export type CloseToken = { type: "CloseToken" };
export type NumericToken = { type: "NumericToken"; value: string };
export type StringToken = { type: "StringToken"; value: string };
export type PlusToken = { type: "PlusToken" };
export type MinusToken = { type: "MinusToken" };
export type MultiplyToken = { type: "MultiplyToken" };
export type DivideToken = { type: "DivideToken" };

// Create a general type for any given token
export type Token =
  | IdentifierToken
  | OpenToken
  | CloseToken
  | NumericToken
  | StringToken
  | PlusToken
  | MinusToken
  | MultiplyToken
  | DivideToken;

// Create a types for a parser
export type CalculationOperator =
  | PlusToken
  | MinusToken
  | MultiplyToken
  | DivideToken;

export type NumericNode = { type: "NumericToken"; value: string };

// This types below , have de node argument that might have the abstract syntax tree
export type CallExpressionNode = {
  type: "CallExpression";
  identifier: IdentifierToken;
  argument: Node;
};

// Is all the calculation operators that we have
export type BinaryExpressionNode = {
  type: "BinaryExpression";
  left: Node;
  right: Node;
  operator: CalculationOperator;
};

export type Node = NumericNode | CallExpressionNode | BinaryExpressionNode;

export type Program = {
  body: Node[];
};
