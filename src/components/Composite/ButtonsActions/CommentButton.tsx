/** @format */

import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icon } from "native-base/src/components/primitives/Icon";
import IconButton, {
    IIconButtonProps,
} from "native-base/src/components/composites/IconButton";
import { IoniconsNameType } from "./types";

export type CommentButtonProps = {
    iconName?: IoniconsNameType;
} & IIconButtonProps;

const CommentButton: React.FC<CommentButtonProps> = ({
    iconName = "chatbubble-outline",
    ...props
}) => {
    return (
        <IconButton
            fontVariant="small-caps"
            colorScheme="coolGray"
            icon={<Icon as={Ionicons} name={iconName} />}
            {...props}
        />
    );
};

export default CommentButton;
