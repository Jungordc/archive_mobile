/** @format */

import React from "react";
import {
    View,
    Text,
    Animated,
    ViewStyle,
    TextStyle,
    StyleSheet,
    Platform,
    Dimensions,
    LayoutChangeEvent,
    ScrollView,
    NativeSyntheticEvent,
    NativeScrollEvent,
    ViewProps,
} from "react-native";
import DefaultTabBar, { DefaultTabBarProps } from "./components/DefaultTabBar";
import Scene from "./components/Scene";
import ViewPager from "react-native-pager-view";
import { createPager } from "./Utility";
import TabBarRenderContainer from "./components/TabBarRenderContainer";
import ScrollableContent from "./components/ScrollableContent";

// const TimerMixin = require("react-timer-mixin");

const AnimatedViewPagerAndroid =
    Platform.OS === "android"
        ? Animated.createAnimatedComponent(ViewPager)
        : undefined;

const ViewTabPager = createPager(View);

export interface ScrollableTabViewProps extends ViewProps {
    tabBarPosition?: "top" | "bottom" | "overlayTop" | "overlayBottom";
    initialPage?: number;
    page?: number;
    onChangeTab?(e: any): void;
    onScroll?(offset: any): void;
    renderTabBar?: () => React.ReactNode;
    tabBarUnderlineStyle?: ViewStyle;
    tabBarBackgroundColor: string;
    tabBarActiveTextColor: string;
    tabBarInactiveTextColor: string;
    tabBarTextStyle?: TextStyle;
    contentProps?: any;
    scrollWithoutAnimation?: boolean;
    locked?: boolean;
    prerenderingSiblingsNumber?: number;
}

const ScrollableTabView: React.FC<ScrollableTabViewProps> = ({
    tabBarPosition = "top",
    initialPage = 0,
    page = -1,
    scrollWithoutAnimation = false,
    locked = false,
    prerenderingSiblingsNumber = 0,

    ...props
}) => {
    // refs
    const scrollViewRef = React.useRef<ScrollView>(null).current;
    const [state, setState] = React.useState<any>(undefined);

    //
    const _children = React.useCallback((children = props.children) => {
        return React.Children.map(children, (child) => child);
    }, []);

    const _polyfillAnimatedValue = React.useCallback(
        (animatedValue: Animated.AnimatedDivision) => {
            const listeners = new Set();
            const addListener = (listener: any) => {
                listeners.add(listener);
                return "";
            };

            const removeListener = (listener: string) => {
                listeners.delete(listener);
            };

            const removeAllListeners = () => {
                listeners.clear();
            };

            animatedValue.addListener = addListener;
            animatedValue.removeListener = removeListener;
            animatedValue.removeAllListeners = removeAllListeners;

            return (value: any) =>
                listeners.forEach((listener: any) => listener({ value }));
        },
        []
    );

    //
    const _makeSceneKey = React.useCallback((child, idx) => {
        return child.props.tabLabel + "_" + idx;
    }, []);

    const _keyExists = React.useCallback((sceneKeys, key) => {
        return sceneKeys.find((sceneKey: any) => key === sceneKey);
    }, []);

    const _shouldRenderSceneKey = React.useCallback((idx, currentPageKey) => {
        const numOfSibling = prerenderingSiblingsNumber;
        return (
            idx < currentPageKey + numOfSibling + 1 &&
            idx > currentPageKey - numOfSibling - 1
        );
    }, []);

    const _updateSelectedPage = React.useCallback(
        (nextPage) => {
            let localNextPage = nextPage;
            if (typeof localNextPage === "object") {
                localNextPage = nextPage.nativeEvent.position;
            }

            const currentPage = state.currentPage;
            !tabWillChangeWithoutGesture &&
                updateSceneKeys({
                    page: localNextPage,
                    callback: () => {
                        _onChangeTab(currentPage, localNextPage);
                    },
                });
            tabWillChangeWithoutGesture = false;
        },
        [state.currentPage]
    );

    const _onChangeTab = React.useCallback(
        (prevPage: any, currentPage: any) => {
            props.onChangeTab?.({
                i: currentPage,
                ref: _children()[currentPage],
                from: prevPage,
            });
        },
        []
    );

    const _onScroll = React.useCallback(
        (e: NativeSyntheticEvent<NativeScrollEvent>) => {
            if (Platform.OS === "ios") {
                const offsetX = e.nativeEvent.contentOffset.x;
                if (offsetX === 0 && !scrollOnMountCalled) {
                    scrollOnMountCalled = true;
                } else {
                    props?.onScroll?.(offsetX / state.containerWidth);
                }
            } else {
                const { position, offset } = e.nativeEvent;
                props?.onScroll?.(position + offset);
            }
        },
        [props.onScroll]
    );

    const _handleLayout = React.useCallback(
        ({
            nativeEvent: {
                layout: { width },
            },
        }: LayoutChangeEvent) => {
            if (
                !width ||
                width <= 0 ||
                Math.round(width) === Math.round(state.containerWidth)
            ) {
                return;
            }

            if (Platform.OS === "ios") {
                const containerWidthAnimatedValue = new Animated.Value(width);
                const scrollValue = Animated.divide(
                    state.scrollXIOS,
                    containerWidthAnimatedValue
                );
                setState({ containerWidth: width, scrollValue });
            } else {
                setState({ containerWidth: width });
            }
            // TODO: change here...
            this.requestAnimationFrame(() => {
                goToPage(state.currentPage);
            });
        },
        []
    );

    const newSceneKeys = React.useCallback(
        ({
            children = props.children,
            currentPage = 0,
            previousKeys = [],
        }: {
            previousKeys?: any[];
            currentPage?: number;
            children?: any;
        }) => {
            let newKeys: any[] = [];
            _children(children).forEach((child: any, idx: any) => {
                let key = _makeSceneKey(child, idx);
                if (
                    _keyExists(previousKeys, key) ||
                    _shouldRenderSceneKey(idx, currentPage)
                ) {
                    newKeys.push(key);
                }
            });
            return newKeys;
        },
        []
    );

    const updateSceneKeys = React.useCallback(
        ({
            page,
            children = props.children,
            callback = () => {},
        }: {
            page: any;
            children?: any;
            callback?(): void;
        }) => {
            let newKeys = newSceneKeys({
                previousKeys: state.sceneKeys,
                currentPage: page,
                children,
            });
            setState({ currentPage: page, sceneKeys: newKeys });
            callback?.();
        },
        []
    );

    const goToPage = React.useCallback((pageNumber: number) => {
        if (Platform.OS === "ios") {
            const offset = pageNumber * state.containerWidth;
            if (scrollViewRef) {
                scrollViewRef.scrollTo({
                    x: offset,
                    y: 0,
                    animated: !scrollWithoutAnimation,
                });
            }
        } else {
            if (scrollViewRef) {
                const tabWillChangeWithoutGesture = true;
                if (scrollWithoutAnimation) {
                    scrollViewRef.setPageWithoutAnimation(pageNumber);
                } else {
                    scrollViewRef.setPage(pageNumber);
                }
            }
        }

        const currentPage = state.currentPage;
        updateSceneKeys({
            page: pageNumber,
            callback: () => {
                _onChangeTab(currentPage, pageNumber);
            },
        });
    }, []);

    const _onMomentumScrollBeginAndEnd = React.useCallback(
        (e: NativeSyntheticEvent<NativeScrollEvent>) => {
            const offsetX = e.nativeEvent.contentOffset.x;
            const page = Math.round(offsetX / state.containerWidth);
            if (state.currentPage !== page) {
                _updateSelectedPage(page);
            }
        },
        [state.containerWidth, state.currentPage]
    );

    const _composeScenes = () => {
        return _children().map((child: any, idx: number) => {
            let key = _makeSceneKey(child, idx);
            return (
                <Scene
                    key={child.key}
                    shouldUpdated={_shouldRenderSceneKey(
                        idx,
                        state.currentPage
                    )}
                    style={{ width: state.containerWidth }}
                >
                    {_keyExists(state.sceneKeys, key) ? (
                        child
                    ) : (
                        <ViewTabPager tabLabel={child.props.tabLabel} />
                    )}
                </Scene>
            );
        });
    };

    React.useEffect(() => {
        updateSceneKeys({
            page: state.currentPage,
            children: props.children,
        });

        if (page >= 0 && page !== state.currentPage) {
            goToPage(page);
        }
    }, [props.children, state.currentPage]);

    //
    React.useEffect(() => {
        const containerWidth = Dimensions.get("window").width;
        let scrollValue;
        let scrollXIOS;
        let positionAndroid;
        let offsetAndroid;

        if (Platform.OS === "ios") {
            scrollXIOS = new Animated.Value(initialPage * containerWidth);
            const containerWidthAnimatedValue = new Animated.Value(
                containerWidth
            );

            scrollValue = Animated.divide(
                scrollXIOS,
                containerWidthAnimatedValue
            );

            const callListeners = _polyfillAnimatedValue(scrollValue);
            scrollXIOS.addListener(({ value }) =>
                callListeners(value / state.containerWidth)
            );
        } else {
            positionAndroid = new Animated.Value(initialPage);
            offsetAndroid = new Animated.Value(0);
            scrollValue = Animated.add(positionAndroid, offsetAndroid);

            const callListeners = _polyfillAnimatedValue(scrollValue);
            let positionAndroidValue = initialPage;
            let offsetAndroidValue = 0;
            positionAndroid.addListener(({ value }) => {
                positionAndroidValue = value;
                callListeners(positionAndroidValue + offsetAndroidValue);
            });
            offsetAndroid.addListener(({ value }) => {
                offsetAndroidValue = value;
                callListeners(positionAndroidValue + offsetAndroidValue);
            });
        }

        setState({
            currentPage: initialPage,
            scrollValue,
            scrollXIOS,
            positionAndroid,
            offsetAndroid,
            containerWidth,
            sceneKeys: newSceneKeys({
                currentPage: initialPage,
            }),
        });
        return () => {
            if (Platform.OS === "ios") {
                state.scrollXIOS.removeAllListeners();
            } else {
                state.positionAndroid.removeAllListeners();
                state.offsetAndroid.removeAllListeners();
            }
        };
    }, []);

    const tabBarProps: DefaultTabBarProps = React.useMemo(
        () => ({
            goToPage: goToPage,
            tabs: _children().map((child: any) => child.props.tabLabel),
            activeTab: state.currentPage,
            scrollValue: state.scrollValue,
            containerWidth: state.containerWidth,
        }),
        [state.currentPage, state.scrollValue, state.containerWidth]
    );

    return (
        <View
            style={[
                styles.container,
                ...(Array.isArray(props.style) ? props.style : [props.style]),
            ]}
            onLayout={_handleLayout}
        >
            <TabBarRenderContainer {...tabBarProps}>
                <ScrollableContent
                    ref={null}
                    containerWidth={state.containerWidth}
                    locked={locked}
                    positionAndroid={state.positionAndroid}
                    offsetAndroid={state.offsetAndroid}
                    scrollXIOS={state.scrollXIOS}
                    contentProps={props.contentProps}
                    onScroll={_onScroll}
                    onMomentumScrollBeginAndEnd={_onMomentumScrollBeginAndEnd}
                >
                    <>{_composeScenes()}</>
                </ScrollableContent>
            </TabBarRenderContainer>
        </View>
    );
};

export default ScrollableTabView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollableContentAndroid: {
        flex: 1,
    },
});
