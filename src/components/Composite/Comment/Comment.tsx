/** @format */

import { Box, HStack, Text, VStack } from "native-base";
import React from "react";
import AvatarLabel from "../../Primitive/AvatarLabel/AvatarLabel";

export type CommentProps = {
    onReplay?(): void;
};

const uri = {
    uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
};

const Comment: React.FC<CommentProps> = ({ children, onReplay }) => {
    return (
        <Box flex={1}>
            <VStack mr={2}>
                <HStack justifyContent="space-between" alignItems="center">
                    <AvatarLabel
                        source={uri}
                        avatarProps={{
                            size: "md",
                        }}
                        title="user archive"
                        titleProps={{
                            color: "coolGray.800",
                            fontWeight: "medium",
                            fontSize: "sm",
                        }}
                    />
                    <Text fontSize="2xs">12 min</Text>
                </HStack>
                <Box marginLeft={55}>
                    <Text
                        color="coolGray.600"
                        fontSize={12}
                        textAlign="justify"
                        mb={2}
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Commodi alias corporis rem sed? Laudantium enim,
                        distinctio eligendi voluptate pariatur dolores quisquam
                        aperiam iusto magnam tempora quas repudiandae illum
                        deserunt animi.
                    </Text>
                    <HStack space={3} my={2}>
                        <Text color="coolGray.600" fontSize="sm">
                            Aimer
                        </Text>
                        <Text
                            color="coolGray.600"
                            fontSize="sm"
                            onPress={onReplay}
                        >
                            Repondre
                        </Text>
                    </HStack>
                    {children}
                </Box>
            </VStack>
        </Box>
    );
};

Comment.displayName = "Comment";
export default Comment;
