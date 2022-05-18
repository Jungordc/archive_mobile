/** @format */

import { FlatList } from "react-native";
import React from "react";
import { EditionScreenProps } from "../../navigation/types";
import CardDash from "../../components/Composite/CardDash/CardDash";
import { Box, Heading } from "native-base";

export type SelectCategorieProps = {} & EditionScreenProps<"SelectCategorie">;

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
                <Box my={4} p={2}>
                    <Heading>
                        Selection une categorie pour votre publication
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
