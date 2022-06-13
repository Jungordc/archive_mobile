/** @format */

import React from "react";
import IconButton, {
    IIconButtonProps,
} from "native-base/src/components/composites/IconButton";
import Icon from "native-base/src/components/primitives/Icon/Icon";
import Ionicons from "@expo/vector-icons/Ionicons";

export type ProfileEditButtonProps = {} & IIconButtonProps;

const ProfileEditButton: React.FC<ProfileEditButtonProps> = ({ ...props }) => {
    return (
        <IconButton
            right="1.5"
            top="1.5"
            position="absolute"
            onPress={console.log}
            size="sm"
            bgColor="rgba(255,255,255,0.5)"
            _icon={{
                color: "coolGray.800",
                size: "2xl",
            }}
            icon={<Icon as={Ionicons} name="camera" />}
            {...props}
        />
    );
};

export default ProfileEditButton;
