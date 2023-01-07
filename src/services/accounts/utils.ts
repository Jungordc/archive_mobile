/** @format */

import { AccountInstance, TokenInstance } from "./instance";

export function authenticate() {
    AccountInstance.authenticate();
}

export function setToken(value: { access: string; refresh: string }) {
    TokenInstance.setToken(value);
}

export function disconnect() {
    AccountInstance.deconnect();
    TokenInstance.clear();
}

export function getTokens() {
    return {
        access: TokenInstance.access,
        refresh: TokenInstance.refresh,
    };
}
