import { UserProtocolPositionIntervalDataToken } from './userProtocolPositionIntervalDataToken.entity';
import BigNumber from 'bignumber.js';

export class UserProtocolPositionDayTokensDto {
  public tokenName: string;
  public tokenAddress: string;
  public netTokenAmount: BigNumber;
  public priceUsd: BigNumber;
  public priceSource: string;
  public pendingIncomeAmount: BigNumber;
  public collectedIncomeAmount: BigNumber;
  public totalIncomeAmount: BigNumber;
  public dailyIncomeAmount: BigNumber;
  public tokenAmountIfExit: BigNumber;
  public ifHeldAmountToken: BigNumber;
  public exitedIfHeldAmountToken: BigNumber;
  public ifHeldAllAmountToken: BigNumber;
  public ifHeldAllAmountTokenValueUsd: BigNumber;
  public exitedTokenAmount: BigNumber;
  constructor(dayDataToken: UserProtocolPositionIntervalDataToken) {
    this.tokenName = dayDataToken.tokenName;
    this.tokenAddress = dayDataToken.tokenAddress;
    this.netTokenAmount = dayDataToken.netTokenAmount;
    this.priceUsd = dayDataToken.priceUsd;
    this.priceSource = dayDataToken.priceSource;
    this.pendingIncomeAmount = dayDataToken.pendingIncomeAmount;
  }
}
