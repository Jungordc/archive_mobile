/** @format */

import { View } from "native-base";
import React from "react";
import HeaderNavbar from "../../components/Primitive/HeaderNavBar/HeaderNavbar";
import { HStack } from "native-base/src/components/primitives/Stack";
import IconButton from "../../components/Primitive/IconButton/IconButton";
import Animated from "react-native-reanimated";
import { ViewStyle } from "react-native";
import Heading from "native-base/src/components/primitives/Heading";
import MoreButtonBottomSheet from "../../containers/Actions/MoreButtonBottomSheet";
import SubButtonContainer from "../../containers/Actions/SubButtonContainer";

const AnimatedBox = Animated.createAnimatedComponent(View);

export type DetailHeaderProps = {
    goBack?(): void;
    animatedStyle?: ViewStyle;
};

const DetailHeader: React.FC<DetailHeaderProps> = ({
    goBack,
    animatedStyle,
}) => {
    return (
        <View>
            <HeaderNavbar
                backButton={
                    <HStack space={2} alignItems="center">
                        <IconButton
                            onPress={goBack}
                            fontVariant="small-caps"
                            colorScheme="coolGray"
                            iconName="ios-arrow-back-outline"
                        />
                        <AnimatedBox style={animatedStyle}>
                            <Heading fontSize="md" color="coolGray.700">
                                Lorem ipsum
                            </Heading>
                        </AnimatedBox>
                    </HStack>
                }
                rightHeader={
                    <AnimatedBox style={animatedStyle}>
                        <HStack space="3">
                            <SubButtonContainer />
                            <MoreButtonBottomSheet
                                btnProps={{
                                    iconName: "ellipsis-vertical",
                                }}
                            />
                        </HStack>
                    </AnimatedBox>
                }
            />
        </View>
    );
};

export default DetailHeader;
