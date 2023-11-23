"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlueprintRequest = void 0;
class BlueprintRequest {
    constructor(context, blueprintKey, userAddresses) {
        this.context = context;
        this.blueprintKey = blueprintKey;
        this.userAddresses = userAddresses;
    }
    getContext() {
        return this.context;
    }
}
exports.BlueprintRequest = BlueprintRequest;
