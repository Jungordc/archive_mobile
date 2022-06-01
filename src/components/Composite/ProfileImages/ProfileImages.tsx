/** @format */

import { View, Text } from "native-base";
import React from "react";
import ProfileCover from "./ProfileCover";
import ProfileUser from "./ProfileUser";

export type ProfileImagesProps = {};
const ProfileImages: React.FC<ProfileImagesProps> = ({ ...props }) => {
    return (
        <View>
            <ProfileCover />
            <ProfileUser
                position="absolute"
                left="1.5"
                bottom={-35}
                bg="coolGray.300"
                borderRadius="full"
                borderColor="#fff"
                borderWidth="4"
            />
        </View>
    );
};

ProfileImages.displayName = "ProfileImages";
export default ProfileImages;
