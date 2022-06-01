/** @format */

import { View } from "react-native";
import React from "react";
import HStack, {
    IHStackProps,
} from "native-base/src/components/primitives/Stack/HStack";
import Text from "native-base/src/components/primitives/Text";
import Divider from "native-base/src/components/composites/Divider";

export type InputTitleUtilsUtilsProps = {
    placeholder?: string;
    value?: number;
    max?: number;
} & IHStackProps;

const InputTitleUtils: React.FC<InputTitleUtilsUtilsProps> = ({
    placeholder,
    value = 0,
    max,
    ...props
}) => {
    const isEdit = React.useMemo(() => value > 0, [value]);
    return (
        <HStack alignItems="center" flex={1} p={2} space={1} my={5} {...props}>
            <View
                style={{
                    height: 50,
                    width: 50,
                    borderRadius: 50,
                    alignItems: "center",
                    padding: 5,
                }}
            >
                <Text isTruncated color="coolGray.700">
                    {isEdit ? placeholder : ""}
                </Text>
                <Text
                    color="coolGray.500"
                    fontSize="2xs"
                >{`${value} /${max}`}</Text>
            </View>
            <Divider orientation="vertical" />
            {props.children}
        </HStack>
    );
};

export default InputTitleUtils;
