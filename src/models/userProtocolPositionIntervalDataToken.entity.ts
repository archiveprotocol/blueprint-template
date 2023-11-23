import { UserProtocolPositionIntervalData } from './userProtocolPositionIntervalData.entity';
import BigNumber from 'bignumber.js';

export class UserProtocolPositionIntervalDataToken {
  id: number;
  tokenName: string;
  tokenAddress: string;
  netTokenAmount: BigNumber;
  priceUsd: BigNumber;
  priceSource: string;
  pendingIncomeAmount: BigNumber;
  public userProtocolPositionIntervalData: UserProtocolPositionIntervalData;
  createdAt: Date;
  updatedAt: Date;
}
