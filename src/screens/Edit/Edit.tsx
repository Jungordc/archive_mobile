/** @format */

import React from "react";
import { RootStackScreenProps } from "../../navigation/types";
import Editor from "../../components/Composite/Editor/Editor";
import { Box } from "native-base";
import useBtnSaveEffect from "../../hooks/actions/useBtnSaveEffect";

export type EditProps = {} & RootStackScreenProps<"Edition">;

const Edit: React.FC<EditProps> = ({
    navigation,
    route: {
        params: { category },
    },
}) => {
    useBtnSaveEffect({
        navigation,
        btnProps: {
            onPress: () => {
                console.log("Text....");
            },
        },
    });
    return (
        <Box flex={1}>
            <Editor />
        </Box>
    );
};

Edit.displayName = "Edit";
export default Edit;
