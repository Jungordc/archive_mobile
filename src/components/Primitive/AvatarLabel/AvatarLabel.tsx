/** @format */

import React from "react";
import { HStack, Avatar, Text, VStack, IAvatarProps } from "native-base";
import { ImageSourcePropType } from "react-native";
import { InterfaceTextProps } from "native-base/lib/typescript/components/primitives/Text/types";
import { InterfaceHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";
import { InterfaceVStackProps } from "native-base/lib/typescript/components/primitives/Stack/VStack";
import ItemContainer from "../ItemContainer/ItemContainer";

export type AvatarLabelProps = {
    source?: ImageSourcePropType;
    title: string | React.ReactNode;
    subTitle?: string | React.ReactNode;
    titleProps?: InterfaceTextProps;
    subTitleProps?: InterfaceTextProps;
    avatarProps?: IAvatarProps;
    titleContainer?: InterfaceVStackProps;
    action?: React.ReactNode;
} & InterfaceHStackProps;

const AvatarLabel: React.FC<AvatarLabelProps> = ({
    source,
    title,
    subTitle,
    action,
    titleProps,
    subTitleProps,
    avatarProps,
    titleContainer,
    ...restProps
}) => {
    return (
        <ItemContainer
            alignItems="center"
            rootContainerProps={{
                alignItems: "center",
            }}
            title={title}
            subTitle={subTitle}
            titleProps={titleProps}
            subTitleProps={subTitleProps}
            mainProps={{ ml: "4", ...titleContainer }}
            avatar={<Avatar size="sm" {...avatarProps} source={source} />}
            actions={action}
            {...restProps}
        />
    );

    return (
        <HStack alignItems="center" {...restProps}>
            {source && <Avatar size="sm" {...avatarProps} source={source} />}
            <VStack justifyContent="center" ml={2} {...titleContainer}>
                <Text fontSize="xs" {...titleProps} color="blueGray.900">
                    {title}
                </Text>
                {subTitle && (
                    <Text fontSize="2xs" color="gray.600" {...subTitleProps}>
                        {subTitle}
                    </Text>
                )}
            </VStack>
        </HStack>
    );
};

AvatarLabel.displayName = "AvatarLabel";
export default AvatarLabel;
