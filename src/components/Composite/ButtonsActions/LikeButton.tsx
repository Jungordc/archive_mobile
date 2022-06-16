/** @format */

import { View, Text } from "react-native";
import React from "react";
import IconButton, {
    IIconButtonProps,
} from "native-base/src/components/composites/IconButton";
import { Icon } from "native-base/src/components/primitives/Icon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IoniconsNameType } from "./types";

export type LikeButtonProps = {
    liked?: boolean;
    likedIconName?: IoniconsNameType;
    unLikedIconName?: IoniconsNameType;
} & IIconButtonProps;

const LikeButton: React.FC<LikeButtonProps> = ({
    liked,
    likedIconName = "heart",
    unLikedIconName = "heart-outline",
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
                    name={liked ? likedIconName : unLikedIconName}
                />
            }
            {...props}
        />
    );
};

export default LikeButton;
