/** @format */

import {
    FlatList,
    ScrollView,
    Animated,
    LayoutRectangle,
    Dimensions,
    StatusBar,
} from "react-native";
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
import { useHeaderHeight } from "@react-navigation/elements";
import DetailReader from "../../components/Composite/DetailReader/DetailReader";
import { RootStackScreenProps } from "../../navigation/types";
import Card from "../../components/Composite/Card/Card";
import CommentReplay from "../../components/Composite/CommentReplay/CommentReplay";
import DetailActions from "../../components/Composite/DetailActions/DetailActions";
import AvatarLabel from "../../components/Primitive/AvatarLabel/AvatarLabel";
import { uri } from "../../utils/uri";
import TextDotSeparator from "../../components/Primitive/TextDotSeparator/TextDotSeparator";
import { Ionicons } from "@expo/vector-icons";

export type DetailProps = {} & RootStackScreenProps<"Detail">;

const { height, width } = Dimensions.get("window");

const AnimatedBox = Animated.createAnimatedComponent(Box);

const Detail: React.FC<DetailProps> = ({ navigation }) => {
    const [bottomActions, setBottomActions] = React.useState<
        LayoutRectangle | undefined
    >(undefined);
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const headerHeight = useHeaderHeight();
    const topEdge =
        (bottomActions?.y || 0) -
        height +
        (bottomActions?.height || 0) +
        headerHeight -
        (StatusBar.currentHeight || 24) +
        5;
    const data = new Array(10)
        .fill(0)
        .map((i, index) => ({ id: index, title: ` title n0 ${index}` }));
    return (
        <Box>
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
                <View p={3}>
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
                <DetailReader />

                <Box p={2} mb={3}>
                    <Text
                        fontWeight="medium"
                        fontSize="lg"
                        color="coolGray.700"
                    >
                        Sujet Similaires
                    </Text>
                </Box>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginHorizontal: 5 }}
                    data={data}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ index, item }) => {
                        return (
                            <Card
                                m={1}
                                maxW={200}
                                onPress={() => {
                                    navigation.navigate("Detail", {
                                        post: index,
                                    });
                                }}
                            />
                        );
                    }}
                />
                <Box
                    my={5}
                    onLayout={(event) =>
                        setBottomActions(event.nativeEvent.layout)
                    }
                    bg="amber.800"
                    h={50}
                />
                <Box p={2} mb={3}>
                    <Text
                        fontWeight="medium"
                        fontSize="lg"
                        color="coolGray.700"
                    >
                        Commentaires
                    </Text>
                </Box>
                <Box p={2}>
                    <CommentReplay />
                    <CommentReplay replays={[1, 2]} />
                    <CommentReplay />
                </Box>
            </Animated.ScrollView>
            {bottomActions && (
                <AnimatedBox
                    // onLayout={(event) => console.log(event.nativeEvent.layout)}
                    bg="rgba(225,225,2,0.4)"
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    flex={1}
                    style={{
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [
                                        -1,
                                        0,
                                        topEdge - 1,
                                        topEdge,
                                        topEdge + 1,
                                    ],
                                    outputRange: [0, 0, 0, 0, -1],
                                }),
                            },
                        ],
                    }}
                    // w="100%"
                >
                    {/* <Heading>hello</Heading> */}
                    <DetailActions />
                </AnimatedBox>
            )}
        </Box>
    );
};

Detail.displayName = "Detail";
export default Detail;
