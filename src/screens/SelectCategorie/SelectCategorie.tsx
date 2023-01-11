/** @format */

import React from "react";
import { HomeTabScreenProps } from "../../navigation/types";
import { Heading, View } from "native-base";
import PopularCat from "../../components/Composite/PopularCat/PopularCat";
import Category from "../../components/Composite/Cards/Category/Category";
import HeaderAnimationContainer from "../../containers/screens/HeaderAnimationContainer";
import CategoryEditLoader from "../../containers/Loaders/CategoryEditLoader";

export type SelectCategorieProps = {} & HomeTabScreenProps<"Edit">;

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

const HeaderTitle: React.FC<{ children: string }> = ({ children }) => {
    return (
        <Heading fontSize="md" p={3} color="coolGray.700">
            {children}
        </Heading>
    );
};

const SelectCategorie: React.FC<SelectCategorieProps> = ({ navigation }) => {
    const onNavigateToCategory = React.useCallback(
        (category: number | string) => {
            navigation.navigate("Edition", { category });
        },
        []
    );

    const handlerSelectCategory = React.useCallback(
        (category: number | string) => {
            return () => onNavigateToCategory(category);
        },
        []
    );

    const renderItem = React.useCallback(({ item }) => {
        return <Category mx="1" onPress={handlerSelectCategory(item.id)} />;
    }, []);
    return (
        <CategoryEditLoader />
        // <HeaderAnimationContainer
        //     headerProps={{
        //         title: "Categorie",
        //     }}
        //     flatListProps={{
        //         data,
        //         renderItem,
        //         ListHeaderComponent: () => (
        //             <View mb={2} mt="24">
        //                 <HeaderTitle>Categories Populaires</HeaderTitle>
        //                 <PopularCat
        //                     my={2}
        //                     onPressCategory={onNavigateToCategory}
        //                 />
        //                 <HeaderTitle>Toutes les Catgories</HeaderTitle>
        //             </View>
        //         ),
        //     }}
        // />
    );
};

SelectCategorie.displayName = "SelectCategorie";
export default SelectCategorie;
