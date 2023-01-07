/** @format */

import React from "react";
import Divider from "native-base/src/components/composites/Divider";
import { HomeTabScreenProps } from "../../navigation/types";
import TopicList from "../../components/Primitive/TopicList/TopicList";
import FeedCardHorizontal from "../../components/Composite/Cards/FeedCardHorizontal/FeedCardHorizontal";
import CardFeedContainer from "../../containers/CardFeedContainer";
import HomeAnimatedContainer from "../../containers/screens/HomeAnimatedContainer";
import useFakeData from "../../services/faceData";
import HomeLoader from "../../containers/Loaders/HomeLoader";

export type HomeProps = {} & HomeTabScreenProps<"Index">;

const Home: React.FC<HomeProps> = ({ navigation, route }) => {
    const data = useFakeData({ id: 0, title: "Titre face" }, 12);

    const goToDetail = React.useCallback(() => {
        navigation.navigate("Detail", { post: 1 });
    }, []);

    const renderItem = React.useCallback(({ index, item }) => {
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }, []);

    return (
        <>
            {/* <HomeAnimatedContainer
            topics={<TopicList />}
            flatListProps={{ data, renderItem }}
        /> */}
            <HomeLoader />
        </>
    );
};

Home.displayName = "Home";
export default Home;
