/** @format */

import { StyleSheet, TouchableOpacityProps } from "react-native";
import Text from "native-base/src/components/primitives/Text";
import React from "react";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { useTheme } from "native-base/src/hooks";

export type ButtonBottomSheetsProps = {} & TouchableOpacityProps;
const ButtonBottomSheets: React.FC<ButtonBottomSheetsProps> = ({
    children,
    ...props
}) => {
    const theme = useTheme();
    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    backgroundColor: theme.colors.primary[500],
                    paddingHorizontal: theme.sizes[4],
                    paddingVertical: theme.sizes[2],
                    borderRadius: theme.radii.full,
                },
            ]}
            {...props}
        >
            <Text color="coolGray.50">{children}</Text>
        </TouchableOpacity>
    );
};

export default ButtonBottomSheets;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
});
