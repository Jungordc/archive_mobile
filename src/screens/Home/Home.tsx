/** @format */

import React from "react";
import { View } from "native-base";
import { HomeTabScreenProps } from "../../navigation/types";
import TopicList from "../../components/Primitive/TopicList/TopicList";
import FeedCardHorizontal from "../../components/Composite/Cards/FeedCardHorizontal/FeedCardHorizontal";
import CardFeedContainer from "../../containers/CardFeedContainer";
import Divider from "native-base/src/components/composites/Divider";
import Animated from "react-native-reanimated";
import useAnimatedCollapsingHeader from "../../hooks/animations/useAnimatedCollapsingHeader";
import useFakeData from "../../services/faceData";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import Header from "../../components/Composite/Headers/Header";

const AView = Animated.createAnimatedComponent(View);

export type HomeProps = {} & HomeTabScreenProps<"Index">;

const Home: React.FC<HomeProps> = ({ navigation, route }) => {
    const headerAnimated = useAnimatedCollapsingHeader();
    const data = useFakeData({ id: 0, title: "Titre face" }, 12);

    const goToDetail = React.useCallback(() => {
        navigation.navigate("Detail", { post: 1 });
    }, []);

    return (
        <RootContainer>
            <AView
                position="absolute"
                my="5"
                top="0"
                left="0"
                right="0"
                zIndex="2"
                bg="white"
                style={headerAnimated.animatedStyles}
            >
                <Header showBtn />
                <View my="1">
                    <TopicList />
                </View>
            </AView>
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
