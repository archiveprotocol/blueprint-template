"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionValueContext = void 0;
class PositionValueContext {
    constructor(context, positionSnapshots, userAddresses, positionIdentifier, timestamp) {
        this.context = context;
        this.positionSnapshots = positionSnapshots;
        this.userAddresses = userAddresses;
        this.positionIdentifier = positionIdentifier;
        this.timestamp = timestamp;
    }
}
exports.PositionValueContext = PositionValueContext;
