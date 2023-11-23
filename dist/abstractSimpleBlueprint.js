"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSimpleBlueprint = void 0;
const blueprintCategory_1 = require("./models/blueprintCategory");
const blueprintRequest_1 = require("./models/blueprintRequest");
const constants_1 = require("./models/constants");
const userTransactionResults_1 = require("./models/userTransactionResults");
class AbstractSimpleBlueprint {
    constructor(context, transactionDetails) {
        this.context = context;
        /**
         * We create an array of mock transactions, since this is an example blueprint and we will always be using these,
         * instead of fetching transactions externally from an api or subgraph.
         */
        this.transactionDetails = transactionDetails;
    }
    /**
     * Please provide at least three test wallet addresses who have intaracted with the protocol.
     */
    getTestWalletAddresses() {
        return [
            '0x0000000000000000000000000000000000000001',
            '0x0000000000000000000000000000000000000002',
            '0x0000000000000000000000000000000000000003',
        ];
    }
    syncMetadata(_metadataStore, _lastSyncAt) {
        return Promise.resolve(0);
    }
    syncMetadataInterval() {
        return 0;
    }
    getParentBlueprintId() {
        return '';
    }
    getBlueprintCategory() {
        return blueprintCategory_1.BlueprintCategory.DEX;
    }
    getUserTransactions(context, userAddresses, fromBlock) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * First we instantiate a blueprint context for use in later method calls.
             * Afterwards, we write up some logic to fetch all user transactions since `fromBlock` (from an api or subgraph for example),
             * and return them in a `UserTransactionResults` object (with the last synced block as last argument).
             */
            this.blueprintRequest = new blueprintRequest_1.BlueprintRequest(context, this.getBlueprintKey(), userAddresses);
            const filteredTxnDetails = this.transactionDetails.filter((td) => td.blockNumber >= fromBlock);
            return new userTransactionResults_1.UserTransactionResults(filteredTxnDetails, Math.max(AbstractSimpleBlueprint.LAST_TXN_BLOCK, fromBlock));
        });
    }
    classifyTransaction(_context, txn) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * This is where things get interesting! As a blueprint developer, you are responsible for figuring out how to classify
             * each of the transactions previously fetched. Each smart contract has their own unique ways of making magic happen,
             * but in the end, Archive Protocol API needs to categorize each of these as:
             * - DEPOSIT → Covers the sending of underlying tokens into a contract, in exchange for an LP token for example.
             * - WITHDRAW → Covers the withdrawal of previously deposited assets, from the contract.
             * - TRANSFER_IN → Covers ONLY Receipt/LP tokens and/or NFTs that are sent from another address to user, meaning they now have full custody of it.
             * - TRANSFER_OUT → Covers ONLY LP tokens and/or NFTs that are sent from user to another address, meaning they will not have custody of it anymore.
             * - NULL_OP → If we know user sent it to an address that we deem as a farm (ie: they still have custody of it which they can get it back later).
             *
             * For this example, we will simply use a map that associates a transaction hash to a transaction type, but the real deal
             * will be more complex that this, as it will probably involve the blueprint developer scanning through transaction logs
             * and decypher what happens in order to properly classify each transaction.
             */
            const txnHashes = this.transactionDetails.map((d) => d.txHash);
            const txnTypeMap = new Map([
                [txnHashes[0], constants_1.OperationType.DEPOSIT],
                [txnHashes[1], constants_1.OperationType.INCOME],
                [txnHashes[2], constants_1.OperationType.WITHDRAW],
            ]);
            const operationType = txnTypeMap.get(txn.txHash);
            switch (operationType) {
                case constants_1.OperationType.DEPOSIT:
                    return this.getSimpleDepositOperation();
                case constants_1.OperationType.INCOME:
                    return this.getSimpleIncomeOperation();
                case constants_1.OperationType.WITHDRAW:
                    return this.getSimpleWithdrawOperation();
                default:
                    // We return an empty array as for this example case, we only consider the three above transaction types.
                    return [];
            }
        });
    }
    getPositionValueAt(positionContext, { blockNumber }) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * This method serves as a way to get a position's value at a specific timestamp / block, return any information about pending rewards,
             * and also current underlying tokens the user has deposited in the position.
             * We are simply returning mock values below, but it's up to the blueprint developer to write some code that fetches this information,
             * and return it in a `PositionValue` object.
             */
            return this.getSimplePositionValue(blockNumber);
        });
    }
    getCurrentPositionValue(positionContext) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * This method serves as a way to get a position's value at the current timestamp / block, return any information about pending rewards,
             * and also current underlying tokens the user has deposited in the position.
             * We are simply returning mock values below, but it's up to the blueprint developer to write some code that fetches this information,
             * and return it in a `PositionValue` object.
             */
            return this.getSimpleCurrentPositionValue();
        });
    }
    /**
     * This method will return the full list of the users that have interact with this protocol
     */
    getUserList(_fromBlock) {
        return __awaiter(this, void 0, void 0, function* () {
            const sampleUserList = ['0x0000000000000000000000000000000000000001', '0x0000000000000000000000000000000000000002'];
            return sampleUserList;
        });
    }
    getContext() {
        return this.context;
    }
}
AbstractSimpleBlueprint.FIRST_TXN_BLOCK = 16989112;
AbstractSimpleBlueprint.LAST_TXN_BLOCK = 16989114;
exports.AbstractSimpleBlueprint = AbstractSimpleBlueprint;
