"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenTag = exports.OperationType = void 0;
var OperationType;
(function (OperationType) {
    OperationType["DEPOSIT"] = "DEPOSIT";
    OperationType["WITHDRAW"] = "WITHDRAW";
    OperationType["INCOME"] = "INCOME";
    OperationType["TRANSFER_IN"] = "TRANSFER_IN";
    OperationType["TRANSFER_OUT"] = "TRANSFER_OUT";
    OperationType["NULL_OP"] = "NULL_OP";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
var TokenTag;
(function (TokenTag) {
    TokenTag["EMPTY"] = "";
    TokenTag["TRADE_FEES"] = "tradeFees";
    TokenTag["REWARDS"] = "rewards";
})(TokenTag = exports.TokenTag || (exports.TokenTag = {}));
