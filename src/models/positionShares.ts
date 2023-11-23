import BigNumber from 'bignumber.js';

/** Represents the number of shares the user has at a specific block.
 *
 *  positionBalance is optional for non-rebasing LP tokens, mandatory for rebasing LP tokens.
 */
export class PositionShares {
  constructor(
    /** Address of the receipt token, or if not receipt token, the address of the input token which will form the shares of the position */
    public sharesIdentifier = '',
    /** Amount of 'shares' added/removed in this transaction, it's positive if shares were added, negative if shares were removed */
    public amountAdded = BigNumber(0),
    /** Price of one share in USD */
    public sharePriceUsd = 0,
    /** Use this value for the position balance field if populated in positionValue */
    public positionBalance: BigNumber | null = null,
    /** It will be true in some cases where the position represents a liability instead of an asset (i.e. aave debt token) */
    public isLiabilityPosition: boolean = false,
  ) {}
}
