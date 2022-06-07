/** @format */

import React from "react";
import { ChildrenToArray } from "../Utils/ChildrenToArray";
import HStack, {
    IHStackProps,
} from "native-base/src/components/primitives/Stack/HStack";
import Dot, { DotProps } from "../Dot/Dot";

export type TextDotSeparatorProps = {
    DotComponent?: React.ReactNode;
    dotProps?: DotProps;
    showDot?: boolean;
} & IHStackProps;
const TextDotSeparator: React.FC<TextDotSeparatorProps> = ({
    children,
    dotProps,
    DotComponent,
    showDot = true,
    ...props
}) => {
    const childrenComponentArray = ChildrenToArray(children);
    const childrenLenght = childrenComponentArray.length;
    // dot component
    const InnerDotcomponent: any = DotComponent ? (
        DotComponent
    ) : (
        <Dot mt="1" {...dotProps} />
    );
    return (
        <HStack space={2} alignItems="center" {...props}>
            {childrenComponentArray.map((child: any, index) => {
                return (
                    <React.Fragment key={index}>
                        {React.cloneElement(child, {
                            key: `text${index}`,
                        })}
                        {index !== childrenLenght - 1 &&
                            showDot &&
                            React.cloneElement(InnerDotcomponent, {
                                key: `dot${index}`,
                            })}
                    </React.Fragment>
                );
            })}
        </HStack>
    );
};

TextDotSeparator.displayName = "TextDotSeparator";
export default TextDotSeparator;
