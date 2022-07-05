/** @format */

import React from "react";
import Animated from "react-native-reanimated";
import HStack, {
    IHStackProps,
} from "native-base/src/components/primitives/Stack/HStack";
import Heading, {
    IHeadingProps,
} from "native-base/src/components/primitives/Heading";
import IconButton, {
    IconButtonProps,
} from "../../Primitive/IconButton/IconButton";

const AHeading = Animated.createAnimatedComponent(Heading);

export type HeaderProps = {
    title?: string;
    titleProps?: IHeadingProps;
    iconButtonProps?: IconButtonProps;
    showBtn?: boolean;
} & IHStackProps;

const Header: React.FC<HeaderProps> = ({
    title = "Archive",
    titleProps,
    iconButtonProps,
    showBtn,
    ...props
}) => {
    return (
        <HStack
            mt="7"
            mb="2"
            justifyContent="space-between"
            alignItems="center"
            p="4"
            {...props}
        >
            <AHeading fontSize="xl" color="coolGray.700" {...titleProps}>
                {title}
            </AHeading>
            {showBtn && (
                <IconButton
                    borderColor="coolGray.200"
                    tintColor="coolGray.200"
                    colorScheme="coolGray"
                    variant="outline"
                    borderRadius="full"
                    size="sm"
                    iconName="compass"
                    {...iconButtonProps}
                />
            )}
        </HStack>
    );
};

export default Header;
