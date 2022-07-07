/** @format */

import {
    Button,
    IButtonProps,
} from "native-base/src/components/primitives/Button";
import React from "react";

export type ChangeAuthorProps = {} & IButtonProps;

const ChangeAuthor: React.FC<ChangeAuthorProps> = (props) => {
    return (
        <Button variant="link" colorScheme="green" {...props}>
            Change l'autheur
        </Button>
    );
};

export default ChangeAuthor;
