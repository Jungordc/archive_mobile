/** @format */

import React from "react";
import { Box, HStack } from "native-base";
import IconLabel, { IconLabelProps } from "../../Primitive/IconLabel/IconLabel";
import { InterfaceBoxProps } from "native-base/lib/typescript/components/primitives/Box/types";

export type CardActionProps = {
    actions?: IconLabelProps[];
} & InterfaceBoxProps;

const CardAction: React.FC<CardActionProps> = ({ actions, ...restProps }) => {
    return (
        <Box flex={1} {...restProps}>
            <HStack space={4}>
                {actions?.map((item, index) => (
                    <IconLabel key={index} {...item} />
                ))}

                {/* <IconLabel icon="chatbox-outline" label="2" />
                <IconLabel icon="md-arrow-redo-outline" label="400" /> */}
            </HStack>
        </Box>
    );
};

CardAction.displayName = "CardAction";
export default CardAction;
