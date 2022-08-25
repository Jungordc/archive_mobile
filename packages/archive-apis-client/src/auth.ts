/** @format */

import { clients } from "./clients";
import Providers from "./providers";
import { LOGIN } from "./urls";

export async function login<T>(provider: Providers, data: T) {
    return clients.post(LOGIN, data);
}

/**
 *  {'id': '106563430789662663576', 'email': 'bienfaitshm@gmail.com', 'verified_email': True, 'name': 'Bienfait Shomari', 'given_name': 'Bienfait', 'family_name': 'Shomari', 'picture': 'https://lh3.googleusercontent.com/a/AItbvmm-kVE_Cy_p_i5MXtyDlHBkSyztPuw7WnJCuTID=s96-c', 'locale': 'fr'}
 */
