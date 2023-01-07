/** @format */

import { AccountsModel, EmailRegistration, TokenModel } from "./models";
import storage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { persist } from "mst-persist";
import { AdaptatorSecureToAsyncStorage } from "../../utils/adaptator";

const secureToAsyncStorage = new AdaptatorSecureToAsyncStorage(SecureStore);
export const emailRegistrationInstance = EmailRegistration.create({});
export const TokenInstance = TokenModel.create({});

export const AccountInstance = AccountsModel.create({
    isAuthenticated: false,
    authors: [],
});

// persist("@AccountsJA", AccountInstance, {
//     storage: storage,
//     whitelist: ["isAuthenticated", "authors"], // only these keys will be persisted
// }).then((value) => console.log("AccountsJA has been hydrated", value));

persist("__SecureStorageToken", TokenInstance, {
    storage: secureToAsyncStorage,
    whitelist: ["access", "refresh"], // only these keys will be persisted
}).then(() => console.log("SecureStorageToken has been hydrated"));
