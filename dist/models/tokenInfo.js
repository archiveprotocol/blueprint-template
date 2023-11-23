"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenInfo = void 0;
const constants_1 = require("./constants");
class TokenInfo {
    constructor(identifier, // token address | pool id (masterchef type)
    priceUsd, amount, // amount divided by token decimals
    source, // price source
    tag = constants_1.TokenTag.EMPTY, // tag for special tokens
    isVirtualToken = false) {
        this.identifier = identifier;
        this.priceUsd = priceUsd;
        this.amount = amount;
        this.source = source;
        this.tag = tag;
        this.isVirtualToken = isVirtualToken;
    }
}
exports.TokenInfo = TokenInfo;
