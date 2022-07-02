/** @format */

import { View, Text } from "react-native";
import React from "react";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import Header from "../../components/Composite/Headers/Header";
// import DocReader from "../../components/Composite/DocReader/DocReader";

export type SearchProps = {};

const Search: React.FC<SearchProps> = ({}) => {
    return (
        <RootContainer>
            <Header title="Recherche" />
        </RootContainer>
    );
};

export default Search;
