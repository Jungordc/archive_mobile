/** @format */

import { View, Text } from "react-native";
import React from "react";
// import DocReader from "../../components/Composite/DocReader/DocReader";

export type SearchProps = {};

const Search: React.FC<SearchProps> = ({}) => {
    return (
        <View style={{ flex: 1 }}>
            <Text>Search</Text>
            {/* <DocReader /> */}
        </View>
    );
};

export default Search;
