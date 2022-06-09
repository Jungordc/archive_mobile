/** @format */

import React from "react";
import {
    Box,
    Button,
    Heading,
    HStack,
    Icon,
    IconButton,
    Text,
    View,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailReader from "../../components/Composite/DetailReader/DetailReader";
import { RootStackScreenProps } from "../../navigation/types";
import DetailActions from "../../components/Composite/DetailActions/DetailActions";
import AvatarLabel from "../../components/Primitive/AvatarLabel/AvatarLabel";
import { uri } from "../../utils/uri";
import TextDotSeparator from "../../components/Primitive/TextDotSeparator/TextDotSeparator";
import { Ionicons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import HeaderNavbar from "../../components/Primitive/HeaderNavBar/HeaderNavbar";
import { useAnimatedCollapsingHeaderFooter } from "./useAnimatedCollapsingHeaderFooter";
import Divider from "native-base/src/components/composites/Divider";
import CardFeedContainer from "../../containers/CardFeedContainer";
import FeedCardHorizontal from "../../components/Composite/Cards/FeedCardHorizontal/FeedCardHorizontal";

export type DetailProps = {} & RootStackScreenProps<"Detail">;

const AnimatedBox = Animated.createAnimatedComponent(Box);
const data = new Array(10)
    .fill(0)
    .map((i, index) => ({ id: index, title: ` title n0 ${index}` }));

const Detail: React.FC<DetailProps> = ({ navigation }) => {
    const {
        footerAnimatedStyles,
        headerAnimatedStyles,
        headerRightAnimatedStyles,
        scrollHandler,
        setBreakPoints,
    } = useAnimatedCollapsingHeaderFooter();

    return (
        <SafeAreaView>
            <AnimatedBox
                bgColor="#fff"
                zIndex={3}
                position="absolute"
                top={3}
                left={0}
                right={0}
                py={3}
                style={headerAnimatedStyles}
            >
                <HeaderNavbar
                    backButton={
                        <HStack space={2} alignItems="center">
                            <IconButton
                                fontVariant="small-caps"
                                colorScheme="coolGray"
                                icon={
                                    <Icon
                                        as={Ionicons}
                                        name="ios-arrow-back-outline"
                                    />
                                }
                            />
                            <AnimatedBox style={headerRightAnimatedStyles}>
                                <Heading fontSize="md" color="coolGray.700">
                                    Lorem ipsum
                                </Heading>
                            </AnimatedBox>
                        </HStack>
                    }
                    rightHeader={
                        <AnimatedBox style={headerRightAnimatedStyles}>
                            <HStack space="3">
                                <Button
                                    bgColor="primary.500"
                                    size="sm"
                                    borderRadius="full"
                                >
                                    S'abonner
                                </Button>
                                <IconButton
                                    // size="sm"
                                    fontVariant="small-caps"
                                    colorScheme="coolGray"
                                    icon={
                                        <Icon
                                            as={Ionicons}
                                            name="ellipsis-vertical"
                                        />
                                    }
                                />
                            </HStack>
                        </AnimatedBox>
                    }
                />
            </AnimatedBox>
            <Animated.FlatList
                bounces={false}
                ListHeaderComponent={
                    <View>
                        <View mt="16" p={3} onLayout={setBreakPoints}>
                            <AvatarLabel
                                p={2}
                                my={3}
                                source={uri}
                                avatarProps={{
                                    size: "md",
                                }}
                                titleProps={{
                                    fontSize: "md",
                                }}
                                subTitleProps={{
                                    fontSize: "sm",
                                }}
                                title={
                                    <HStack
                                        flex={1}
                                        space="7"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Text
                                            isTruncated
                                            fontSize="lg"
                                            color="coolGray.700"
                                        >
                                            Lorem ipsum
                                        </Text>
                                        <Button
                                            bgColor="primary.500"
                                            size="sm"
                                            borderRadius="full"
                                        >
                                            S'abonner
                                        </Button>
                                    </HStack>
                                }
                                subTitle={
                                    <HStack>
                                        <TextDotSeparator>
                                            <View>
                                                <IconButton
                                                    size="sm"
                                                    fontVariant="small-caps"
                                                    colorScheme="coolGray"
                                                    icon={
                                                        <Icon
                                                            as={Ionicons}
                                                            name="md-bookmark"
                                                        />
                                                    }
                                                />
                                            </View>
                                            <Text color="coolGray.600">
                                                Il y a 2 jours
                                            </Text>
                                            <Text color="coolGray.600">
                                                description
                                            </Text>
                                        </TextDotSeparator>
                                    </HStack>
                                }
                                action={
                                    <View>
                                        <IconButton
                                            // size="sm"
                                            fontVariant="small-caps"
                                            colorScheme="coolGray"
                                            icon={
                                                <Icon
                                                    as={Ionicons}
                                                    name="ellipsis-horizontal"
                                                />
                                            }
                                        />
                                    </View>
                                }
                            />
                        </View>
                        <DetailReader
                            title="Syllabus de spychologie 2021: unilu l1"
                            tagues="#bienfait #unilu #spychologie_de_travail"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium explicabo voluptatibus ut? Commodi corporis unde sunt repudiandae dolores temporibus, molestiae quisquam quae voluptatum facilis eligendi officiis quidem nulla molestias libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium explicabo voluptatibus ut? Commodi corporis unde sunt repudiandae dolores temporibus, molestiae quisquam quae voluptatum facilis eligendi officiis quidem nulla molestias libero!"
                        />

                        <Box px={4} py={2} mb={3}>
                            <Text
                                fontWeight="medium"
                                fontSize="lg"
                                color="coolGray.700"
                            >
                                Dans le meme contexte
                            </Text>
                        </Box>
                    </View>
                }
                onScroll={scrollHandler}
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ index, item }) => {
                    return (
                        <>
                            {index !== 0 && <Divider color="amber.300" />}
                            <CardFeedContainer
                                onPress={(post) =>
                                    navigation.navigate("Detail", { post })
                                }
                            >
                                <FeedCardHorizontal py={2} />
                            </CardFeedContainer>
                        </>
                    );
                }}
            />
            <AnimatedBox
                style={footerAnimatedStyles}
                bg="white"
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                flex={1}
            >
                <DetailActions />
            </AnimatedBox>
        </SafeAreaView>
    );
};

Detail.displayName = "Detail";
export default Detail;
