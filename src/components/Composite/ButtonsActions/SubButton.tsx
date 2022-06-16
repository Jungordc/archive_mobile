/** @format */

import React from "react";
import {
    Button,
    IButtonProps,
} from "native-base/src/components/primitives/Button";

export type SubButtonProps = {
    subscribed?: boolean;
} & IButtonProps;

const SubButton: React.FC<SubButtonProps> = ({ subscribed, ...props }) => {
    return (
        <Button
            colorScheme={subscribed ? "coolGray" : "green"}
            size="sm"
            borderRadius="full"
            {...props}
        >
            {subscribed ? "Se desabonner" : "S'abonner"}
        </Button>
    );
};

export default SubButton;
