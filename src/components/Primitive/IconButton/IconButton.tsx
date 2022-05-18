/** @format */

import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { Box, Icon, IconButton as NIconButton } from "native-base";
import * as NavigationBar from "expo-navigation-bar";
import { InterfaceIconButtonProps } from "native-base/lib/typescript/components/composites/IconButton/types";

export type IconButtonProps = {
    onPress?(): void;
} & InterfaceIconButtonProps;

export const IconButton: React.FC<IconButtonProps> = ({
    onPress,
    ...restProps
}) => {
    return (
        <Box alignItems="center">
            <NIconButton
                onPress={onPress}
                size="lg"
                icon={<Icon as={Entypo} name="emoji-happy" />}
                borderRadius="full"
                _icon={{
                    color: "coolGray.900",
                    size: "2xl",
                }}
                _hover={{
                    bg: "orange.600:alpha.20",
                }}
                _pressed={{
                    bg: "orange.600:alpha.20",
                    _ios: {
                        _icon: {
                            size: "2xl",
                        },
                    },
                }}
                _ios={{
                    _icon: {
                        size: "2xl",
                    },
                }}
                {...restProps}
            />
        </Box>
    );
};

export default IconButton;
