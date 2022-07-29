/** @format */

import { View } from "native-base";
import { PlatformPressable } from "@react-navigation/elements";
import React from "react";
import HeaderNavbar from "../../components/Primitive/HeaderNavBar/HeaderNavbar";
import { HStack } from "native-base/src/components/primitives/Stack";
import Animated from "react-native-reanimated";
import { ViewStyle } from "react-native";
import Heading from "native-base/src/components/primitives/Heading";
import MoreButtonBottomSheet from "../../containers/Actions/MoreButtonBottomSheet";
import SubButtonContainer from "../../containers/Actions/SubButtonContainer";
import Icon from "../../components/Primitive/Icons/Icon";

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
                        <PlatformPressable
                            onPress={goBack}
                            style={{
                                padding: 10,
                                borderRadius: 100,
                            }}
                        >
                            <Icon
                                color="black"
                                iconName="arrow-back"
                                size="md"
                            />
                        </PlatformPressable>
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
