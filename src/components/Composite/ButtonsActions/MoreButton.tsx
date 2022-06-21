/** @format */

import React from "react";
import IconButton, {
    IconButtonProps,
} from "../../Primitive/IconButton/IconButton";

export type MoreButtonProps = {} & IconButtonProps;

const MoreButton: React.FC<MoreButtonProps> = ({
    iconName = "ellipsis-vertical",
    ...props
}) => {
    return <IconButton iconName={iconName} {...props} />;
};

export default MoreButton;
