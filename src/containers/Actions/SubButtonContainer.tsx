/** @format */

import React from "react";
import SubButton from "../../components/Composite/ButtonsActions/SubButton";

export type SubButtonContainerProps = {};
const SubButtonContainer: React.FC<SubButtonContainerProps> = ({
    ...props
}) => {
    const [subscribed, setSubscribed] = React.useState<boolean>(false);

    const onSubcribe = React.useCallback(() => {
        setSubscribed((state) => !state);
    }, []);

    return <SubButton subscribed={subscribed} onPress={onSubcribe} />;
};

export default SubButtonContainer;
