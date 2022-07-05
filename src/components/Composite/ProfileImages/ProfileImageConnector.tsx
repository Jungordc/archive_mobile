/** @format */

import React from "react";
import usePickImage, { TypeImage } from "../../../hooks/pickers/usePickImage";
import ProfileImages, { ProfileImagesProps } from "./ProfileImages";

type ProfileImageConnectorProps = {
    onChangeCover?(image: TypeImage): void;
    initialCover?: TypeImage;
    onChangeAvatar?(image: TypeImage): void;
    initialAvatar?: TypeImage;
} & ProfileImagesProps;

const ProfileImageConnector: React.FC<ProfileImageConnectorProps> = ({
    profileAvatarProps,
    profileCoverProps,
    initialCover,
    initialAvatar,
    onChangeCover,
    onChangeAvatar,
    ...props
}) => {
    const { onpenSelectorImage: handlerSelectCover, source: cover } =
        usePickImage({
            onSelectImage: onChangeCover,
            initialSource: initialCover,
        });

    const { onpenSelectorImage: handlerSelectAvatar, source: avatar } =
        usePickImage({
            onSelectImage: onChangeAvatar,
            initialSource: initialAvatar,
            aspect: [4, 4],
        });

    return (
        <ProfileImages
            profileCoverProps={{
                source: cover,
                onSelectProfile: handlerSelectCover,
                ...profileCoverProps,
            }}
            profileAvatarProps={{
                source: avatar,
                onSelectProfile: handlerSelectAvatar,
                ...profileAvatarProps,
            }}
            {...props}
        />
    );
};

export default ProfileImageConnector;
