/**
 *  like, share, save, vue
 * @format */

import React from "react";
import { Icon, VStack } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InterfaceVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";
import { IconButton } from "../../Primitive/IconButton/IconButton";

export type DetailActions = {} & InterfaceVStackProps;
const DetailActions: React.FC<DetailActions> = ({ ...vstackProps }) => {
    return (
        <VStack p={1} space={2} {...vstackProps}>
            <IconButton icon={<Icon as={Ionicons} name="thumbs-up-sharp" />} />
            <IconButton icon={<Icon as={Ionicons} name="eye-sharp" />} />
            <IconButton icon={<Icon as={Ionicons} name="ios-save-sharp" />} />
            <IconButton
                icon={<Icon as={Ionicons} name="md-arrow-redo-sharp" />}
            />
        </VStack>
    );
};

export default DetailActions;
