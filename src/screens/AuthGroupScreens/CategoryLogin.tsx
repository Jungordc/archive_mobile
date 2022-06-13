/** @format */

import React from "react";
import { RootStackScreenProps } from "../../navigation/types";
import CategoryContainer from "./CategoryContainer";

export type CategoryLoginProps = {} & RootStackScreenProps<"Login">;
const CategoryLogin: React.FC<CategoryLoginProps> = ({ navigation }) => {
    const onPressTextCategory = () => navigation.navigate("Signin");
    const onPressMail = () => navigation.navigate("EmailAuth");
    const onPressAuthGoogle = () => {};
    const onPressFaceBook = () => {};
    return (
        <CategoryContainer
            title="Se connecter."
            textGoogle="Se connecter avec Google"
            textMail="Se connecter avec Email"
            textOtherAuth="Ou, se connecter avec"
            textCategory="Joindre archive"
            textNotAccount="Vous n'avez pas encore de compte? "
            onPressTextCategory={onPressTextCategory}
            onPressAuthGoogle={onPressAuthGoogle}
            onPressFaceBook={onPressFaceBook}
            onPressMail={onPressMail}
        />
    );
};

export default CategoryLogin;
