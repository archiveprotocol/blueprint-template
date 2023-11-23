import { TransactionDetails } from './transactionDetails';

export class UserTransactionResults {
  constructor(
    public userTransactions: TransactionDetails[],
    public lastSyncedBlock: number,
  ) {}
}
