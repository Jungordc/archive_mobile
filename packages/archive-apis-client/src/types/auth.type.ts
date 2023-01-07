/** @format */

import Providers from "../providers";

export type ParamsProvidersAuthType = {
    providers: Providers;
    access_token: string;
    token_type: string;
};

// Email Login and signin
export type ParamsEmailAuth = {
    email: string;
};

export type ParamsConfirmCodeType = {
    session: string;
    code: string;
};

export type ParamsUpdateName = {
    name: string;
};
// return Type
export type ErrorReturnType = {
    detail: string;
};

export type TokenAuthReturnType = {
    access: string;
    refresh: string;
};

export type EmailAuthReturnType = {
    email: string;
    access_token_confirmation: string;
};
