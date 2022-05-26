/** @format */

import { View, FlatList, Dimensions } from "react-native";
import React from "react";
import Card from "../../components/Composite/Card/Card";
import SearchButton from "../../components/Primitive/SearchButton/SearchButton";
import { HomeTabScreenProps } from "../../navigation/types";
import Author from "../../components/Composite/Author/Author";
import Reanimated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    Extrapolate,
    runOnJS,
} from "react-native-reanimated";
import { Heading } from "native-base";
import { StatusBar } from "expo-status-bar";

export type HomeProps = {} & HomeTabScreenProps<"Index">;

const RHeading = Reanimated.createAnimatedComponent(Heading);

const w = Dimensions.get("screen").width;
const FADE_OFFSET = 40;
const Home: React.FC<HomeProps> = ({ navigation }) => {
    const scrollY = useSharedValue(0);
    const breakPoint = useSharedValue(1000);
    const onScroll = useAnimatedScrollHandler((event) => {
        // const d = interpolate(
        //     scrollY.value,
        //     [0, 200],
        //     [35, 20],
        //     Extrapolate.CLAMP
        // );
        // console.log(event.contentOffset.y, " ", d);
        scrollY.value = event.contentOffset.y;
    });

    const animatedStyleHeader = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [breakPoint.value, breakPoint.value + FADE_OFFSET],
                [0, 1],
                Extrapolate.CLAMP
            ),
        };
    });

    const RheaderStyle = useAnimatedStyle(() => {
        return {
            fontSize: interpolate(
                scrollY.value,
                [0, 200],
                [35, 20],
                Extrapolate.CLAMP
            ),
        };
    });

    const data = new Array(11)
        .fill(0)
        .map((i, index) => ({ id: index, title: ` title n0 ${index}` }));
    return (
        <>
            <StatusBar />
            <Reanimated.View
                style={[
                    {
                        marginTop: 25,
                        height: 60,
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        elevation: 2,
                    },
                ]}
            >
                <RHeading
                    p={2}
                    onLayout={(event) => {
                        const { y, height } = event.nativeEvent.layout;
                        breakPoint.value = y + height;
                    }}
                    style={RheaderStyle}
                >
                    Title
                </RHeading>
            </Reanimated.View>

            <Reanimated.FlatList
                showsVerticalScrollIndicator={false}
                onScroll={onScroll}
                ListHeaderComponent={
                    <View style={{ marginVertical: 10 }}>
                        <SearchButton
                            onPress={() => {
                                navigation.navigate("Search");
                            }}
                        />
                        <Author mt={4} />
                    </View>
                }
                contentContainerStyle={{ marginHorizontal: 5 }}
                data={data}
                numColumns={2}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ index, item }) => {
                    return (
                        <Card
                            m={1}
                            onPress={() => {
                                navigation.navigate("Detail", { post: index });
                            }}
                        />
                    );
                }}
            />
        </>
    );
};

Home.displayName = "Home";
export default Home;
