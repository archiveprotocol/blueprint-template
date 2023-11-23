import { TokenTag } from './constants';
import BigNumber from 'bignumber.js';

export class TokenInfo {
  constructor(
    public identifier: string, // token address | pool id (masterchef type)
    public priceUsd: number,
    public amount: BigNumber, // amount divided by token decimals
    public source: string, // price source
    public tag: TokenTag = TokenTag.EMPTY, // tag for special tokens
    public isVirtualToken: boolean = false, // flag for virtual tokens
  ) {}
}
