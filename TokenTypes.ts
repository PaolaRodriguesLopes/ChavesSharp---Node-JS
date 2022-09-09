export type IdentifierToken = { type: 'Identifier', value: string }
export type OpenToken = { type: 'OpenToken' }
export type CloseToken = { type: 'CloseToken' }
export type NumericLiteralToken = { type: 'NumericLiteral', value: string }
export type StringLiteralToken = { type: 'StringLiteral', value: string }
export type PlusToken = { type: 'PlusToken' }
export type MinusToken = { type: 'MinusToken' }
export type MultiplyToken = { type: 'MultiplyToken' }
export type DivideToken = { type: 'DivideToken' }


export type Token =
  | IdentifierToken
  | OpenToken
  | CloseToken
  | NumericLiteralToken
  | StringLiteralToken
  | PlusToken
  | MinusToken
  | MultiplyToken
  | DivideToken