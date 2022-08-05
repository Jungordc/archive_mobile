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
} from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { TIME_OUT_DEFAULT } from "./constantes";
import { reducer, initialState, Actions } from "./state";
import { initializeNavigationBar } from "./status";

const { height, width } = Dimensions.get("window");

type ViewerProps = {
    timeOut?: number;
};

const uri =
    "https://scontent.ffbm1-1.fna.fbcdn.net/v/t39.30808-6/297360086_2551317781668785_6373804017365185875_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFx-Rch_nSXi-EZLXhuxQx9KEqRliPQB6YoSpGWI9AHpnYT8eZzfqM8JBCcf_ytlzJDk9CTj5YeskFOPHLDAZeN&_nc_ohc=ekc-ekldX2sAX-L3yV2&_nc_zt=23&_nc_ht=scontent.ffbm1-1.fna&oh=00_AT_CS8X42gXq778GWgmJnateWejwAiec6jGZysuD9qE80Q&oe=62F2CEC9";

const Viewer: React.FC<ViewerProps> = ({
    timeOut = TIME_OUT_DEFAULT,
    ...props
}) => {
    const [state, dispatch] = React.useReducer(reducer(timeOut), initialState);

    const gesture = React.useMemo(() => {
        return Gesture.Pinch().onStart((e) => {
            runOnJS(console.log)("Bonjour .............", e);
        });
    }, []);

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
            <Pressable
                onPressIn={onPressIn}
                onPress={onPress}
                onPressOut={onPressOut}
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#000",
                }}
            >
                <View
                    style={{
                        backgroundColor: "rgba(212,0,0,.8)",
                    }}
                >
                    <GestureDetector gesture={gesture}>
                        <Image
                            resizeMode="contain"
                            source={{ uri }}
                            height={100}
                            width={200}
                            style={{
                                height: 100,
                                width: 200,
                            }}
                        />
                    </GestureDetector>
                </View>
                {/* <Text
                    style={{ fontSize: 50, color: "#fff", textAlign: "center" }}
                >
                    {JSON.stringify(state, null, 4)}
                </Text> */}
            </Pressable>
        </React.Fragment>
    );
};

export default Viewer;
