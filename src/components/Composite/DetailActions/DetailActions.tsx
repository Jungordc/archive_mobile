/**
 *  like, share, save, vue
 * @format */

import React from "react";
import { Icon, HStack } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { IconButton } from "../../Primitive/IconButton/IconButton";
import { InterfaceHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";

export type DetailActions = {} & InterfaceHStackProps;
const DetailActions: React.FC<DetailActions> = ({ ...vstackProps }) => {
    return (
        <HStack flex={1} p={1} space={2} {...vstackProps}>
            <IconButton icon={<Icon as={Ionicons} name="thumbs-up-sharp" />} />
            <IconButton icon={<Icon as={Ionicons} name="eye-sharp" />} />
            <IconButton icon={<Icon as={Ionicons} name="ios-save-sharp" />} />
            <IconButton
                icon={<Icon as={Ionicons} name="md-arrow-redo-sharp" />}
            />
        </HStack>
    );
};

export default DetailActions;
