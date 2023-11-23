import { TransactionDetails } from './transactionDetails';
import BigNumber from 'bignumber.js';

export interface GasOracle {
  getTxnFeeUsd(txn: TransactionDetails): Promise<BigNumber>;
}
