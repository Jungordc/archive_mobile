/** @format */

import React from "react";
import { View } from "native-base";
import ButtonEditProfile, { ButtonEditProfileProps } from "./ButtonEditProfile";
import { InterfaceViewProps } from "native-base/src/components/basic/View/types";
import { ImageURISource } from "react-native";

export type BaseImageProfileProps = {
    edit?: boolean;
    source?: number | ImageURISource;
    buttonEditProfileProps?: ButtonEditProfileProps;
    onSelectProfile?(): void;
} & InterfaceViewProps;

const BaseImageProfile: React.FC<BaseImageProfileProps> = ({
    edit,
    children,
    onSelectProfile,
    buttonEditProfileProps,
    ...props
}) => {
    return (
        <View position="relative" {...props}>
            {children}
            {edit && (
                <ButtonEditProfile
                    zIndex={12}
                    onPress={onSelectProfile}
                    {...buttonEditProfileProps}
                />
            )}
        </View>
    );
};

export default BaseImageProfile;
