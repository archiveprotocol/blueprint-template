"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classification = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
class Classification {
    constructor(operations, 
    // unique identifier
    positionIdentifier, 
    // gas token amount spent for transaction
    gasTokenAmount = (0, bignumber_js_1.default)(0), positionShareDetails) {
        this.operations = operations;
        this.positionIdentifier = positionIdentifier;
        this.gasTokenAmount = gasTokenAmount;
        this.positionShareDetails = positionShareDetails;
    }
}
exports.Classification = Classification;
