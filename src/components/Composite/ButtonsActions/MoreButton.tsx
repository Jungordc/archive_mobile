/** @format */

import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icon } from "native-base/src/components/primitives/Icon";
import IconButton, {
    IIconButtonProps,
} from "native-base/src/components/composites/IconButton";
import { IoniconsNameType } from "./types";

export type MoreButtonProps = {
    iconName?: IoniconsNameType;
} & IIconButtonProps;

const MoreButton: React.FC<MoreButtonProps> = ({
    iconName = "ellipsis-vertical",
    ...props
}) => {
    return (
        <IconButton
            size="sm"
            fontVariant="small-caps"
            colorScheme="coolGray"
            icon={<Icon as={Ionicons} name={iconName} />}
            {...props}
        />
    );
};

export default MoreButton;
