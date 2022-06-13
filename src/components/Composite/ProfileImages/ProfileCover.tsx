/** @format */

import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, Image, Icon } from "native-base";
import React from "react";
import { uri } from "../../../utils/uri";
import IconButton from "../../Primitive/IconButton/IconButton";
import ConnectToPicker from "./ConnectToPicker";
import { ComonType } from "./types";

export type ProfileCoverProps = {} & ComonType;

const IconButtonConnected = ConnectToPicker(IconButton);

const ProfileCover: React.FC<ProfileCoverProps> = ({
    onSelectImage,
    isEdit,
    ...props
}) => {
    return (
        <View h={200} bg="coolGray.500">
            <Image alt="Image Cover" h="100%" source={uri} />
            {isEdit && (
                <IconButtonConnected
                    onSelectImage={onSelectImage}
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
                />
            )}
        </View>
    );
};

ProfileCover.displayName = "ProfileCover";
export default ProfileCover;
