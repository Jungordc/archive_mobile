/** @format */

import React from "react";
import { View, FlatList, Text } from "react-native";
import { Icon } from "native-base";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

import Card from "../../components/Composite/Card/Card";
import SearchButton from "../../components/Primitive/SearchButton/SearchButton";
import { HomeTabScreenProps } from "../../navigation/types";
import Author from "../../components/Composite/Author/Author";

export type HomeProps = {} & HomeTabScreenProps<"Index">;

const Home: React.FC<HomeProps> = ({ navigation, route }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Icon mr="2.5" size="xl" as={Ionicons} name="flash" />;
            },
        });
    }, []);
    const data = new Array(11)
        .fill(0)
        .map((i, index) => ({ id: index, title: ` title n0 ${index}` }));
    return (
        <>
            <StatusBar />

            <FlatList
                showsVerticalScrollIndicator={false}
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
                endFillColor="green"
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
