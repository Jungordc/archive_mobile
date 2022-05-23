/** @format */

import { Box, Heading, Divider, VStack, HStack, Text } from "native-base";
import React from "react";
import { ScrollView, TouchableOpacity, Animated } from "react-native";
import CardDash from "../../components/Composite/CardDash/CardDash";
import ItemSetting from "../../components/Composite/ItemSetting/ItemSetting";
import AvatarLabel from "../../components/Primitive/AvatarLabel/AvatarLabel";
import { HomeTabScreenProps } from "../../navigation/types";
import { uri } from "../../utils/uri";

export type MeDashProps = {} & HomeTabScreenProps<"MeDash">;

const AHeading = Animated.createAnimatedComponent(Heading);

const MeDash: React.FC<MeDashProps> = ({ navigation }) => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    return (
        <Animated.ScrollView
            onScroll={Animated.event(
                [
                    {
                        nativeEvent: {
                            contentOffset: {
                                y: scrollY,
                            },
                        },
                    },
                ],
                {
                    useNativeDriver: true,
                }
            )}
        >
            <Box p={2} mt={50}>
                <AHeading
                    fontSize="4xl"
                    style={{
                        transform: [
                            {
                                scale: scrollY.interpolate({
                                    inputRange: [-1, 0, 1],
                                    outputRange: [1.5, 1, 1],
                                }),
                            },
                        ],
                    }}
                >
                    Menu
                </AHeading>
                <VStack space={2} my={2} mt={4}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Profile", { author: 12 })
                        }
                    >
                        <AvatarLabel
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
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Profile", { author: 12 })
                        }
                    >
                        <AvatarLabel
                            avatarProps={{
                                size: "md",
                            }}
                            titleProps={{
                                fontWeight: "bold",
                            }}
                            source={uri}
                            title="Archive user"
                            subTitle="Bibliotheque"
                        />
                    </TouchableOpacity>
                    <Divider />
                </VStack>
                <Box my={4}>
                    <Heading fontSize="md">Tous les raccourcis</Heading>
                </Box>
                <VStack>
                    <HStack space={2}>
                        <CardDash flex={0.5} h={200} title="enregistrement" />
                        <VStack flex={0.5} space={2}>
                            <CardDash title="enregistrement" />
                            <CardDash title="enregistrement" />
                        </VStack>
                    </HStack>
                </VStack>
                <VStack my={5} space={2}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("NewLib")}
                    >
                        <ItemSetting
                            iconLeftProps={{ name: "library-sharp" }}
                            title="Creer une bibliotheque"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Help")}
                    >
                        <ItemSetting
                            iconLeftProps={{ name: "md-help-circle" }}
                            title="Aide et assistance"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("About")}
                    >
                        <ItemSetting
                            iconLeftProps={{ name: "information-circle-sharp" }}
                            title="Apropos"
                        />
                    </TouchableOpacity>
                </VStack>
                <Box>
                    <Text
                        color="coolGray.400"
                        fontWeight="bold"
                        fontSize="2xs"
                        textAlign="center"
                    >
                        v0.1-aplha copyright 2022 Archive
                    </Text>
                </Box>
            </Box>
        </Animated.ScrollView>
    );
};

MeDash.displayName = "MeDash";
export default MeDash;
