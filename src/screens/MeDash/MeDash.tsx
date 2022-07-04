/** @format */

import React from "react";
import { TouchableOpacity } from "react-native";
import { IterfaceHeadingProps } from "native-base/src/components/primitives/Heading/types";
import { View } from "native-base/src/components/basic/View";
import Text from "native-base/src/components/primitives/Text";
import Heading from "native-base/src/components/primitives/Heading";
import VStack from "native-base/src/components/primitives/Stack/VStack";
import Divider from "native-base/src/components/composites/Divider";
import HStack from "native-base/src/components/primitives/Stack/HStack";

import CardDash from "../../components/Composite/CardDash/CardDash";
import ItemSetting from "../../components/Composite/ItemSetting/ItemSetting";
import AvatarLabel from "../../components/Primitive/AvatarLabel/AvatarLabel";
import HeaderAnimationContainer from "../../containers/screens/HeaderAnimationContainer";
import { HomeTabScreenProps } from "../../navigation/types";
import { MenuItemType, MENUS } from "./menus";

import { uri } from "../../utils/uri";

const HeaderTitleList: React.FC<IterfaceHeadingProps> = (props) => {
    return <Heading fontSize="lg" my="2" color="coolGray.700" {...props} />;
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
            <HeaderTitleList>Autheurs</HeaderTitleList>
            {authors.map((author, i) => (
                <View key={i}>
                    <TouchableOpacity onPress={handlerSelectAuthor(author)}>
                        <AvatarLabel
                            p="1"
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
                    <Divider mt="2" />
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
                data: MENUS,
                renderItem,
                ListFooterComponent: CopyrightText,
                ListHeaderComponent: () => {
                    return (
                        <VStack p="3" mt="24" space="3">
                            <ListAuthor
                                onSelectAuthor={handlerAuthorNavigation}
                            />
                            <HeaderTitleList>
                                Tous les raccourcis
                            </HeaderTitleList>
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
                            <HeaderTitleList>Parametres</HeaderTitleList>
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
