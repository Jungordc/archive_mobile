/** @format */

import React from "react";
import {
    FlatList,
    Dimensions,
    ViewToken,
    TouchableOpacity,
} from "react-native";
import { View } from "native-base/src/components/basic/View";
import Text, { ITextProps } from "native-base/src/components/primitives/Text";
import ImageShareElement from "../ShareElements/ImageShareElement";
import { keyExtractor } from "../../../utils/core";
import Icon from "../../Primitive/Icons/Icon";
import TextDotSeparator from "../../Primitive/TextDotSeparator/TextDotSeparator";
import PressHidden from "../DocReader/PressHidden";
import RootContainer from "../../Primitive/RootContainer/Container";
import IconLabel from "../../Primitive/IconLabel/IconLabel";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");
const INFOBGColor = "rgba(255,255,255,0.15)";

// const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar.StatusBar);

const TextShadow: React.FC<ITextProps> = (props) => {
    return (
        <Text
            color="#fff"
            fontSize="lg"
            shadow="1"
            style={{
                textShadowOffset: {
                    width: 1.5,
                    height: 1.5,
                },
                textShadowRadius: 5,
                textShadowColor: "rgba(0,0,0,1)",
            }}
            {...props}
        />
    );
};

interface DocsEditorProps {
    docs?: string[];
    initialScrollIndex?: null | number;
    getIds(element: string): string;
    onToogleStatusBar?(): void;
}

const DocsEditor: React.FC<DocsEditorProps> = ({
    docs = [],
    initialScrollIndex,
    getIds,
    onToogleStatusBar,
    ...props
}) => {
    const { data, dataLenght } = React.useMemo(
        () => ({
            data: docs.map((i) => ({ uri: i })),
            dataLenght: docs.length,
        }),
        [docs]
    );
    return (
        <RootContainer withStatusBar={false}>
            <View flex={1} bgColor="black" position="relative">
                <View
                    position="absolute"
                    top="2"
                    left="0"
                    right="0"
                    justifyContent="center"
                    alignItems="center"
                    zIndex={11}
                >
                    <Text fontSize="lg" color="white">
                        Document|Pdf
                    </Text>
                </View>
                <View position="absolute" top="12" right="3" zIndex={10}>
                    <View rounded="full" p="3" bg={INFOBGColor}>
                        {/* <Text color="#fff">Supprimer</Text> */}
                        <Icon iconName="trash" color="white" size="md" />
                    </View>
                </View>

                <FlatList
                    horizontal
                    bounces
                    pagingEnabled
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    initialScrollIndex={initialScrollIndex}
                    keyExtractor={keyExtractor}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                position="relative"
                                flex={1}
                                height={HEIGHT}
                                width={WIDTH}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <View
                                    position="absolute"
                                    top="0"
                                    left="0"
                                    right="0"
                                    bottom="0"
                                    // bgColor="amber.500"
                                    zIndex={11}
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            backgroundColor: INFOBGColor,
                                            padding: 20,
                                            // padding: 10,
                                            // width: 250,
                                            shadowOffset: {
                                                width: 3,
                                                height: 3,
                                            },
                                            shadowRadius: 15,
                                            shadowColor: "rgba(255,255,255,1)",
                                            elevation: 2,
                                            borderColor: "#cecece77",
                                            borderWidth: 0.5,
                                            borderRadius: 100,
                                        }}
                                    >
                                        {/* <IconLabel
                                            labelProps={{
                                                fontSize: "lg",
                                                textTransform: "uppercase",
                                                color: "#fff",
                                            }}
                                            iconProps={{
                                                size: "lg",
                                                color: "#fff",
                                            }}
                                            label="Reesayer"
                                            icon="cloud-upload"
                                        /> */}
                                        <Icon
                                            iconName="close"
                                            color="#fff"
                                            size="2xl"
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View
                                    height={HEIGHT}
                                    width={WIDTH}
                                    bgColor="black"
                                    flex={1}
                                >
                                    <PressHidden>
                                        <ImageShareElement
                                            source={item}
                                            id={getIds(item.uri)}
                                        />
                                    </PressHidden>
                                </View>
                                <View
                                    position="absolute"
                                    top="3"
                                    right="3"
                                    zIndex={10}
                                >
                                    <View
                                        rounded="full"
                                        px="3"
                                        py="1"
                                        bg={INFOBGColor}
                                    >
                                        <TextShadow fontSize="sm">{`${index}/${dataLenght}`}</TextShadow>
                                    </View>
                                </View>
                                <View
                                    p="2"
                                    zIndex={10}
                                    position="absolute"
                                    bottom={1}
                                    right={0}
                                    left={0}
                                >
                                    <TextDotSeparator
                                        ml="5"
                                        dotProps={{
                                            color: "white",
                                            bgColor: "white",
                                        }}
                                    >
                                        <TextShadow fontSize="md">
                                            @auteur
                                        </TextShadow>
                                        <TextShadow fontSize="sm">
                                            Document Pdf
                                        </TextShadow>
                                    </TextDotSeparator>
                                    <View pt="1">
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                backgroundColor: INFOBGColor,
                                                padding: 10,
                                                borderRadius: 100,
                                            }}
                                        >
                                            <Icon
                                                iconName="arrow-down"
                                                size="lg"
                                                color="#fff"
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        </RootContainer>
    );
};

export default DocsEditor;
