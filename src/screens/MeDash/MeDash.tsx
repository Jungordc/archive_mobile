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
import {
    HomeTabPramList,
    HomeTabScreenProps,
    RootStackParamList,
} from "../../navigation/types";
import { MenuItemType, MENUS } from "./menus";

import { uri } from "../../utils/uri";
import ChangeAuthorActifBottomSheet from "../../containers/Actions/ChangeAuthorActifBottomSheet";
import {
    authorListConnector,
    bottomSheetChangeAuthorConnector,
} from "../../services/connectors/AccountConnector";

// connect to data services
const ChangeAuthorActifBottomSheetConnected = bottomSheetChangeAuthorConnector(
    ChangeAuthorActifBottomSheet
);

const HeaderTitleList: React.FC<IterfaceHeadingProps> = (props) => {
    return <Heading fontSize="md" my="2" color="coolGray.700" {...props} />;
};

type AuthorDataType = {
    id: string | number;
    name: string;
    accountType: "USER" | "LIB";
    cover?: string;
    avatar?: string;
    isActif?: boolean;
};

type ListAuthorProps = {
    authors?: AuthorDataType[];
    onSelectAuthor?(author: number | string): void;
};

export const ListAuthor: React.FC<ListAuthorProps> = ({
    authors,
    onSelectAuthor,
}) => {
    const handlerSelectAuthor = React.useCallback((author: number | string) => {
        return () => onSelectAuthor?.(author);
    }, []);

    return (
        <VStack space={1}>
            <HeaderTitleList>Autheurs</HeaderTitleList>
            {authors?.map((author, i) => (
                <View key={i}>
                    <TouchableOpacity onPress={handlerSelectAuthor(author.id)}>
                        <AvatarLabel
                            p="1"
                            avatarProps={{
                                size: "md",
                                source: { uri: author.avatar },
                            }}
                            titleProps={{
                                fontWeight: "bold",
                            }}
                            source={uri}
                            title={author.name}
                            subTitle={
                                author.accountType === "USER"
                                    ? "Voir votre profile"
                                    : "Voir le profile de votre librarie"
                            }
                            action={
                                author.isActif && (
                                    <HStack space="2" alignItems="center">
                                        <Text
                                            fontSize="2xs"
                                            color="success.700"
                                        >
                                            Autheur actif
                                        </Text>
                                        <View
                                            rounded="full"
                                            h="2"
                                            w="2"
                                            bg="success.700"
                                        />
                                    </HStack>
                                )
                            }
                        />
                    </TouchableOpacity>
                    <Divider mt="2" />
                </View>
            ))}
            {(authors?.length || 0) > 1 && (
                <View flex={1} alignItems="flex-end">
                    <ChangeAuthorActifBottomSheetConnected />
                </View>
            )}
        </VStack>
    );
};

const ListAuthorConnected = authorListConnector(ListAuthor);

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

    const handlerNavigate = React.useCallback(
        (path: keyof RootStackParamList | keyof HomeTabPramList) => {
            return () => navigation.navigate(path);
        },
        []
    );

    const headerComponent = React.useCallback(() => {
        return (
            <VStack p="3" mt="24" space="3">
                <ListAuthorConnected onSelectAuthor={handlerAuthorNavigation} />
                <HeaderTitleList>Tous les raccourcis</HeaderTitleList>
                <HStack h={220} space={3}>
                    <View flex={1}>
                        <CardDash
                            onPress={handlerNavigate("Save")}
                            title="enregistrement"
                            subTitle="Retrouver vos archives sauvergader pour plus tards"
                        />
                    </View>
                    <VStack space="2" flex={1}>
                        <CardDash
                            onPress={handlerNavigate("Subscribers")}
                            title="abonnés"
                            subTitle="234 abonnés"
                            iconProps={{
                                iconName: "people",
                            }}
                        />
                        <CardDash
                            onPress={handlerNavigate("Subscribed")}
                            title="Abonnements"
                            subTitle="0 abonnements"
                            iconProps={{
                                iconName: "people-outline",
                            }}
                        />
                    </VStack>
                </HStack>
                <HeaderTitleList>Parametres</HeaderTitleList>
            </VStack>
        );
    }, []);

    const renderItem = React.useCallback(({ item }: { item: MenuItemType }) => {
        return (
            <TouchableOpacity onPress={handlerItemNavigation(item.path)}>
                <ItemSetting
                    p="3"
                    iconLeftProps={{ name: item.icon }}
                    title={item.name}
                />
            </TouchableOpacity>
        );
    }, []);

    return (
        <HeaderAnimationContainer
            headerProps={{
                showBtn: true,
                title: "Menu",
                iconButtonProps: {
                    iconName: "contrast-outline",
                },
            }}
            flatListProps={{
                data: MENUS,
                showsVerticalScrollIndicator: false,
                renderItem,
                ListFooterComponent: CopyrightText,
                ListHeaderComponent: headerComponent,
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
