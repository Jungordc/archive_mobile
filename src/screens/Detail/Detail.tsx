/** @format */

import { FlatList, ScrollView } from "react-native";
import React from "react";
import { Box, Text } from "native-base";
import DetailReader from "../../components/Composite/DetailReader/DetailReader";
import { RootStackScreenProps } from "../../navigation/types";
import Card from "../../components/Composite/Card/Card";
import CommentReplay from "../../components/Composite/CommentReplay/CommentReplay";
import DetailActions from "../../components/Composite/DetailActions/DetailActions";
import AvatarLabel from "../../components/Primitive/AvatarLabel/AvatarLabel";
import { uri } from "../../utils/uri";

export type DetailProps = {} & RootStackScreenProps<"Detail">;

const Detail: React.FC<DetailProps> = ({ navigation }) => {
    const data = new Array(10)
        .fill(0)
        .map((i, index) => ({ id: index, title: ` title n0 ${index}` }));
    return (
        <React.Fragment>
            <ScrollView>
                <AvatarLabel
                    p={2}
                    my={3}
                    source={uri}
                    avatarProps={{
                        size: "lg",
                    }}
                    titleProps={{
                        fontSize: "md",
                    }}
                    subTitleProps={{
                        fontSize: "sm",
                    }}
                    title="Archive user"
                    subTitle="20 min"
                />
                <DetailReader />
                <Box p={2} mb={3}>
                    <Text
                        fontWeight="medium"
                        fontSize="lg"
                        color="coolGray.700"
                    >
                        Sujet Similaires
                    </Text>
                </Box>
                <FlatList
                    horizontal
                    contentContainerStyle={{ marginHorizontal: 5 }}
                    data={data}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ index, item }) => {
                        return (
                            <Card
                                m={1}
                                maxW={200}
                                onPress={() => {
                                    navigation.navigate("Detail", {
                                        post: index,
                                    });
                                }}
                            />
                        );
                    }}
                />
                <Box p={2} mb={3}>
                    <Text
                        fontWeight="medium"
                        fontSize="lg"
                        color="coolGray.700"
                    >
                        Commentaires
                    </Text>
                </Box>
                <Box p={2}>
                    <CommentReplay />
                    <CommentReplay replays={[1, 2]} />
                    <CommentReplay />
                </Box>
            </ScrollView>
            <Box position="absolute" bottom={0} right={0}>
                <DetailActions />
            </Box>
        </React.Fragment>
    );
};

Detail.displayName = "Detail";
export default Detail;
