/** @format */

import React from "react";
import { View } from "native-base/src/components/basic/View/";
import HStack, {
    IHStackProps,
} from "native-base/src/components/primitives/Stack/HStack";
import VStack, {
    IVStackProps,
} from "native-base/src/components/primitives/Stack/VStack";
import { InterfaceTextProps } from "native-base/src/components/primitives/Text/types";
import TextOrComponent from "../Utils/TextOrComponent";

export type ItemContainerProps = {
    avatar?: React.ReactNode;
    actions?: React.ReactNode;
    title?: string | React.ReactNode;
    subTitle?: string | React.ReactNode;
    titleProps?: InterfaceTextProps;
    subTitleProps?: InterfaceTextProps;
    mainProps?: IVStackProps;
    rootContainerProps?: IHStackProps;
} & IHStackProps;

const ItemContainer: React.FC<ItemContainerProps> = ({
    avatar,
    actions,
    title,
    subTitle,
    titleProps,
    subTitleProps,
    mainProps,
    rootContainerProps,
    ...props
}) => {
    // title container
    const innerTitle = TextOrComponent({
        component: title,
        textProps: titleProps,
    });

    // subtitle container
    const innerSubTitle = TextOrComponent({
        component: subTitle,
        textProps: subTitleProps,
    });
    return (
        <HStack justifyContent="space-between" alignItems="center" {...props}>
            <HStack {...rootContainerProps}>
                {avatar && <View>{avatar}</View>}
                <VStack {...mainProps}>
                    {innerTitle}
                    {innerSubTitle}
                </VStack>
            </HStack>
            {actions && <View>{actions}</View>}
        </HStack>
    );
};

ItemContainer.displayName = "IHStackProps";
export default ItemContainer;
