/** @format */

import React from "react";
import { TouchableOpacity } from "react-native";
import { Heading, Divider, VStack, HStack, Text } from "native-base";
import { View } from "native-base/src/components/basic/View";
import CardDash from "../../components/Composite/CardDash/CardDash";
import ItemSetting from "../../components/Composite/ItemSetting/ItemSetting";
import AvatarLabel from "../../components/Primitive/AvatarLabel/AvatarLabel";
import {
    HomeTabScreenProps,
    RootStackParamList,
    HomeTabPramList,
} from "../../navigation/types";
import { uri } from "../../utils/uri";

import { IoniconsNameType } from "../../components/Primitive/Type";
import HeaderAnimationContainer from "../../containers/screens/HeaderAnimationContainer";

type MenuItemType = {
    id: string;
    icon: IoniconsNameType;
    name: string;
    path: keyof RootStackParamList | keyof HomeTabPramList;
};

type ListAuthorProps = {
    authors?: any[];
    onSelectAuthor?(author: number | string): void;
};

export const ListAuthor: React.FC<ListAuthorProps> = ({
    authors = [1, 2, 3],
    onSelectAuthor,
}) => {
    const handlerSelectAuthor = React.useCallback((author: number | string) => {
        return () => onSelectAuthor?.(author);
    }, []);

    return (
        <VStack space={1}>
            {authors.map((author, i) => (
                <View key={i}>
                    <TouchableOpacity onPress={handlerSelectAuthor(author)}>
                        <AvatarLabel
                            px="3"
                            py="1"
                            avatarProps={{
                                size: "md",
                            }}
                            titleProps={{
                                fontWeight: "bold",
                            }}
                            source={uri}
                            title="Archive user"
                            subTitle="Voir votre profile"
                        />
                    </TouchableOpacity>
                    <Divider />
                </View>
            ))}
        </VStack>
    );
};

export type MeDashProps = {} & HomeTabScreenProps<"MeDash">;
const MeDash: React.FC<MeDashProps> = ({ navigation }) => {
    const handlerAuthorNavigation = React.useCallback(
        (author: number | string) => {
            navigation.navigate("Profile", { author });
        },
        []
    );
    const handlerItemNavigation = React.useCallback(
        (path: MenuItemType["path"]) => {
            return () => navigation.navigate(path);
        },
        []
    );
    const renderItem = React.useCallback(({ item }: { item: MenuItemType }) => {
        return (
            <TouchableOpacity onPress={handlerItemNavigation(item.path)}>
                <ItemSetting
                    p="3"
                    iconLeftProps={{ name: "library-sharp" }}
                    title={item.name}
                />
            </TouchableOpacity>
        );
    }, []);

    return (
        <HeaderAnimationContainer
            headerProps={{
                title: "Menu",
            }}
            flatListProps={{
                data: MENU_ITEMS,
                renderItem,
                ListFooterComponent: CopyrightText,
                ListHeaderComponent: () => {
                    return (
                        <VStack p="3" mt="24">
                            <ListAuthor
                                onSelectAuthor={handlerAuthorNavigation}
                            />
                            <Heading>Tous les raccourcis</Heading>
                            <HStack space={2}>
                                <CardDash
                                    flex={0.5}
                                    h={200}
                                    title="enregistrement"
                                />
                                <VStack flex={0.5} space={2}>
                                    <CardDash title="enregistrement" />
                                    <CardDash title="enregistrement" />
                                </VStack>
                            </HStack>
                        </VStack>
                    );
                },
            }}
        />
    );
};

MeDash.displayName = "MeDash";
export default MeDash;

const CopyrightText = () => {
    return (
        <View p="3">
            <Text
                color="coolGray.400"
                fontWeight="bold"
                fontSize="2xs"
                textAlign="center"
            >
                v0.1-aplha copyright 2022 Archive
            </Text>
        </View>
    );
};

const MENU_ITEMS: MenuItemType[] = [
    {
        id: "1",
        icon: "",
        name: "Creer une bibliotheque",
        path: "NewLib",
    },
    {
        id: "2",
        icon: "",
        name: "Aide et assistance",
        path: "Help",
    },
    {
        id: "3",
        icon: "",
        name: "Apropos",
        path: "About",
    },
];
