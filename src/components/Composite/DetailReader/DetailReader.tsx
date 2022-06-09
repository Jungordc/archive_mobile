/** @format */

import { Box, Text, VStack, Heading, View } from "native-base";
import React from "react";
import Image from "../../../../packages/image-container-plus/components/Image";

export type DetailReaderProps = {
    tagues?: string;
    title: string;
    source?: any;
    description?: string;
};
const DetailReader: React.FC<DetailReaderProps> = ({
    source,
    title,
    description,
    tagues,
}) => {
    return (
        <Box flex={1}>
            <VStack mb={3} p={3}>
                <Heading fontSize="4xl" lineHeight="md" color="coolGray.800">
                    {title}
                </Heading>
                <Text fontSize="sm" color="blue.600">
                    {tagues}
                </Text>
            </VStack>
            <Box flex={1} m={3}>
                <View h={200} w="100%">
                    <Image />
                </View>
            </Box>
            <Box p={2}>
                <Box m={3}>
                    <Text
                        lineHeight="lg"
                        color="coolGray.600"
                        textAlign="justify"
                    >
                        {description}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

DetailReader.displayName = "DetailReader";
export default DetailReader;
