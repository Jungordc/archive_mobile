/** @format */

import React from "react";
import SubButton from "../../components/Composite/ButtonsActions/SubButton";

export type SubButtonContainerProps = {
    initialValue?: boolean;
};
const SubButtonContainer: React.FC<SubButtonContainerProps> = ({
    initialValue,
    ...props
}) => {
    const [subscribed, setSubscribed] = React.useState<boolean>(
        initialValue || false
    );

    const onSubcribe = React.useCallback(() => {
        setSubscribed((state) => !state);
    }, []);

    return <SubButton subscribed={subscribed} onPress={onSubcribe} />;
};

export default SubButtonContainer;
