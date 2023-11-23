import { BlockTimeOracle } from './blockTimeOracle';
import { BlueprintContext } from './blueprintContext';
import { GasOracle } from './gasOracle';
import { TokenMetadataOracle } from './tokenMetadataOracle';

export interface NetworkConfig {
  getNetwork(): any;

  getNetworkName(): string;

  getInitStartBlock(): number;

  // gets the user lp transactions subgraph urls
  isContractNameLookupEnabled(): boolean;

  getMainProviderUrl(): string;

  getGasOracle(context: BlueprintContext): GasOracle;

  getTokenMetadataOracle(context: BlueprintContext): TokenMetadataOracle;

  getBlockTimeOracle(context: BlueprintContext): BlockTimeOracle;
}
