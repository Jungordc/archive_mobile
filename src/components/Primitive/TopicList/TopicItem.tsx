/** @format */

import { View, Text, Pressable } from "native-base";
import { InterfaceViewProps } from "native-base/src/components/basic/View/types";
import { InterfacePressableProps } from "native-base/src/components/primitives/Pressable/types";
import React from "react";

type TopicItemProps = {
    title: string;
} & InterfacePressableProps;

const TopicItem: React.FC<TopicItemProps> = ({ title, ...props }) => {
    return (
        <Pressable borderRadius="3xl" px="5" p="2" m={1} {...props}>
            <Text color={props.color}>{title}</Text>
        </Pressable>
    );
};

TopicItem.displayName = "TopicItem";
export default TopicItem;
