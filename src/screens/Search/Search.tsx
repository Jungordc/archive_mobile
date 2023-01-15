/** @format */

import { View, Text, Button, Image, FlatList } from "native-base";
import React from "react";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import Header from "../../components/Composite/Headers/Header";
// import DocReader from "../../components/Composite/DocReader/DocReader";
import * as MediaLibrary from "expo-media-library";
import Camera from "./Camera";

export type SearchProps = {};

const Search: React.FC<SearchProps> = ({}) => {
    const [data, setData] = React.useState<MediaLibrary.Asset[]>([]);
    const click = async () => {
        const perReq = await MediaLibrary.requestPermissionsAsync();
        const permission = await MediaLibrary.getPermissionsAsync();
        console.log("permission", permission, perReq);
        if (permission.granted) {
            const data = await MediaLibrary.getAssetsAsync({
                mediaType: MediaLibrary.MediaType.photo,
                sortBy: "creationTime",
            });
            setData(data.assets);
        }
    };
    return (
        <RootContainer>
            <Header title="Recherche" />
            {/* <Camera /> */}
            <Button onPress={click}>Press</Button>
            <FlatList
                data={data}
                keyExtractor={(i) => i.id}
                renderItem={({ item }) => {
                    return (
                        <View my="1">
                            <Image
                                alt="Image"
                                source={{ uri: item.uri }}
                                height={item.height}
                                width="full"
                            />
                        </View>
                    );
                }}
            />
        </RootContainer>
    );
};

export default Search;
