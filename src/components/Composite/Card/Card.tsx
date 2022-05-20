/** @format */

import React from "react";
import { Box, Image, Text, Pressable } from "native-base";
import AvatarLabel from "../../Primitive/AvatarLabel/AvatarLabel";
import CardAction from "../CardAction/CardAction";
import { InterfaceBoxProps } from "native-base/lib/typescript/components/primitives/Box/types";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { uri } from "../../../utils/uri";

export type CardProps = {
    onPress?(event: GestureResponderEvent): void;
} & InterfaceBoxProps;

const Card: React.FC<CardProps> = ({ onPress, ...boxProps }) => {
    return (
        <Box flex={1} borderRadius="sm" bg="white" {...boxProps}>
            <Pressable flex={1} onPress={onPress}>
                <Box mb={2} p={2}>
                    <AvatarLabel
                        source={uri}
                        title="Archive user"
                        subTitle="3o min environs"
                    />
                </Box>
                <Box flex={1} w="100%" h={150}>
                    <Image alt="img" source={uri} h={150} w="100%" />
                </Box>
                <Box p={2} flex={1} mt={2}>
                    <Text numberOfLines={1} fontSize="xs" fontWeight="bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                    <Text numberOfLines={3} fontSize="2xs" color="gray.800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat, veniam? Quod doloremque quas quos totam vitae
                        explicabo, itaque minus sint praesentium, dolores
                        tenetur eius. In iusto rem corporis voluptatem suscipit?
                    </Text>
                </Box>
                <CardAction
                    p={2}
                    actions={[
                        {
                            label: "23",
                            icon: "md-heart",
                        },
                        {
                            label: "20",
                            icon: "eye",
                        },
                        {
                            label: "200",
                            icon: "chatbox",
                        },
                    ]}
                />
            </Pressable>
        </Box>
    );
};

export default Card;
