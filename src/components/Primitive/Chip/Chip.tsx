/** @format */

import { View, Text } from "native-base";
import { InterfaceViewProps } from "native-base/lib/typescript/components/basic/View/types";
import { HStack } from "native-base/src/components/primitives/Stack";
import React from "react";
import IconButton, { IconButtonProps } from "../IconButton/IconButton";

export type ChipProps = {
    btnProps?: IconButtonProps;
    onDelete?(): void;
    deleted?: boolean;
} & InterfaceViewProps;

const Chip: React.FC<ChipProps> = ({
    children,
    btnProps,
    onDelete,
    deleted = true,
    ...props
}) => {
    return (
        <HStack
            bg="coolGray.100"
            alignItems="center"
            space="1"
            borderRadius="full"
            pl="2"
            pr="6"
            py="1"
            {...props}
        >
            <IconButton
                onPress={onDelete}
                size="sm"
                borderRadius="full"
                colorScheme="blueGray"
                iconName="close"
                iconProps={{
                    size: "sm",
                }}
                {...btnProps}
            />
            <Text color="coolGray.600">{children}</Text>
        </HStack>
    );
};

export default Chip;
