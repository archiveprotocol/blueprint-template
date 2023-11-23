"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = exports.OperationType = void 0;
var OperationType;
(function (OperationType) {
    OperationType["DEPOSIT"] = "DEPOSIT";
    OperationType["WITHDRAW"] = "WITHDRAW";
    OperationType["INCOME"] = "INCOME";
    OperationType["TRANSFER_IN"] = "TRANSFER_IN";
    OperationType["TRANSFER_OUT"] = "TRANSFER_OUT";
    OperationType["NULL_OP"] = "NULL_OP";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
class Operation {
    constructor(
    // deposit | withdrawal | income | transfer_in | transfer_out | null_op
    operation, 
    // tokens sent from user to protocol
    inputTokens, 
    // tokens sent from protocol to user
    outputTokens) {
        this.operation = operation;
        this.inputTokens = inputTokens;
        this.outputTokens = outputTokens;
    }
}
exports.Operation = Operation;
