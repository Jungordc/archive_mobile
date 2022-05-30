/** @format */

import { FlatList } from "react-native";
import React from "react";
import { HomeTabScreenProps } from "../../navigation/types";
import CardDash from "../../components/Composite/CardDash/CardDash";
import { Box, Heading, View } from "native-base";
import PopularCat from "../../components/Composite/PopularCat/PopularCat";

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
            numColumns={2}
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
                    <CardDash
                        m={2}
                        title={item.name}
                        onPress={() =>
                            navigation.navigate("Edition", {
                                category: item.id,
                            })
                        }
                    />
                );
            }}
        />
    );
};

SelectCategorie.displayName = "SelectCategorie";
export default SelectCategorie;
