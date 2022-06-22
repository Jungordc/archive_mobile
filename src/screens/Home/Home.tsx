/** @format */

import React from "react";
import { Heading, View } from "native-base";
import { HomeTabScreenProps } from "../../navigation/types";
import TopicList from "../../components/Primitive/TopicList/TopicList";
import HStack from "native-base/src/components/primitives/Stack/HStack";
import FeedCardHorizontal from "../../components/Composite/Cards/FeedCardHorizontal/FeedCardHorizontal";
import CardFeedContainer from "../../containers/CardFeedContainer";
import Divider from "native-base/src/components/composites/Divider";
import Animated from "react-native-reanimated";
import useAnimatedCollapsingHeader from "../../hooks/useAnimatedCollapsingHeader";
import useFakeData from "../../services/faceData";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import IconButton from "../../components/Primitive/IconButton/IconButton";

export type HomeProps = {} & HomeTabScreenProps<"Index">;

const Home: React.FC<HomeProps> = ({ navigation, route }) => {
    const headerAnimated = useAnimatedCollapsingHeader();
    const data = useFakeData({ id: 0, title: "Titre face" }, 12);

    const goToDetail = React.useCallback(() => {
        navigation.navigate("Detail", { post: 1 });
    }, []);

    return (
        <RootContainer>
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
                        iconName="ios-flash-outline"
                    />
                </HStack>
                <View my="1">
                    <TopicList />
                </View>
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
        </RootContainer>
    );
};

Home.displayName = "Home";
export default Home;
