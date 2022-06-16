/** @format */

import React from "react";
import { View } from "native-base/src/components/basic/View";
import BaseImageProfile, { BaseImageProfileProps } from "./BaseImageProfile";
import Image from "../../../../packages/image-container-plus/components/Image";

export type ProfileCoverProps = {} & BaseImageProfileProps;

const ProfileCover: React.FC<ProfileCoverProps> = ({ source, ...props }) => {
    return (
        <BaseImageProfile
            buttonEditProfileProps={{
                bgColor: "rgba(255,255,255,0.5)",
                position: "absolute",
                right: "5",
                bottom: "3",
            }}
            {...props}
        >
            <View flex={1} h={200}>
                <Image borderRadius="none" source={source} />
            </View>
        </BaseImageProfile>
    );
};

ProfileCover.displayName = "ProfileCover";
export default ProfileCover;
