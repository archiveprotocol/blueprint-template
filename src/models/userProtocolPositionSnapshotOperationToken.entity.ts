import BigNumber from "bignumber.js";
import { TokenDirection } from "./tokenDirection";
import { TokenType } from "./tokenType";
import { TokenTag } from "./constants";
import { UserProtocolPositionSnapshotOperation } from "./userProtocolPositionSnapshotOperation.entity";

export class UserProtocolPositionSnapshotOperationToken {
  id: number;
  tokenName: string;
  tokenAddress: string;
  tokenDirection: TokenDirection;
  tokenType: TokenType;
  tag: TokenTag;
  tokenRawAmount: string;
  decimals: number;
  totalAmountDeposited: BigNumber;
  totalAmountWithdrawn: BigNumber;
  tokenIncomeUsd: BigNumber;
  amountDepositedChange: BigNumber;
  amountWithdrawnChange: BigNumber;
  amountIncomeChange: BigNumber;
  tokenPriceUsd: BigNumber;
  tokenPriceSource: string;
  tokenAmountAtBlock: BigNumber;
  netTokenAmount: BigNumber;
  ifHeldAllAmountToken: BigNumber;
  ifHeldAmountToken: BigNumber;
  exitedIfHeldAmountToken: BigNumber;
  tokenValueUsd: BigNumber;
  isVirtualToken: boolean;
  public userProtocolPositionSnapshotOperation: UserProtocolPositionSnapshotOperation;
  public userProtocolPositionSnapshotOperationId: number;
  createdAt: Date;
  updatedAt: Date;
}