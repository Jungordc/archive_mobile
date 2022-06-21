/** @format */

import { FlatList } from "react-native";
import React from "react";
import { HomeTabScreenProps } from "../../navigation/types";
import { Box, Heading, View } from "native-base";
import PopularCat from "../../components/Composite/PopularCat/PopularCat";
import Category from "../../components/Composite/Cards/Category/Category";

export type SelectCategorieProps = {} & HomeTabScreenProps<"Edit">;

const SelectCategorie: React.FC<SelectCategorieProps> = ({ navigation }) => {
    const data = [
        "Tfc",
        "Tfb",
        "Memoire/Tfb",
        "These",
        "Items",
        "Exercices/ Tp/ TD",
        "Examen / Interrogation",
        "Syllabus",
    ].map((i, index) => ({ id: index, name: i }));
    return (
        <FlatList
            data={data}
            bounces={false}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
                <Box my={4}>
                    <Heading p={2} color="coolGray.700">
                        Categories Populaires
                    </Heading>
                    <View my={2}>
                        <PopularCat />
                    </View>
                    <Heading p={2} color="coolGray.700" fontSize="md">
                        Toutes les Catgories
                    </Heading>
                </Box>
            }
            renderItem={({ item }) => {
                return (
                    <Category
                        onPress={() =>
                            navigation.navigate("Edition", { category: 12 })
                        }
                    />
                );
            }}
        />
    );
};

SelectCategorie.displayName = "SelectCategorie";
export default SelectCategorie;
