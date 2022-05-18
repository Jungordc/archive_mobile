/** @format */

import React from "react";
import { Box, Icon, Image, Text } from "native-base";
import { uri } from "../../../utils/uri";
import IconButton from "../../Primitive/IconButton/IconButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InterfaceBoxProps } from "native-base/lib/typescript/components/primitives/Box";

export type ImageViewInputProps = {
    onClose?(): void;
} & InterfaceBoxProps<null>;
const ImageViewInput: React.FC<ImageViewInputProps> = ({
    onClose,
    ...props
}) => {
    return (
        <Box
            h={210}
            w={150}
            m={2}
            borderRadius="lg"
            overflow="hidden"
            {...props}
        >
            <IconButton
                size="md"
                icon={<Icon as={Ionicons} name="close-sharp" />}
                _icon={{
                    color: "coolGray.100",
                }}
                bg="coolGray.800"
                position="absolute"
                zIndex={1}
                top={2}
                right={2}
                onPress={onClose}
            />
            <Image alt="img" flex={1} source={uri} borderRadius="lg" />
            <Box
                bg="coolGray.800"
                position="absolute"
                bottom={2}
                left={2}
                p={1}
                borderRadius="full"
                px={2}
            >
                <Text color="coolGray.300" fontSize="2xs">
                    Type
                </Text>
            </Box>
        </Box>
    );
};

export default ImageViewInput;
