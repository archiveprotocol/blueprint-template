import { TokenInfo } from './tokenInfo';
import { TokenMetadata } from './tokenMetadata';

export interface TokenMetadataOracle {
  getMetadata(tokenInfo: TokenInfo): Promise<TokenMetadata | null>;
}
