export interface BlockTimeOracle {
  getBlockNumber(txHash: string): Promise<number>;

  getTimestamp(txHash: string): Promise<number>;
}
