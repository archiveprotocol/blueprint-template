import { Operation } from './operation';
import { PositionShares } from './positionShares';
import BigNumber from 'bignumber.js';

export class Classification {
  constructor(
    public operations: Operation[],
    // unique identifier
    public positionIdentifier: string,
    // gas token amount spent for transaction
    public gasTokenAmount = BigNumber(0),
    public positionShareDetails: PositionShares[],
  ) {}
}
