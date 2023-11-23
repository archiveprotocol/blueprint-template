import { TokenInfo } from './tokenInfo';

export enum OperationType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
  INCOME = 'INCOME',
  TRANSFER_IN = 'TRANSFER_IN', //covers ONLY LP tokens and/or NFTs that are sent from protocol to user
  TRANSFER_OUT = 'TRANSFER_OUT', //covers ONLY LP tokens and/or NFTs that are sent from user to protocol
  NULL_OP = 'NULL_OP',
}

export class Operation {
  constructor(
    // deposit | withdrawal | income | transfer_in | transfer_out | null_op
    public operation: OperationType,
    // tokens sent from user to protocol
    public inputTokens: TokenInfo[],
    // tokens sent from protocol to user
    public outputTokens: TokenInfo[],
  ) {}
}
