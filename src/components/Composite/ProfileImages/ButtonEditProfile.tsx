/** @format */

import React from "react";
import IconButton, {
    IIconButtonProps,
} from "native-base/src/components/composites/IconButton";
import { Icon } from "native-base/src/components/primitives/Icon";
import Ionicons from "@expo/vector-icons/Ionicons";

export type ButtonEditProfileProps = {
    iconName?: string;
} & IIconButtonProps;

const ButtonEditProfile: React.FC<ButtonEditProfileProps> = ({
    iconName = "camera",
    ...props
}) => {
    return (
        <IconButton
            rounded="full"
            colorScheme="green"
            size="sm"
            bgColor="rgba(255,255,255,0.5)"
            _icon={{
                color: "coolGray.800",
                size: "lg",
            }}
            icon={<Icon as={Ionicons} name={iconName} />}
            {...props}
        />
    );
};

export default ButtonEditProfile;
