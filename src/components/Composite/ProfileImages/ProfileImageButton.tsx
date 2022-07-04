/** @format */

import React from "react";
import { View } from "native-base/src/components/basic/View";
import ProfileImages from "./ProfileImages";

export type ProfileImageButtonProps = {
    btn?: React.ReactNode;
    profileImage?: React.ReactNode;
};
const ProfileImageButton: React.FC<ProfileImageButtonProps> = ({
    btn,
    profileImage,
}) => {
    return (
        <View>
            {profileImage || <ProfileImages />}
            <View m="2" mt="3" alignItems="flex-end">
                {btn}
            </View>
        </View>
    );
};

export default ProfileImageButton;
