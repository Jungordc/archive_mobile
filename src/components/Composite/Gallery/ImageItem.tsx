/** @format */

import React from "react";
import { Image, IImageProps, Pressable, View } from "native-base";
import { observer } from "mobx-react-lite";
import Icon from "../../Primitive/Icons/Icon";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from "react-native-reanimated";

const APressable = Animated.createAnimatedComponent(Pressable);

type ImageItemProps = {
    onPress?(): void;
    selected?: boolean;
} & IImageProps;

const ImageItem: React.FC<ImageItemProps> = ({
    selected = false,
    onPress,
    ...props
}) => {
    const scale = useSharedValue(1);

    const styles = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    return (
        <APressable
            style={styles}
            position="relative"
            onPressIn={() => {
                scale.value = withSpring(0.9);
            }}
            onPressOut={() => {
                scale.value = withSpring(1);
            }}
            m="0.5"
            flex={1}
            onPress={onPress}
        >
            {selected && (
                <View
                    zIndex={1}
                    h="10"
                    w="10"
                    bg="green.500"
                    rounded="full"
                    position="absolute"
                    borderColor="white"
                    borderWidth="4"
                    right={-5}
                    top={-2}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Icon color="white" iconName="checkmark-sharp" size="lg" />
                </View>
            )}

            <Image rounded="lg" height="32" width="32" {...props} />
        </APressable>
    );
};

export const OImageItem = observer(ImageItem);
export default ImageItem;
