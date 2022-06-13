/** @format */

import { View, Text } from "native-base";
import React from "react";
import ProfileCover from "./ProfileCover";
import ProfileUser from "./ProfileUser";
import { ComonType } from "./types";

export type ProfileImagesProps = {
    onImageCoverSelect?(e: any): void;
    onImageProfileSelect?(e: any): void;
} & Omit<ComonType, "onSelectImage">;

const ProfileImages: React.FC<ProfileImagesProps> = ({
    isEdit = false,
    onImageCoverSelect,
    onImageProfileSelect,
    ...props
}) => {
    return (
        <View>
            <ProfileCover onSelectImage={onImageCoverSelect} isEdit={isEdit} />
            <ProfileUser
                onSelectImage={onImageProfileSelect}
                isEdit={isEdit}
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
