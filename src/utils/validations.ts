/** @format */

var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const isValideEmail = (email: string): boolean => {
    return email.match(mailformat) ? true : false;
};
