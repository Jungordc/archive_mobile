/** @format */

import {
    Platform,
    Animated,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from "react-native";
import React from "react";
import ViewPager, { PagerViewProps } from "react-native-pager-view";

const AnimatedViewPagerAndroid =
    Platform.OS === "android"
        ? Animated.createAnimatedComponent(ViewPager)
        : undefined;

export interface ScrollableContentProps {
    scrollableContentAndroidStyle?: PagerViewProps["style"];
    childrenLenght?: number;
    containerWidth: any;
    children: React.ReactNode;
    initialPage?: number;
    locked: boolean;
    positionAndroid: any;
    offsetAndroid: any;
    scrollXIOS: any;
    contentProps: any;
    onScroll(e: NativeSyntheticEvent<unknown>): void;
    onPageSelected?(e?: any): void;
    onMomentumScrollBeginAndEnd?(
        event: NativeSyntheticEvent<NativeScrollEvent>
    ): void;
}

const ScrollableContent = React.forwardRef<any, ScrollableContentProps>(
    (
        {
            initialPage = 0,
            locked,
            scrollableContentAndroidStyle,
            childrenLenght,
            onPageSelected,
            onMomentumScrollBeginAndEnd,
            onScroll,
            containerWidth,
            children,
            ...props
        },
        ref
    ) => {
        if (Platform.OS === "android" && AnimatedViewPagerAndroid) {
            return (
                <AnimatedViewPagerAndroid
                    key={childrenLenght}
                    style={scrollableContentAndroidStyle}
                    initialPage={initialPage}
                    onPageSelected={onPageSelected}
                    keyboardDismissMode="on-drag"
                    scrollEnabled={!locked}
                    onPageScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    position: props.positionAndroid,
                                    offset: props.offsetAndroid,
                                },
                            },
                        ],
                        {
                            useNativeDriver: true,
                            listener: onScroll,
                        }
                    )}
                    ref={ref}
                    {...props.contentProps}
                >
                    {children}
                </AnimatedViewPagerAndroid>
            );
        }

        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                automaticallyAdjustContentInsets={false}
                contentOffset={{
                    x: initialPage * containerWidth,
                }}
                ref={ref}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: { x: props.scrollXIOS },
                            },
                        },
                    ],
                    { useNativeDriver: true, listener: onScroll }
                )}
                onMomentumScrollBegin={onMomentumScrollBeginAndEnd}
                onMomentumScrollEnd={onMomentumScrollBeginAndEnd}
                scrollEventThrottle={16}
                scrollsToTop={false}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={!locked}
                directionalLockEnabled
                alwaysBounceVertical={false}
                keyboardDismissMode="on-drag"
                {...props.contentProps}
            >
                {children}
            </Animated.ScrollView>
        );
    }
);

export default ScrollableContent;
