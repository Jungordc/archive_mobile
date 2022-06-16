/** @format */

import React from "react";
import { ImageSourcePropType } from "react-native";
import { View } from "native-base";
import { InterfaceViewProps } from "native-base/src/components/basic/View/types";
import Avatar, { AvatarProps } from "../../Primitive/Avatar/Avatar";
import { InterfaceIconButtonProps } from "native-base/src/components/composites/IconButton/types";
import BaseImageProfile, { BaseImageProfileProps } from "./BaseImageProfile";

export type ProfileUserProps = {
    size?: InterfaceViewProps["size"];
    source?: ImageSourcePropType;
    avatarProps?: AvatarProps;
    iconButtonProps?: InterfaceIconButtonProps;
} & BaseImageProfileProps;

const ProfileUser: React.FC<ProfileUserProps> = ({
    size = "16",
    source,
    avatarProps,
    iconButtonProps,
    ...props
}) => {
    return (
        <BaseImageProfile
            buttonEditProfileProps={{
                position: "absolute",
                right: -15,
                bottom: -15,
            }}
            {...props}
        >
            {source ? (
                <Avatar size={size} source={source} {...avatarProps} />
            ) : (
                <View size={16} bg="coolGray.300" borderRadius="full" />
            )}
        </BaseImageProfile>
    );
};

ProfileUser.displayName = "ProfileUser";
export default ProfileUser;
