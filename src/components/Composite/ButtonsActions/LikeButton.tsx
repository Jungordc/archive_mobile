/** @format */

import React from "react";
import IconButton, {
    IconButtonProps,
    IconNames,
} from "../../Primitive/IconButton/IconButton";

export type LikeButtonProps = {
    liked?: boolean;
    likedIconName?: IconNames;
    unLikedIconName?: IconNames;
} & IconButtonProps;

const LikeButton: React.FC<LikeButtonProps> = ({
    liked,
    likedIconName = "heart",
    unLikedIconName = "heart-outline",
    ...props
}) => {
    return (
        <IconButton
            iconName={liked ? likedIconName : unLikedIconName}
            {...props}
        />
    );
};

export default LikeButton;
