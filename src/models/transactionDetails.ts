/**
 * Represents a TransactionDetails from the blueprint
 */
export class TransactionDetails {
  constructor(public txHash: string, public blockNumber: number = 0, public timestamp: number = 0) {}

  static asUniqueList(a: TransactionDetails[]): TransactionDetails[] {
    const seen: string[] = [];
    return a.filter((item) => {
      const txHash = item.txHash;
      if (seen.includes(txHash)) {
        return false;
      }
      seen.push(txHash);
      return true;
    });
  }
}
