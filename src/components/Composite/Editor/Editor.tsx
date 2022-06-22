/** @format */
import { ScrollView } from "react-native";
import { Box, HStack, Icon, Text, VStack, View } from "native-base";
import React from "react";
import Tags from "react-native-tags";
import ImageViewInput from "../ImageViewInput/ImageViewInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import InputActions from "../InputActions/InputActions";
import InputTitle from "../../Primitive/InputTitle/InputTitle";
import ImageContainers from "../../../../packages/image-container-plus/ImageContainers";
import Chip from "../../Primitive/Chip/Chip";
import InputTitleUtils from "../../Primitive/InputTitle/InputTitleUtils";

import { uri } from "../../../utils/uri";
import ProfileImages from "../ProfileImages/ProfileImages";

export type EditorProps = {};

const Editor: React.FC<EditorProps> = () => {
    const data = new Array(6).fill(0).map((i) => uri);

    return (
        <React.Fragment>
            <ScrollView>
                <ProfileImages edit showAvatar={false} />
                <Box flex={1}>
                    <View mx={1}>
                        <InputTitle
                            textInputProps={{
                                placeholder: "Titre",
                            }}
                        />
                    </View>
                    <View mx={1}>
                        <InputTitle
                            textInputProps={{
                                placeholder: "Description",
                                multiline: true,
                                style: {
                                    fontSize: 16,
                                    color: "#626262",
                                },
                            }}
                        />
                    </View>
                    <Box ml={47} p={2}>
                        <VStack space={4}>
                            <HStack space={2} alignItems="center">
                                <Icon
                                    as={Ionicons}
                                    color="coolGray.400"
                                    name="documents"
                                    mt={1}
                                />
                                <Text color="coolGray.500" fontSize="2xs">
                                    Documments...
                                </Text>
                            </HStack>
                            <ImageContainers images={data} height="56" />
                        </VStack>
                    </Box>

                    {/* <FlatList
                        maxH={230}
                        bounces={false}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        ListHeaderComponent={<Box w={45} />}
                        data={data}
                        renderItem={() => {
                            return <ImageViewInput />;
                        }}
                    /> */}
                    <Box>
                        <InputTitleUtils max={6}>
                            <Tags
                                initialText="monkey"
                                textInputProps={{
                                    placeholder: "Any type of animal",
                                }}
                                initialTags={["dog", "cat", "chicken"]}
                                onChangeTags={(tags) => console.log(tags)}
                                onTagPress={(index, tagLabel, event, deleted) =>
                                    console.log(
                                        index,
                                        tagLabel,
                                        event,
                                        deleted ? "deleted" : "not deleted"
                                    )
                                }
                                containerStyle={
                                    {
                                        // justifyContent: "center",
                                    }
                                }
                                inputStyle={{
                                    backgroundColor: "transparent",
                                }}
                                renderTag={({
                                    tag,
                                    index,
                                    onPress,
                                    deleteTagOnPress,
                                    readonly,
                                }) => (
                                    <Chip key={index} ml={2}>
                                        {tag}
                                    </Chip>
                                )}
                            />
                        </InputTitleUtils>
                    </Box>
                    {/* <Box ml={47} p={2}>
                        <VStack mt={2}>
                            <Box my={3}></Box>
                            <Box>
                                <HStack space={2} alignItems="center">
                                    <Icon
                                        as={Ionicons}
                                        color="coolGray.400"
                                        name="images"
                                        mt={1}
                                    />
                                    <Text color="coolGray.500" fontSize="2xs">
                                        Photo de coverture
                                    </Text>
                                </HStack>
                                <ImageViewInput h={300} w={280} />
                            </Box>
                        </VStack>
                    </Box> */}
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
