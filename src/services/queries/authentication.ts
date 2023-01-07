/** @format */
import { Authapis } from "../../../packages/archive-apis-client/src/auth";
import { useMutation } from "react-query";

type onSuccessType = {
    onSuccess(args: any): void;
};

// signin email
export function useEmailSignin<T extends onSuccessType>(params?: T) {
    return useMutation(
        (email: string) =>
            Authapis.singnin_email({
                email,
            }),
        {
            onSuccess: params?.onSuccess,
            onError(error, variables, context) {
                return error?.response?.data || error;
            },
        }
    );
}

// login email
export function useEmailLogin<T extends onSuccessType>(params?: T) {
    return useMutation((email: string) => Authapis.login_email({ email }), {
        onSuccess: params?.onSuccess,
    });
}

// resend code
export function useResendCode<T extends onSuccessType>(params?: T) {
    return useMutation(
        (session: string) => Authapis.rensend_code({ session }),
        {
            onSuccess: params?.onSuccess,
        }
    );
}

// confirm code
export function useConfirmCode<T extends onSuccessType>(params?: T) {
    return useMutation(
        (args: { code: string; session: string }) =>
            Authapis.confirm_code(args),
        {
            onSuccess: params?.onSuccess,
        }
    );
}

// Update name
export function useUpdateName<T extends onSuccessType>(params?: T) {
    return useMutation((name: string) => Authapis.update_name({ name }), {
        onSuccess: params?.onSuccess,
    });
}
