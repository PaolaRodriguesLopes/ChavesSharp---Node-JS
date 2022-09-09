// Create all tokens to our chaves sharp
export type IdentifierToken = { type: "Identifier"; value: string };
export type OpenToken = { type: "OpenToken" };
export type CloseToken = { type: "CloseToken" };
export type NumericToken = { type: "NumericToken"; numberValue: string };
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
