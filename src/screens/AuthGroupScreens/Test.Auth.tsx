/** @format */
import React from "react";
import { View, Text, Button } from "react-native";

import axios from "axios";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";
import { login_providers } from "../../../packages/archive-apis-client/src/auth";
import Provider from "../../../packages/archive-apis-client/src/providers";

type TestAuthProps = {};

const clientId =
    "720203986210-edqm7jdvoau0h5m1ipe74fsf1p7eempp.apps.googleusercontent.com";
const iosClientId =
    "720203986210-d0l1j0gqkj27b1u0doppg4pp9sq0mn2k.apps.googleusercontent.com";
const androidClientId =
    "720203986210-tr8m0r61nvc43pf8h86v8tuo1j60h33b.apps.googleusercontent.com";
const apisGoogle = "https://www.googleapis.com/userinfo/v2/me";
const apisFacebook =
    "https://graph.facebook.com/me?fields=id,name,birthday,picture,email";

const FBID = "524264546141594";

WebBrowser.maybeCompleteAuthSession();

const TestAuth: React.FC<TestAuthProps> = ({ ...props }) => {
    const [accessToken, setAccessToken] = React.useState<any>(null);
    const [userInfo, setUserInfo] = React.useState<any>(null);

    const [request, responce, promptAsync] = Google.useAuthRequest({
        clientId,
        iosClientId,
        androidClientId,
    });

    const [FBrequest, FBresponse, FBpromptAsync] = Facebook.useAuthRequest({
        clientId: FBID,
        responseType: ResponseType.Token,
    });

    React.useEffect(() => {
        if (FBresponse?.type === "success") {
            const access_token = FBresponse.authentication?.accessToken || "";
            const token_type = "Bearer";
            login_providers({
                access_token,
                token_type,
                providers: Provider.FACEBOOK,
            })
                .then(console.log)
                .catch((e) =>
                    console.warn("Error", JSON.stringify(e, null, 4))
                );
            console.log("Facebook", JSON.stringify(FBresponse, null, 4));
        }
    }, [FBresponse]);

    React.useEffect(() => {
        if (responce?.type === "success") {
            const access_token = responce.authentication?.accessToken || "";
            const token_type = responce.authentication?.tokenType || "bearer";

            login_providers({
                access_token,
                token_type,
                providers: Provider.GOOGLE,
            })
                .then(console.log)
                .catch((e) => console.warn("Error", e));

            console.log(
                "Google",
                JSON.stringify(responce.authentication, null, 4)
            );
            // if (accessToken) {
            //     login(Provider.GOOGLE, {
            //         accessToken,
            //         tokenType,
            //     })
            //         .then((re) => {
            //             console.log("Success", re.data);
            //         })
            //         .catch((err) => {
            //             console.log("error", err);
            //         });
            //     // axios
            //     //     .get(apisGoogle, {
            //     //         headers: {
            //     //             Authorization: `${tokenType} ${accessToken}`,
            //     //         },
            //     //     })
            //     //     .then((res) => {
            //     //         setUserInfo(res.data);
            //     //         console.log("reponce...", res);
            //     //     })
            //     //     .catch((err) => {
            //     //         console.log("error", err);
            //     //     });
            // }
        }
    }, [responce]);

    async function fetchUserInfo() {
        axios
            .get(apisGoogle, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                console.log("reponce...", res);
            })
            .catch((err) => {
                console.log("error", err);
            });
        // const responce = await fetch(apisGoogle
        //   ,
        //     {
        //         headers: {
        //             Authorization: `Bearer ${accessToken}`,
        //         },
        //     }
        // );
        // const userInfo = await responce.json();
        // setUserInfo(userInfo);
    }
    return (
        <View>
            <Text>Hello World from TestAuth</Text>
            <Text>{JSON.stringify(userInfo, null, 4)}</Text>
            <Button title="Login with google" onPress={() => promptAsync()} />
            <Button
                title="Login with FaceBook"
                onPress={() => FBpromptAsync()}
            />
        </View>
    );
};

export default TestAuth;
