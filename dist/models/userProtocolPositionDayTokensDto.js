"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProtocolPositionDayTokensDto = void 0;
class UserProtocolPositionDayTokensDto {
    constructor(dayDataToken) {
        this.tokenName = dayDataToken.tokenName;
        this.tokenAddress = dayDataToken.tokenAddress;
        this.netTokenAmount = dayDataToken.netTokenAmount;
        this.priceUsd = dayDataToken.priceUsd;
        this.priceSource = dayDataToken.priceSource;
        this.pendingIncomeAmount = dayDataToken.pendingIncomeAmount;
    }
}
exports.UserProtocolPositionDayTokensDto = UserProtocolPositionDayTokensDto;
