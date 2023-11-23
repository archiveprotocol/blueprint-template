"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractSimpleBlueprint_1 = require("./abstractSimpleBlueprint");
const classification_1 = require("./models/classification");
const constants_1 = require("./models/constants");
const operation_1 = require("./models/operation");
const positionShares_1 = require("./models/positionShares");
const positionValue_1 = require("./models/positionValue");
const tokenInfo_1 = require("./models/tokenInfo");
const transactionDetails_1 = require("./models/transactionDetails");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class MySimpleBlueprint extends abstractSimpleBlueprint_1.AbstractSimpleBlueprint {
    constructor(context) {
        super(context, [
            new transactionDetails_1.TransactionDetails('0xs1mPlTxN001', abstractSimpleBlueprint_1.AbstractSimpleBlueprint.FIRST_TXN_BLOCK, 1680778343),
            new transactionDetails_1.TransactionDetails('0xs1mPlTxN002', 16989113, 1680778355),
            new transactionDetails_1.TransactionDetails('0xs1mPlTxN003', abstractSimpleBlueprint_1.AbstractSimpleBlueprint.LAST_TXN_BLOCK, 1680778367),
        ]);
        this.INIT_POSITION_VALUE = 2000;
        this.USDC_TOKEN_ADDRESS = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
        this.WETH_TOKEN_ADDRESS = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
        this.LP_TOKEN_ADDRESS = '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc';
    }
    getContractName() {
        return 'My Simple Blueprint';
    }
    getBlueprintKey() {
        return 'my_simple';
    }
    getSimpleDepositOperation() {
        return [
            new classification_1.Classification([
                new operation_1.Operation(constants_1.OperationType.DEPOSIT, [
                    new tokenInfo_1.TokenInfo(this.WETH_TOKEN_ADDRESS, 1000, (0, bignumber_js_1.default)('1'), this.getBlueprintKey()),
                    new tokenInfo_1.TokenInfo(this.USDC_TOKEN_ADDRESS, 1, (0, bignumber_js_1.default)('1000'), this.getBlueprintKey()),
                ], [new tokenInfo_1.TokenInfo(this.LP_TOKEN_ADDRESS, 1, (0, bignumber_js_1.default)(this.INIT_POSITION_VALUE), this.getBlueprintKey())]),
            ], '0xs1mplblprnt', (0, bignumber_js_1.default)('0'), [new positionShares_1.PositionShares(this.LP_TOKEN_ADDRESS, (0, bignumber_js_1.default)(this.INIT_POSITION_VALUE), 1)]),
        ];
    }
    getSimpleIncomeOperation() {
        return [
            new classification_1.Classification([
                new operation_1.Operation(constants_1.OperationType.INCOME, [], [
                    new tokenInfo_1.TokenInfo(this.WETH_TOKEN_ADDRESS, 1000.5, (0, bignumber_js_1.default)(0.01), this.getBlueprintKey(), constants_1.TokenTag.REWARDS),
                    new tokenInfo_1.TokenInfo(this.USDC_TOKEN_ADDRESS, 1, (0, bignumber_js_1.default)(10), this.getBlueprintKey(), constants_1.TokenTag.REWARDS),
                ]),
            ], '0xs1mplblprnt', (0, bignumber_js_1.default)('0'), [new positionShares_1.PositionShares(this.LP_TOKEN_ADDRESS, (0, bignumber_js_1.default)(0), 1)]),
        ];
    }
    getSimpleWithdrawOperation() {
        return [
            new classification_1.Classification([
                new operation_1.Operation(constants_1.OperationType.WITHDRAW, [new tokenInfo_1.TokenInfo(this.LP_TOKEN_ADDRESS, 1, (0, bignumber_js_1.default)(this.INIT_POSITION_VALUE), this.getBlueprintKey())], [
                    new tokenInfo_1.TokenInfo(this.WETH_TOKEN_ADDRESS, 1000, (0, bignumber_js_1.default)('1'), this.getBlueprintKey()),
                    new tokenInfo_1.TokenInfo(this.USDC_TOKEN_ADDRESS, 1, (0, bignumber_js_1.default)('1000'), this.getBlueprintKey()),
                ]),
            ], '0xs1mplblprnt', (0, bignumber_js_1.default)('0'), [new positionShares_1.PositionShares(this.LP_TOKEN_ADDRESS, (0, bignumber_js_1.default)(this.INIT_POSITION_VALUE).negated(), 1)]),
        ];
    }
    getSimplePositionValue(blockNumber) {
        const value = blockNumber < abstractSimpleBlueprint_1.AbstractSimpleBlueprint.FIRST_TXN_BLOCK
            ? 0
            : this.INIT_POSITION_VALUE + blockNumber - abstractSimpleBlueprint_1.AbstractSimpleBlueprint.FIRST_TXN_BLOCK;
        const positionShares = new positionShares_1.PositionShares(this.LP_TOKEN_ADDRESS, (0, bignumber_js_1.default)(0), 1, blockNumber < abstractSimpleBlueprint_1.AbstractSimpleBlueprint.LAST_TXN_BLOCK ? (0, bignumber_js_1.default)(this.INIT_POSITION_VALUE) : (0, bignumber_js_1.default)(0));
        return new positionValue_1.PositionValue(value, [positionShares], [], [
            new tokenInfo_1.TokenInfo(this.WETH_TOKEN_ADDRESS, 1000, (0, bignumber_js_1.default)('1'), this.getBlueprintKey()),
            new tokenInfo_1.TokenInfo(this.USDC_TOKEN_ADDRESS, 1, (0, bignumber_js_1.default)('1000'), this.getBlueprintKey()),
        ]);
    }
    getSimpleCurrentPositionValue() {
        return this.getSimplePositionValue(abstractSimpleBlueprint_1.AbstractSimpleBlueprint.LAST_TXN_BLOCK);
    }
}
exports.default = MySimpleBlueprint;
