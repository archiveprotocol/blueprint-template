export enum OperationType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
  INCOME = 'INCOME',
  TRANSFER_IN = 'TRANSFER_IN', //covers ONLY LP tokens and/or NFTs that are sent from protocol to user
  TRANSFER_OUT = 'TRANSFER_OUT', //covers ONLY LP tokens and/or NFTs that are sent from user to protocol
  NULL_OP = 'NULL_OP',
}

export enum TokenTag {
  EMPTY = '',
  TRADE_FEES = 'tradeFees',
  REWARDS = 'rewards',
}