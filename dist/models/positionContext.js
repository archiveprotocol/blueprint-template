"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionContext = void 0;
class PositionContext {
    constructor(context, positionSnapshots, userAddresses, positionIdentifier) {
        this.context = context;
        this.positionSnapshots = positionSnapshots;
        this.userAddresses = userAddresses;
        this.positionIdentifier = positionIdentifier;
    }
}
exports.PositionContext = PositionContext;
