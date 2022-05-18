/** @format */
import { ScrollView, TextInput, View } from "react-native";
import {
    Box,
    FlatList,
    Heading,
    HStack,
    Icon,
    Pressable,
    Text,
    VStack,
} from "native-base";
import React from "react";
import ImageViewInput from "../ImageViewInput/ImageViewInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import InputActions from "../InputActions/InputActions";

export type EditorProps = {};

const Editor = () => {
    const data = new Array(5).fill(0);
    return (
        <React.Fragment>
            <ScrollView>
                <Box flex={1}>
                    <HStack p={2} space={2} my={5}>
                        <View
                            style={{
                                height: 50,
                                width: 50,
                                backgroundColor: "red",
                                borderRadius: 50,
                            }}
                        />
                        <TextInput
                            style={{ fontSize: 20 }}
                            placeholder="Ajouter un titre..."
                        />
                    </HStack>
                    <Box ml={47} p={2}>
                        <HStack space={2} alignItems="center">
                            <Icon
                                as={Ionicons}
                                color="primary.500"
                                name="documents"
                                mt={1}
                            />
                            <Text color="primary.500" fontSize="2xs">
                                Documments...
                            </Text>
                        </HStack>
                    </Box>
                    <FlatList
                        maxH={230}
                        bounces={false}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ListHeaderComponent={<Box w={45} />}
                        data={data}
                        renderItem={() => {
                            return <ImageViewInput />;
                        }}
                    />
                    <Box ml={47} p={2}>
                        <VStack mt={2}>
                            <HStack my={3} space={1} minH={100} maxH={120}>
                                <Icon as={Ionicons} name="book-sharp" mt={1} />
                                <TextInput
                                    multiline
                                    style={{
                                        fontSize: 14,
                                        flex: 1,
                                        textAlignVertical: "top",
                                    }}
                                    placeholder="Description..."
                                    autoCorrect={false}
                                />
                            </HStack>

                            <Box>
                                <Pressable
                                    p={1}
                                    px={4}
                                    borderRadius="full"
                                    borderColor="primary.500"
                                    borderWidth={1}
                                >
                                    <HStack space={2} alignItems="center">
                                        <Icon
                                            as={Ionicons}
                                            color="primary.500"
                                            name="images"
                                            mt={1}
                                        />
                                        <Text
                                            color="primary.500"
                                            fontSize="2xs"
                                        >
                                            Photo de coverture
                                        </Text>
                                    </HStack>
                                </Pressable>
                                <ImageViewInput h={300} w={280} />
                            </Box>
                        </VStack>
                    </Box>
                </Box>
                <Box h="24" />
            </ScrollView>
            <Box
                position="absolute"
                left={0}
                bottom={0}
                flex={1}
                w="100%"
                p={2}
                borderTopColor="coolGray.300"
                borderTopWidth={1}
                bg="white"
            >
                <InputActions />
            </Box>
        </React.Fragment>
    );
};

export default Editor;
