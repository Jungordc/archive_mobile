/** @format
 * signin
 *  +facebook
 *  +google
 *  +email
 * Login
 *  +facebbok
 *  +google
 *  +email
 *
 * update name
 * resend email
 * code confirm
 * // export async function login<T>(provider: Providers, data: T) {
//     return clients.post(LOGIN, data);
// }

/**
 *  {'id': '106563430789662663576', 'email': 'bienfaitshm@gmail.com', 'verified_email': True, 'name': 'Bienfait Shomari', 'given_name': 'Bienfait', 'family_name': 'Shomari', 'picture': 'https://lh3.googleusercontent.com/a/AItbvmm-kVE_Cy_p_i5MXtyDlHBkSyztPuw7WnJCuTID=s96-c', 'locale': 'fr'}
 */

import { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { clients } from "./clients";
import Providers from "./providers";
import { AUTHOR, LOGIN_PROVIDER, SIGNIN_PROVIDER, AuthUrls } from "./urls";
import {
    ParamsProvidersAuthType,
    EmailAuthReturnType,
    ParamsEmailAuth,
    ParamsConfirmCodeType,
    ParamsResendCodeConfirmation,
    TokenAuthReturnType,
} from "./types/auth.type";

export async function updateName(name: string) {
    return clients.patch(AUTHOR, { name });
}

export async function login_providers(params: ParamsProvidersAuthType) {
    return clients.post(LOGIN_PROVIDER, params);
}

export async function signin_providers(params: ParamsProvidersAuthType) {
    return clients.post(SIGNIN_PROVIDER, params);
}

class AuthenticationApis {
    private client: AxiosInstance;
    constructor(client: AxiosInstance) {
        this.client = client;
    }

    /**
     * login_email
     */
    public login_email<P = ParamsEmailAuth, D = EmailAuthReturnType>(
        params: P,
        headers?: AxiosRequestConfig
    ) {
        return this.client.post<D, AxiosResponse<D, P>>(
            AuthUrls.LoginEmail,
            params,
            headers
        );
    }

    /**
     * singnin_email
     */
    public singnin_email<P = ParamsEmailAuth, D = EmailAuthReturnType>(
        params: P,
        headers?: AxiosRequestConfig
    ) {
        return this.client.post<D, AxiosResponse<D, P>>(
            AuthUrls.SigninEmail,
            params,
            headers
        );
    }

    /**
     * rensend_code
     */
    public rensend_code<
        P = ParamsResendCodeConfirmation,
        D = EmailAuthReturnType
    >(params: P, headers?: AxiosRequestConfig) {
        return this.client.post<D, AxiosResponse<D, P>>(
            AuthUrls.ResendCode,
            params,
            headers
        );
    }

    /**
     * confirm_code
     */
    public confirm_code<P = ParamsConfirmCodeType, D = TokenAuthReturnType>(
        params: P,
        headers?: AxiosRequestConfig
    ) {
        return this.client.post<D, AxiosResponse<D, P>>(
            AuthUrls.ResendCode,
            params,
            headers
        );
    }

    /**
     * name
     */
    public update_name<P, D>(params: P, headers: AxiosRequestConfig) {
        return this.client.post<D, AxiosResponse<D, P>>(
            AuthUrls.UpdateName,
            params,
            headers
        );
    }
}

export const Authapis = new AuthenticationApis(clients);
