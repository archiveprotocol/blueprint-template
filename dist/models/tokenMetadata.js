"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenMetadata = void 0;
class TokenMetadata {
    constructor(address, name, symbol, decimals) {
        this.address = address;
        this.name = name;
        this.symbol = symbol;
        this.decimals = decimals;
    }
}
exports.TokenMetadata = TokenMetadata;
