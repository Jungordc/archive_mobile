/** @format */

import { FlatList } from "react-native";
import React from "react";
import { HomeTabScreenProps } from "../../navigation/types";
import { Heading, View } from "native-base";
import PopularCat from "../../components/Composite/PopularCat/PopularCat";
import Category from "../../components/Composite/Cards/Category/Category";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import Header from "../../components/Composite/Headers/Header";

import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    Extrapolate,
} from "react-native-reanimated";

const AView = Animated.createAnimatedComponent(View);
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

const BEAKPOINT = 80;

const SelectCategorie: React.FC<SelectCategorieProps> = ({ navigation }) => {
    const scrollY = useSharedValue(0);

    const onScrollY = useAnimatedScrollHandler((handlers) => {
        scrollY.value = handlers.contentOffset.y;
    });

    const AStyleHeader = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: interpolate(
                    scrollY.value,
                    [0, BEAKPOINT],
                    [0, -20],
                    Extrapolate.CLAMP
                ),
            },
        ],
    }));

    return (
        <RootContainer>
            <AView
                position="absolute"
                my="5"
                top="0"
                left="0"
                right="0"
                zIndex="2"
                bg="white"
                style={AStyleHeader}
            >
                <Header title="Categorie" />
            </AView>
            <Animated.FlatList
                onScroll={onScrollY}
                data={data}
                bounces={false}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View mb={2} mt="24">
                        <Heading fontSize="md" p={3} color="coolGray.700">
                            Categories Populaires
                        </Heading>
                        <View my={2}>
                            <PopularCat />
                        </View>
                        <Heading p={3} fontSize="md" color="coolGray.700">
                            Toutes les Catgories
                        </Heading>
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <Category
                            mx="1"
                            onPress={() =>
                                navigation.navigate("Edition", { category: 12 })
                            }
                        />
                    );
                }}
            />
        </RootContainer>
    );
};

SelectCategorie.displayName = "SelectCategorie";
export default SelectCategorie;
