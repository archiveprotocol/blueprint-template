"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTransactionResults = void 0;
class UserTransactionResults {
    constructor(userTransactions, lastSyncedBlock) {
        this.userTransactions = userTransactions;
        this.lastSyncedBlock = lastSyncedBlock;
    }
}
exports.UserTransactionResults = UserTransactionResults;
