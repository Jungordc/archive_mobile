/** @format */

import React from "react";
import { Icon, Heading, IconButton, View, Pressable } from "native-base";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "../../components/Composite/Card/Card";
import Author from "../../components/Composite/Author/Author";
import { HomeTabScreenProps } from "../../navigation/types";
import TopicList from "../../components/Primitive/TopicList/TopicList";
import HStack from "native-base/src/components/primitives/Stack/HStack";
import FeedCardHorizontal from "../../components/Composite/Cards/FeedCardHorizontal/FeedCardHorizontal";
import CardFeedContainer from "../../containers/CardFeedContainer";
import Divider from "native-base/src/components/composites/Divider";
import Animated from "react-native-reanimated";
import useAnimatedCollapsingHeader from "../../hooks/useAnimatedCollapsingHeader";
import { connectorFeedCards } from "../../services/connectors/feedConnector";

export type HomeProps = {} & HomeTabScreenProps<"Index">;

const data = new Array(11)
    .fill(0)
    .map((_, index) => ({ id: index, title: ` title n0 ${index}` }));

const FeedCardConnected = connectorFeedCards(FeedCardHorizontal);

const Home: React.FC<HomeProps> = ({ navigation, route }) => {
    const headerAnimated = useAnimatedCollapsingHeader();
    const goToDetail = React.useCallback(() => {
        console.log(".....................>>>>>>>>>>>>>");
        navigation.navigate("Detail", { post: 1 });
    }, []);

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="#fff" />
            <Animated.View
                style={[
                    {
                        marginVertical: 10,
                        backgroundColor: "#fff",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1,
                    },
                    headerAnimated.animatedStyles,
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
                onScroll={headerAnimated.scrollHandler}
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ index, item }) => {
                    return (
                        <>
                            {index !== 0 && <Divider color="amber.300" />}
                            {/* <Pressable
                                onPress={goToDetail}
                                h="56"
                                bgColor="amber.400"
                            />
                            <Pressable onPress={goToDetail}>
                                <FeedCardConnected py={2} />
                            </Pressable> */}
                            <CardFeedContainer onPress={goToDetail}>
                                <FeedCardHorizontal py={2} />
                            </CardFeedContainer>
                        </>
                    );
                }}
            />
        </SafeAreaView>
    );
};

Home.displayName = "Home";
export default Home;
