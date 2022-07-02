/** @format */

import { Box, Heading, Divider, VStack, HStack, Text, View } from "native-base";
import React from "react";
import CardDash from "../../components/Composite/CardDash/CardDash";
import Header from "../../components/Composite/Headers/Header";
import ItemSetting from "../../components/Composite/ItemSetting/ItemSetting";
import AvatarLabel from "../../components/Primitive/AvatarLabel/AvatarLabel";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import { HomeTabScreenProps } from "../../navigation/types";
import { uri } from "../../utils/uri";

import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    Extrapolate,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native";

export type MeDashProps = {} & HomeTabScreenProps<"MeDash">;
const AView = Animated.createAnimatedComponent(View);

const BEAKPOINT = 80;

const MeDash: React.FC<MeDashProps> = ({ navigation }) => {
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
                <Header title="Menu" />
            </AView>
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                onScroll={onScrollY}
            >
                <Box p={2} mt="24">
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
                                iconLeftProps={{
                                    name: "information-circle-sharp",
                                }}
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
        </RootContainer>
    );
};

MeDash.displayName = "MeDash";
export default MeDash;
