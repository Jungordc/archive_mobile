/** @format */

import { View, FlatList, Dimensions } from "react-native";
import React from "react";
import Card from "../../components/Composite/Card/Card";
import SearchButton from "../../components/Primitive/SearchButton/SearchButton";
import { HomeScreenProps } from "../../navigation/types";
import Author from "../../components/Composite/Author/Author";

export type HomeProps = {} & HomeScreenProps<"Index">;

const w = Dimensions.get("screen").width;

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const data = new Array(11)
        .fill(0)
        .map((i, index) => ({ id: index, title: ` title n0 ${index}` }));
    return (
        <FlatList
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
    );
};

Home.displayName = "Home";
export default Home;
