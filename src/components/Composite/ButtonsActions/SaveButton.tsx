/** @format */

import React from "react";
import IconButton, {
    IIconButtonProps,
} from "native-base/src/components/composites/IconButton";
import { Icon } from "native-base/src/components/primitives/Icon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IoniconsNameType } from "./types";

export type SaveButtonProps = {
    saved?: boolean;
    savedIconName?: IoniconsNameType;
    unSavedIconName?: IoniconsNameType;
} & IIconButtonProps;

const SaveButton: React.FC<SaveButtonProps> = ({
    saved,
    savedIconName = "md-bookmark",
    unSavedIconName = "md-bookmark-outline",
    ...props
}) => {
    return (
        <IconButton
            size="sm"
            fontVariant="small-caps"
            colorScheme="coolGray"
            icon={
                <Icon
                    as={Ionicons}
                    name={saved ? savedIconName : unSavedIconName}
                />
            }
            {...props}
        />
    );
};

export default SaveButton;
