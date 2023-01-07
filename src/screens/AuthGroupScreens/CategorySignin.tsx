/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import CategoryContainer from "./containers/CategoryContainer";
import { RootStackScreenProps } from "../../navigation/types";

export type CategorySigninProps = {} & RootStackScreenProps<"Signin">;
const CategorySignin: React.FC<CategorySigninProps> = ({ navigation }) => {
    const onPressTextCategory = () => navigation.navigate("Login");
    const onPressMail = () =>
        navigation.navigate("EmailAuth", { type: "SIGNIN" });
    const onPressAuthGoogle = () => {};
    const onPressFaceBook = () => {};
    return (
        <CategoryContainer
            textCategory="Se connecter"
            textGoogle="Jondre avec Google"
            textMail="Joindre avec Email"
            textOtherAuth="Ou, joindre avec"
            textNotAccount="J'ai deja un compte! "
            onPressTextCategory={onPressTextCategory}
            onPressAuthGoogle={onPressAuthGoogle}
            onPressFaceBook={onPressFaceBook}
            onPressMail={onPressMail}
        />
    );
};

export default observer(CategorySignin);
