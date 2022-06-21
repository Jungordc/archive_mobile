/** @format */

import { StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icon, IIconProps } from "native-base/src/components/primitives/Icon";
import { IconNames } from "../../Primitive/IconButton/IconButton";
import { useTheme } from "native-base/src/hooks";

export type IconButtonBottomSheetsProps = {
    iconName?: IconNames;
    iconProps?: IIconProps;
    onPress?(): void;
};
const IconButtonBottomSheets: React.FC<IconButtonBottomSheetsProps> = ({
    iconName = "link-outline",
    iconProps,
    onPress,
}) => {
    const theme = useTheme();
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.container,
                {
                    backgroundColor: theme.colors.coolGray[200],
                    borderRadius: theme.radii.full,
                },
            ]}
        >
            <Icon size="lg" as={Ionicons} name={iconName} {...iconProps} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
export default IconButtonBottomSheets;
