import { OperationType } from './constants';
import BigNumber from 'bignumber.js';

// We extracted a few fields of the UserProtocolPositionSnapshot, which should
// be implemented by UserProtocolPositionSnapshot.
export interface UserProtocolPositionSnapshotInterface {
  blockNumber: number;
  timestamp: number;
  txHash: string;
  txFeeUsd: BigNumber;
  operationType: OperationType;
  transactionValueUsd: BigNumber;
  gasTokenAmount: BigNumber;
}
