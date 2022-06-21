/** @format */

import React from "react";
import IconButton, {
    IconButtonProps,
} from "../../Primitive/IconButton/IconButton";

export type CommentButtonProps = {} & IconButtonProps;

const CommentButton: React.FC<CommentButtonProps> = ({
    iconName = "chatbubble-outline",
    ...props
}) => {
    return <IconButton iconName={iconName} {...props} />;
};

export default CommentButton;
