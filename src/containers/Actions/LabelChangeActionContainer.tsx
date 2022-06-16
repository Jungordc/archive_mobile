/** @format */

import React from "react";

export type LabelChangeActionContainerProps = {
    initialLabel: number;
    children: (params: {
        label: number;
        onChangeLabel: (toogle: boolean) => void;
    }) => React.ReactNode;
};

const LabelChangeActionContainer: React.FC<LabelChangeActionContainerProps> = ({
    children,
    initialLabel,
}) => {
    const [label, setLabel] = React.useState(initialLabel);
    const onChangeLabel = React.useCallback((toogle: boolean) => {
        setLabel((state) => {
            return toogle ? state + 1 : state - 1;
        });
    }, []);

    return (
        <>
            {children({
                label,
                onChangeLabel,
            })}
        </>
    );
};

export default LabelChangeActionContainer;
