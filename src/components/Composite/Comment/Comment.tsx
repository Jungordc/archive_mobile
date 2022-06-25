/** @format */

import { Avatar, Box, HStack, Text, VStack } from "native-base";
import { View } from "native-base/src/components/basic/View";
import { InterfaceViewProps } from "native-base/src/components/basic/View/types";
import { InterfaceHStackProps } from "native-base/src/components/primitives/Stack/HStack";
import { InterfaceTextProps } from "native-base/src/components/primitives/Text/types";
import React from "react";
import { uri } from "../../../utils/uri";
import IconLabel from "../../Primitive/IconLabel/IconLabel";
import TextDotSeparator from "../../Primitive/TextDotSeparator/TextDotSeparator";
import { newValueType } from "./core";
import keys from "lodash/keys";

export type CommentProps = {} & newValueType;

const LineViewProps: InterfaceViewProps = {
    borderLeftWidth: "2",
    borderBottomWidth: "2",
    borderBottomLeftRadius: "2xl",
    borderColor: "coolGray.300",
    pb: "3",
    h: "5",
};

const UsernameText: React.FC<InterfaceTextProps> = (props) => (
    <Text fontWeight="bold" fontSize="md" color="coolGray.800" {...props} />
);

const MoreWhiteAvatar: React.FC<InterfaceHStackProps> = ({ ...props }) => {
    return (
        <HStack flex={1} alignItems="center" {...props} space="2">
            <Avatar size="xs" />
            <UsernameText>User archive 2</UsernameText>
            <Text isTruncated fontSize="md" color="coolGray.700">
                {" "}
                je suis tres contant facebook ctrl+c
            </Text>
        </HStack>
    );
};

type ContainerMoreWithLineProps = {
    containerProps?: InterfaceViewProps;
};
const ContainerMoreWithLine: React.FC<ContainerMoreWithLineProps> = ({
    children,
    containerProps,
}) => {
    return (
        <View flex={1} position="relative">
            <View flex={1} marginLeft={-0.5} {...LineViewProps} />
            <View
                flex={1}
                mt={-4}
                ml="6"
                bgColor="white"
                pl="2"
                {...containerProps}
            >
                {children}
            </View>
        </View>
    );
};

export type ContainerTextCommentProps = {} & InterfaceViewProps;
const ContainerTextComment = React.forwardRef<any, ContainerTextCommentProps>(
    ({ ...props }, ref) => {
        return (
            <View flex={1} ref={ref} ml="6" {...props}>
                <Box bg="coolGray.100" px={4} py={2} borderRadius="3xl">
                    <UsernameText>User archive</UsernameText>
                    <Text color="coolGray.800" fontSize="md" mb={2}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Commodi alias corporis rem sed? Laudantium enim,
                        distinctio eligendi voluptate pariatur dolores quisquam
                        aperiam iusto magnam tempora quas repudiandae illum
                        deserunt animi.
                    </Text>
                </Box>
                <HStack pl="5" space={3} my={2}>
                    <TextDotSeparator>
                        <Text color="coolGray.600" fontSize="sm">
                            2j
                        </Text>
                        <Text color="coolGray.600" fontSize="sm">
                            Aimer
                        </Text>
                        <Text color="coolGray.600" fontSize="sm">
                            Repondre
                        </Text>
                    </TextDotSeparator>
                    <IconLabel
                        iconProps={{
                            size: "sm",
                        }}
                        labelProps={{
                            color: "coolGray.600",
                            fontSize: "sm",
                        }}
                        labelPosition="Left"
                        label="23"
                        icon="heart"
                    />
                </HStack>
            </View>
        );
    }
);

const Comment: React.FC<CommentProps> = ({
    depthOptions,
    id,
    root,
    text_content,
    user,
}) => {
    const depthsList = keys(depthOptions).sort();
    return (
        <View mx="2" bgColor="amber.200" flex={1}>
            <HStack space="2" flex={1}>
                <HStack>
                    {depthsList.map((item) => {
                        const values = depthOptions[item];
                        return (
                            <View
                                key={item}
                                position="relative"
                                bgColor="blue.300"
                                width="10"
                            >
                                {values.avatar && (
                                    <Avatar
                                        source={uri}
                                        size="sm"
                                        zIndex="1"
                                        borderColor="white"
                                        borderWidth="2"
                                    />
                                )}
                                {values.isResponce && (
                                    <View
                                        // zIndex="1"
                                        height={10}
                                        width={10}
                                        bgColor="blue.600"
                                    >
                                        <View
                                            // bg="red.900"
                                            position="absolute"
                                            top={0}
                                            left="50%"
                                            h={5}
                                            w="50%"
                                            borderLeftColor="coolGray.900"
                                            borderBottomColor="coolGray.900"
                                            borderBottomWidth="3"
                                            borderLeftWidth="3"
                                            borderBottomLeftRadius="2xl"
                                        />
                                    </View>
                                )}
                                {values.haveResponce && (
                                    <View
                                        height="100%"
                                        w="1"
                                        bgColor="black"
                                        position="absolute"
                                        top="0"
                                        bottom="0"
                                        right="50%"
                                        left="50%"
                                    />
                                )}
                            </View>
                        );
                    })}
                </HStack>
                <View flex={1}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Deserunt nemo, distinctio quia quod earum
                        perferendis, dicta iure eos consequuntur magni sequi!
                        Nesciunt possimus rerum quasi sequi nostrum velit vel
                        dolores?
                    </Text>
                </View>
            </HStack>
        </View>
        // <Box flex={1} position="relative" mb="4">
        //     <VStack mr={2}>
        //         <View
        //             bg="white"
        //             zIndex={10}
        //             position="absolute"
        //             top={0}
        //             left={0}
        //             py="2"
        //             borderRadius="full"
        //         >
        //             <Avatar source={uri} size="sm" />
        //         </View>
        //         <View
        //             // bg="amber.50"
        //             ml="4"
        //             borderLeftWidth="2"
        //             borderBottomLeftRadius="2xl"
        //             borderColor="coolGray.300"
        //             pb="3"
        //         >
        //             <ContainerTextComment />
        //             <View mb={-6}>
        //                 <ContainerMoreWithLine>
        //                     <MoreWhiteAvatar />
        //                 </ContainerMoreWithLine>
        //                 <ContainerMoreWithLine>
        //                     <View position="relative">
        //                         <HStack space={2}>
        //                             <Avatar size="sm" />
        //                             <ContainerTextComment ml={0} />
        //                         </HStack>
        //                     </View>
        //                 </ContainerMoreWithLine>
        //                 <ContainerMoreWithLine
        //                     containerProps={{
        //                         mt: -3,
        //                     }}
        //                 >
        //                     <Text fontSize="md" color="coolGray.700">
        //                         Voir 2 autres reponse...
        //                     </Text>
        //                 </ContainerMoreWithLine>
        //             </View>
        //         </View>
        //     </VStack>
        // </Box>
    );
};

Comment.displayName = "Comment";
export default Comment;
