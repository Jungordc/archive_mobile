/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import * as WebBrowser from "expo-web-browser";

import { RootStackScreenProps } from "../../navigation/types";
import CategoryContainer from "./containers/CategoryContainer";
import {
    useFacebookAuthProviders,
    useGoogleAuthProviders,
} from "../../services/accounts/hooks/apisConnection";

export type CategoryLoginProps = {} & RootStackScreenProps<"Login">;

WebBrowser.maybeCompleteAuthSession();
const CategoryLogin: React.FC<CategoryLoginProps> = ({ navigation }) => {
    const onPressTextCategory = () => navigation.navigate("Signin");
    const onPressMail = () => navigation.navigate("EmailAuth");
    const onPressAuthGoogle = useGoogleAuthProviders();
    const onPressFaceBook = useFacebookAuthProviders();

    return (
        <CategoryContainer
            title="Se connecter."
            textGoogle="Se connecter avec Google"
            textMail="Se connecter avec Email"
            textOtherAuth="Ou, se connecter avec"
            textCategory="Joindre j-archive"
            textNotAccount="Vous n'avez pas encore de compte? "
            onPressTextCategory={onPressTextCategory}
            onPressAuthGoogle={onPressAuthGoogle}
            onPressFaceBook={onPressFaceBook}
            onPressMail={onPressMail}
        />
    );
};

export default observer(CategoryLogin);
