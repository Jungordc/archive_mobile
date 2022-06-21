/** @format */

import { View, Text } from "native-base";
import React from "react";
import ProfileImages from "./ProfileImages";

export type ProfileImageButtonProps = {
    btn?: React.ReactNode;
};
const ProfileImageButton: React.FC<ProfileImageButtonProps> = ({ btn }) => {
    return (
        <View>
            <ProfileImages />
            <View m="2" mt="3" alignItems="flex-end">
                {btn}
            </View>
        </View>
    );
};

export default ProfileImageButton;
