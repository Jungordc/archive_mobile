/** @format */

import { View, Text } from "react-native";
import React from "react";
import { EditionScreenProps } from "../../navigation/types";
import Editor from "../../components/Composite/Editor/Editor";
import { Box } from "native-base";

export type EditProps = {} & EditionScreenProps<"Edition">;

const Edit: React.FC<EditProps> = ({
    navigation,
    route: {
        params: { category },
    },
}) => {
    return (
        <Box flex={1}>
            <Editor />
        </Box>
    );
};

Edit.displayName = "Edit";
export default Edit;
