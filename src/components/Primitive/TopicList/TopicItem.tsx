/** @format */

import React from "react";
import { Button } from "native-base";
import { IButtonProps } from "native-base/lib/typescript/components/primitives/Button/types";

type TopicItemProps = {
    title: string;
} & IButtonProps;

const TopicItem: React.FC<TopicItemProps> = ({ title, ...props }) => {
    return (
        <Button borderRadius="3xl" px="5" p="2" m={1} {...props}>
            {title}
        </Button>
    );
};

TopicItem.displayName = "TopicItem";
export default TopicItem;
