/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    Text,
    Pressable,
    Dimensions,
    StatusBar as RNStatusBar,
    Image,
    View,
    ViewProps,
} from "react-native";
import {
    Gesture,
    GestureDetector,
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    PinchGestureHandler,
    PinchGestureHandlerGestureEvent,
    TapGestureHandler,
    TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { DEFAULT_SCALE_VALUE, TIME_OUT_DEFAULT } from "./constantes";
import { reducer, initialState, Actions } from "./state";
import { initializeNavigationBar } from "./status";
import { getStylesConvertedToArray } from "./utils";

const { height, width } = Dimensions.get("window");

type ViewerProps = {
    timeOut?: number;
};

const uri =
    "https://scontent.ffbm1-1.fna.fbcdn.net/v/t39.30808-6/297360086_2551317781668785_6373804017365185875_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFx-Rch_nSXi-EZLXhuxQx9KEqRliPQB6YoSpGWI9AHpnYT8eZzfqM8JBCcf_ytlzJDk9CTj5YeskFOPHLDAZeN&_nc_ohc=ekc-ekldX2sAX-L3yV2&_nc_zt=23&_nc_ht=scontent.ffbm1-1.fna&oh=00_AT_CS8X42gXq778GWgmJnateWejwAiec6jGZysuD9qE80Q&oe=62F2CEC9";

// const ImageReanimated = Animated.createAnimatedComponent(Image);

const AnimatedView: React.FC<ViewProps> = ({ style = {}, ...props }) => (
    <Animated.View style={[{ flex: 1 }]} {...props} />
);

export function isZoomed(value: number) {
    "worklet";
    return value !== DEFAULT_SCALE_VALUE;
}

const Viewer: React.FC<ViewerProps> = ({
    timeOut = TIME_OUT_DEFAULT,
    ...props
}) => {
    const [state, dispatch] = React.useReducer(reducer(timeOut), initialState);
    const scale = useSharedValue(1);
    const focalX = useSharedValue(0);
    const focalY = useSharedValue(0);

    const pinGestureHandker =
        useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
            onActive(event, context) {
                scale.value = event.scale;
                focalX.value = event.focalX;
                focalY.value = event.focalY;
                // console.log(event);
            },
            onEnd(event, context) {
                scale.value = withTiming(1);
            },
        });

    const doubleTapGestureHandler =
        useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
            onActive(event, context) {
                if (scale.value !== 1) {
                    focalX.value = 0;
                    focalY.value = 0;
                    scale.value = withTiming(1);
                } else {
                    focalX.value = event.x;
                    focalY.value = event.y;
                    scale.value = withTiming(2.5);
                }

                console.log(event);
            },
        });

    const panGestureHandler =
        useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
            onStart(event, context) {
                focalX.value = event.x - 20;
                focalY.value = event.y - 20;
                // console.log("onStart", event);
            },
            onActive(event, context) {
                focalX.value = event.x - 20;
                focalY.value = event.y - 20;
                // if (isZoomed(scale.value)) {
                //     focalX.value = event.translationX;
                //     focalY.value = -event.translationY;
                // }
                // console.log("onActive", event);
            },
            onEnd(event, context) {
                // focalX.value = event.x - 20;
                // focalY.value = event.y - 20;
                // console.log("onEnd", event);
            },
        });

    // const gesture = useAnimatedGestureHandler<GestureHandlerGestureEvent>({

    // })

    const RStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: focalX.value },
            { translateY: focalY.value },
            { translateX: -width / 2 },
            { translateY: -height / 2 },
            { scale: scale.value },
            { translateX: -focalX.value },
            { translateY: -focalY.value },
            { translateX: width / 2 },
            { translateY: height / 2 },
        ],
    }));

    const RFocalStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: focalX.value }, { translateY: focalY.value }],
    }));

    const onPressIn = React.useCallback(() => {
        dispatch(Actions.START_STOPING);

        console.log("Press In");
    }, []);

    const onPressOut = React.useCallback(() => {
        dispatch(Actions.END_STOPING);

        console.log("Press out");
    }, []);

    // toogle on hidden
    const onPress = React.useCallback(() => {
        dispatch(Actions.TOOGLE_STOPING);

        console.log("Press");
    }, []);

    // initialization
    React.useLayoutEffect(() => {
        initializeNavigationBar();
    }, []);

    React.useEffect(() => {
        const _timer = setInterval(() => {
            dispatch(Actions.TIMMER);
        }, 1 * 1000);

        return () => {
            clearInterval(_timer);
        };
    }, []);

    return (
        <React.Fragment>
            {/* <Pressable
                onPressIn={onPressIn}
                onPress={onPress}
                onPressOut={onPressOut}
                style={{
                    flex: 1,
                    // justifyContent: "center",
                    // alignItems: "center",
                    backgroundColor: "#000",
                }}
            > */}
            <View
                style={{
                    backgroundColor: "rgba(212,0,0,.8)",
                    flex: 1,
                }}
            >
                <PanGestureHandler onGestureEvent={panGestureHandler}>
                    <Animated.View style={[{ flex: 1 }]}>
                        <TapGestureHandler
                            numberOfTaps={2}
                            onGestureEvent={doubleTapGestureHandler}
                        >
                            <Animated.View style={[{ flex: 1 }]}>
                                <PinchGestureHandler
                                    onGestureEvent={pinGestureHandker}
                                >
                                    <Animated.View style={[{ flex: 1 }]}>
                                        <Animated.Image
                                            resizeMode="contain"
                                            source={{ uri }}
                                            style={[
                                                {
                                                    flex: 1,
                                                },
                                                RStyle,
                                            ]}
                                        />
                                        <Animated.View
                                            style={[
                                                {
                                                    position: "absolute",
                                                    height: 40,
                                                    width: 40,
                                                    borderRadius: 40,
                                                    backgroundColor: "blue",
                                                },
                                                RFocalStyle,
                                            ]}
                                        />
                                    </Animated.View>
                                </PinchGestureHandler>
                            </Animated.View>
                        </TapGestureHandler>
                    </Animated.View>
                </PanGestureHandler>
            </View>
            {/* <Text
                    style={{ fontSize: 50, color: "#fff", textAlign: "center" }}
                >
                    {JSON.stringify(state, null, 4)}
                </Text> */}
            {/* </Pressable> */}
        </React.Fragment>
    );
};

export default Viewer;
