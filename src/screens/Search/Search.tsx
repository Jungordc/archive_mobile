/** @format */

import React from "react";
import RootContainer from "../../components/Primitive/RootContainer/Container";

import { OGallerie } from "../Gallerie/Gallerie";

export type SearchProps = {};

const Search: React.FC<SearchProps> = ({}) => {
    return (
        <RootContainer>
            <OGallerie />
        </RootContainer>
    );
};

export default Search;

/**
 * {/* <Header title="Recherche" />
            {/* <Camera /> 
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
 */
