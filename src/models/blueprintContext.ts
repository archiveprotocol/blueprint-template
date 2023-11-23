import { BlockbydateAPI } from './blockbydateAPI';
import { NetworkConfig } from './networkConfig';
import { TokenMetadataOracle } from './tokenMetadataOracle';
import { Logger } from 'log4js';

export abstract class BlueprintContext {
  private networkConfig: NetworkConfig;
  public abstract buildWithBlueprintId(context: BlueprintContext, blueprintKey: string): BlueprintContext;
  public abstract getBlockByDateApi(): BlockbydateAPI;
  public abstract getLogger(): Logger;
  public abstract setBlueprintId(blueprintId: string): void;
  abstract getNetwork(): any;

  abstract isRealTimePriceMode(): boolean;

  getNetworkConfig(): NetworkConfig {
    return this.networkConfig;
  }

  /**
   * Gets the contract reader.
   */
  abstract getContractReader(): any;

  abstract getExchangePrice(): any;

  abstract getCommonAPI(): any;

  // abstract getRawRedis(): AsyncRedis; // we comment this out to not worry about Redis types for the moment

  abstract getVisionCache(): any;

  abstract getTokenMetadataOracle(): TokenMetadataOracle;
}
