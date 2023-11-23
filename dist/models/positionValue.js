"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionValue = void 0;
class PositionValue {
    constructor(positionValueUsd, positionShareDetails, pendingIncome = [], tokenAmounts = []) {
        this.positionValueUsd = positionValueUsd;
        this.positionShareDetails = positionShareDetails;
        this.pendingIncome = pendingIncome;
        this.tokenAmounts = tokenAmounts;
    }
}
exports.PositionValue = PositionValue;
