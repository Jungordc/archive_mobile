/** @format */

import React from "react";
import { ImageSourcePropType } from "react-native";
import { View, Icon } from "native-base";
import { InterfaceViewProps } from "native-base/src/components/basic/View/types";
import { uri } from "../../../utils/uri";
import Avatar, { AvatarProps } from "../../Primitive/Avatar/Avatar";
import IconButton, {
    IconButtonProps,
} from "../../Primitive/IconButton/IconButton";
import Ionicons from "@expo/vector-icons/Ionicons";

export type ProfileUserProps = {
    source?: ImageSourcePropType;
    avatarProps?: AvatarProps;
    iconButtonProps?: IconButtonProps;
} & InterfaceViewProps;

const ProfileUser: React.FC<ProfileUserProps> = ({
    size = "16",
    source = uri,
    avatarProps,
    iconButtonProps,
    ...props
}) => {
    return (
        <View position="relative" {...props}>
            {source ? (
                <Avatar size={size} source={source} {...avatarProps} />
            ) : (
                <View size={16} bg="coolGray.300" borderRadius="full" />
            )}
            <IconButton
                position="absolute"
                right={-15}
                bottom={-15}
                onPress={console.log}
                size="sm"
                bgColor="rgba(255,255,255,.8)"
                _icon={{
                    color: "coolGray.800",
                    size: "2xl",
                }}
                icon={<Icon as={Ionicons} name="camera" />}
                {...iconButtonProps}
            />
        </View>
    );
};

ProfileUser.displayName = "ProfileUser";
export default ProfileUser;
