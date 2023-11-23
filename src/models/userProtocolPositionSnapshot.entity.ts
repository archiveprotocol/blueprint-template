import BigNumber from 'bignumber.js';
import { UserProtocolPosition } from './userProtocolPosition.entity';
import { UserProtocolPositionSnapshotOperation } from './userProtocolPositionSnapshotOperation.entity';

export class UserProtocolPositionSnapshot {
  id: number;
  basePositionCostUsd: BigNumber;
  basePositionUnitCostUsd: BigNumber;
  positionUsdValueAtBlock: BigNumber;
  blockNumber: number;
  timestamp: number;
  txHash: string;
  txFeeUsd: BigNumber;
  gasTokenAmount: BigNumber;
  positionSharesAtBlock: BigNumber;
  basePositionShares: BigNumber;
  exitRatio: BigNumber;
  exitedCostUsd: BigNumber;
  exitedValueUsd: BigNumber;
  exitedHodlValueUsd: BigNumber;
  ifHeldAllAmountEth: BigNumber;
  ifHeldAllAmountBtc: BigNumber;
  isNewSession: boolean;
  isFullyExitedSession: boolean;
  isLiabilityPosition: boolean;
  userProtocolPosition: UserProtocolPosition;
  userProtocolPositionId: number;
  userProtocolPositionSnapshotOperations: UserProtocolPositionSnapshotOperation[];
  createdAt: Date;
  updatedAt: Date;
}
