/** @format */

import { View } from "native-base";
import { InterfaceViewProps } from "native-base/src/components/basic/View/types";
import React from "react";
import ProfileCover, { ProfileCoverProps } from "./ProfileCover";
import ProfileUser, { ProfileUserProps } from "./ProfileUser";

export type ProfileImagesProps = {
    edit?: boolean;
    profileCoverProps?: ProfileCoverProps;
    profileAvatarProps?: ProfileUserProps;
} & InterfaceViewProps;

const ProfileImages: React.FC<ProfileImagesProps> = ({
    edit,
    profileAvatarProps,
    profileCoverProps,
    ...props
}) => {
    return (
        <View {...props}>
            <ProfileCover edit={edit} {...profileCoverProps} />
            <ProfileUser
                edit={edit}
                position="absolute"
                left="3"
                bottom={-35}
                bg="coolGray.300"
                borderRadius="full"
                borderColor="#fff"
                borderWidth="4"
                {...profileAvatarProps}
            />
        </View>
    );
};

ProfileImages.displayName = "ProfileImages";
export default ProfileImages;
