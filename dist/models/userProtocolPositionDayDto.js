"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProtocolPositionDayDto = void 0;
const userProtocolPositionDayTokensDto_1 = require("./userProtocolPositionDayTokensDto");
class UserProtocolPositionDayDto {
    constructor(identifier, intervalData) {
        this.positionIdentifier = identifier;
        this.date = intervalData.date.toLocaleDateString();
        this.positionAgeSeconds = intervalData.positionAgeSeconds;
        this.blockNumber = intervalData.blockNumber;
        this.timestamp = intervalData.timestamp;
        this.isEODEntry = intervalData.isEODEntry;
        this.positionSharesAtBlock = intervalData.positionSharesAtBlock;
        this.basePositionShares = intervalData.basePositionShares;
        // this.positionUsdValueAtBlock = intervalData.positionUsdValueAtBlock;
        // this.basePositionCostUsd = intervalData.basePositionCostUsd;
        // this.basePositionUnitCostUsd = intervalData.basePositionUnitCostUsd;
        // this.netMarketGainUsd = intervalData.netMarketGainUsd;
        // this.netMarketGainPct = intervalData.netMarketGainPct;
        // this.hodlValueUsd = intervalData.hodlValueUsd;
        // this.roiVsHodlUsd = intervalData.roiVsHodlUsd;
        // this.roiVsHodlPct = intervalData.roiVsHodlPct;
        // this.ifHeldAllAmountEth = intervalData.ifHeldAllAmountEth;
        // this.ifHeldAllAmountEthValueUsd = intervalData.ifHeldAllAmountEthValueUsd;
        // this.ifHeldAllAmountBtc = intervalData.ifHeldAllAmountBtc;
        // this.ifHeldAllAmountBtcValueUsd = intervalData.ifHeldAllAmountBtcValueUsd;
        // this.avgOpenInterestUsd = intervalData.avgOpenInterestUsd;
        // this.cumulativeCollectedIncomeUsd = intervalData.cumulativeCollectedIncomeUsd;
        // this.pendingIncomeUsd = intervalData.pendingIncomeUsd;
        // this.incomeApyInception = intervalData.incomeApyInception;
        // this.exitRatio = intervalData.exitRatio;
        // this.exitedSessionLength = intervalData.exitedSessionLength;
        // this.exitedCostUsd = intervalData.exitedCostUsd;
        // this.exitedValueUsd = intervalData.exitedValueUsd;
        // this.exitedNetGainUsd = intervalData.exitedNetGainUsd;
        // this.exitedNetGainPct = intervalData.exitedNetGainPct;
        // this.exitedCollectedIncomeAmount = intervalData.exitedCollectedIncomeAmount;
        // this.exitedCollectedIncomeUsd = intervalData.exitedCollectedIncomeUsd;
        // this.exitedIncomeAPY = intervalData.exitedIncomeAPY;
        // this.exitedRoiVsHodlUsd = intervalData.exitedRoiVsHodlUsd;
        // this.exitedRoiVsHodlPct = intervalData.exitedRoiVsHodlPct;
        // this.exitedHodlValueUsd = intervalData.exitedHodlValueUsd;
        // this.exitedIfHeldAllAmountEthValueUsd = intervalData.exitedIfHeldAllAmountEthValueUsd;
        // this.exitedIfHeldAllAmountBtcValueUsd = intervalData.exitedIfHeldAllAmountBtcValueUsd;
        this.dayDataTokenLedger = intervalData.userProtocolPositionIntervalDataToken.map((dt) => new userProtocolPositionDayTokensDto_1.UserProtocolPositionDayTokensDto(dt));
    }
}
exports.UserProtocolPositionDayDto = UserProtocolPositionDayDto;
