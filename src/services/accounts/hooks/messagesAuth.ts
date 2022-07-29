/** @format */

import { emailRegistrationInstance } from "../instance";

export const getEmailInputed = (): string => {
    return emailRegistrationInstance.email;
};
export const getTextCheckEmailCode = (): string => {
    const email = getEmailInputed();
    return `Please check your email ${email} for alink to sign up to Archive`;
};
