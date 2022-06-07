/** @format */

import React from "react";
import { FlatList } from "react-native";
import { Icon, Heading, IconButton, View } from "native-base";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "../../components/Composite/Card/Card";
import { HomeTabScreenProps } from "../../navigation/types";
import Author from "../../components/Composite/Author/Author";
import TopicList from "../../components/Primitive/TopicList/TopicList";
import HStack from "native-base/src/components/primitives/Stack/HStack";
import FeedCardHorizontal from "../../components/Composite/Cards/FeedCardHorizontal/FeedCardHorizontal";
import CardFeedContainer from "../../containers/CardFeedContainer";
import Divider from "native-base/src/components/composites/Divider";
import Animated from "react-native-reanimated";
import { useHeaderScrollAnimation } from "../../hooks/useHeaderScrollAnimation";

export type HomeProps = {} & HomeTabScreenProps<"Index">;

const data = new Array(11)
    .fill(0)
    .map((_, index) => ({ id: index, title: ` title n0 ${index}` }));

const Home: React.FC<HomeProps> = ({ navigation, route }) => {
    const { onScrollHandler, headerAnimatedStyle } = useHeaderScrollAnimation();
    const goToDetail = React.useCallback(
        (post: number | string) => navigation.navigate("Detail", { post }),
        []
    );

    return (
        <SafeAreaView>
            <Animated.View
                style={[
                    {
                        marginVertical: 10,
                        backgroundColor: "#fff",
                        position: "absolute",
                        zIndex: 1,
                    },
                    headerAnimatedStyle,
                ]}
            >
                <HStack
                    mt="7"
                    mb="2"
                    justifyContent="space-between"
                    alignItems="center"
                    p="4"
                >
                    <Heading fontSize="xl" color="coolGray.700">
                        Archive
                    </Heading>
                    <IconButton
                        borderColor="coolGray.200"
                        tintColor="coolGray.200"
                        colorScheme="coolGray"
                        variant="outline"
                        borderRadius="full"
                        size="sm"
                        icon={<Icon as={Ionicons} name="ios-flash-outline" />}
                    />
                </HStack>
                <View my="1">
                    <TopicList />
                </View>
                {/* <Author mt={4} /> */}
            </Animated.View>
            <Animated.FlatList
                bounces={false}
                ListHeaderComponent={<View my="20" />}
                onScroll={onScrollHandler}
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ index, item }) => {
                    return (
                        <>
                            {index !== 0 && <Divider color="amber.300" />}
                            <CardFeedContainer onPress={goToDetail}>
                                <FeedCardHorizontal py={2} />
                            </CardFeedContainer>
                        </>
                    );
                    // return (
                    //     <Card
                    //         m={1}
                    //         onPress={() => {
                    //             navigation.navigate("Detail", { post: index });
                    //         }}
                    //     />
                    // );
                }}
            />
        </SafeAreaView>
    );
};

Home.displayName = "Home";
export default Home;
