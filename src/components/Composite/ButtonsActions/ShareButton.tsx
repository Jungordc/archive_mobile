/** @format */

import React from "react";
import IconButton, {
    IconButtonProps,
} from "../../Primitive/IconButton/IconButton";

export type ShareButtonProps = {} & IconButtonProps;

const ShareButton: React.FC<ShareButtonProps> = (props) => {
    return <IconButton iconName="share-outline" {...props} />;
};

export default ShareButton;
