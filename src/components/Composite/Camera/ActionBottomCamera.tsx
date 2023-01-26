/** @format */

import React from "react";
import { FlashMode } from "expo-camera";
import { View, Text, HStack, VStack, Pressable } from "native-base";
import { observer } from "mobx-react-lite";
import Reanimated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";
import IconButton from "../../Primitive/IconButton/IconButton";
import { getIconFlashMode } from "./Utils.Camera";

type ActionBottomCameraProps = {
    onChangeFlashMode?(): void;
    onTakePicture?(): void;
    onChangeCameraType?(): void;
    flashMode: FlashMode;
};

/**
 * observed Component...
 */
// const OText = observer(Text);
const OIconButton = observer(IconButton);
const APressable = Reanimated.createAnimatedComponent(Pressable);

const BTN_P_OUT = 60;
const BTN_P_IN = 70;

const ActionBottomCamera: React.FC<ActionBottomCameraProps> = ({
    flashMode,
    onChangeFlashMode,
    onChangeCameraType,
    onTakePicture,
    ...props
}) => {
    const btnScaleValue = useSharedValue(false);
    const btnStyle = useAnimatedStyle(() => {
        const _size = btnScaleValue.value
            ? withTiming(BTN_P_IN)
            : withTiming(BTN_P_OUT);
        return { height: _size, width: _size };
    });
    return (
        <View position="absolute" bottom={0} left={0} right={0} p="5">
            <HStack
                position="relative"
                justifyContent="space-between"
                alignItems="center"
            >
                <VStack justifyContent="center" alignItems="center">
                    <OIconButton
                        rounded="full"
                        iconName={getIconFlashMode(flashMode)}
                        variant="solid"
                        onPress={onChangeFlashMode}
                    />
                    <Text
                        fontSize="2xs"
                        color="white"
                        textTransform="uppercase"
                    >
                        {flashMode}
                    </Text>
                </VStack>
                <APressable
                    position="absolute"
                    left="40%"
                    style={btnStyle}
                    borderColor="white"
                    borderWidth="4"
                    rounded="full"
                    bg="primary.400"
                    onPress={onTakePicture}
                    onPressIn={() => (btnScaleValue.value = true)}
                    onPressOut={() => (btnScaleValue.value = false)}
                />
            </HStack>
        </View>
    );
};

export const ActionBottomCameraObserved = observer(ActionBottomCamera);
export default ActionBottomCamera;
