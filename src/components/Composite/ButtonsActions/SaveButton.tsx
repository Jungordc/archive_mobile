/** @format */

import React from "react";
import IconButton, {
    IconButtonProps,
    IconNames,
} from "../../Primitive/IconButton/IconButton";

export type SaveButtonProps = {
    saved?: boolean;
    savedIconName?: IconNames;
    unSavedIconName?: IconNames;
} & IconButtonProps;

const SaveButton: React.FC<SaveButtonProps> = ({
    saved,
    savedIconName = "md-bookmark",
    unSavedIconName = "md-bookmark-outline",
    ...props
}) => {
    return (
        <IconButton
            iconName={saved ? savedIconName : unSavedIconName}
            {...props}
        />
    );
};

export default SaveButton;
