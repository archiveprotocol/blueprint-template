import { UserProtocolPositionIntervalDataToken } from './userProtocolPositionIntervalDataToken.entity';
import BigNumber from 'bignumber.js';

export class UserProtocolPositionIntervalData {
  id: number;
  identifier: string;
  userAddress: string;
  protocolKey: string;
  date: Date;
  positionAgeSeconds: BigNumber;
  blockNumber: number;
  timestamp: number;
  isEODEntry: boolean;
  positionSharesAtBlock: BigNumber;
  basePositionShares: BigNumber;
  avgOpenInterestUsd: BigNumber;
  ethPriceUsd: BigNumber;
  ethPriceSource: string;
  btcPriceUsd: BigNumber;
  btcPriceSource: string;
  userProtocolPositionIntervalDataToken: UserProtocolPositionIntervalDataToken[];
  createdAt: Date;
  updatedAt: Date;
}
