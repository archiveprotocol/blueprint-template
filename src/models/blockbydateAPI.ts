
export abstract class BlockbydateAPI {
  private client: any; // auto-generated
  abstract getMostRecentTimestamp(): Promise<number>;
  abstract getTimestampFromBlock(block: number): Promise<any>;
  abstract getMostRecentBlock(): Promise<number>;
  abstract getBlockFromTimestamp(timestamp: number, networkId?: string): Promise<number>;
  abstract getDateByBlockAt(blockNumber: number): Promise<Date>;
}
