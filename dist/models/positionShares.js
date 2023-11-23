"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionShares = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
/** Represents the number of shares the user has at a specific block.
 *
 *  positionBalance is optional for non-rebasing LP tokens, mandatory for rebasing LP tokens.
 */
class PositionShares {
    constructor(
    /** Address of the receipt token, or if not receipt token, the address of the input token which will form the shares of the position */
    sharesIdentifier = '', 
    /** Amount of 'shares' added/removed in this transaction, it's positive if shares were added, negative if shares were removed */
    amountAdded = (0, bignumber_js_1.default)(0), 
    /** Price of one share in USD */
    sharePriceUsd = 0, 
    /** Use this value for the position balance field if populated in positionValue */
    positionBalance = null, 
    /** It will be true in some cases where the position represents a liability instead of an asset (i.e. aave debt token) */
    isLiabilityPosition = false) {
        this.sharesIdentifier = sharesIdentifier;
        this.amountAdded = amountAdded;
        this.sharePriceUsd = sharePriceUsd;
        this.positionBalance = positionBalance;
        this.isLiabilityPosition = isLiabilityPosition;
    }
}
exports.PositionShares = PositionShares;
