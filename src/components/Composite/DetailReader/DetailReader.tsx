/** @format */

import { Box, Text, Image, VStack } from "native-base";
import React from "react";
import CardAction from "../CardAction/CardAction";

export type DetailReaderProps = {};

const uri = {
    uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
};
const DetailReader: React.FC<DetailReaderProps> = ({}) => {
    return (
        <Box flex={1}>
            <Box flex={1} my={2}>
                <Image alt="image" source={uri} w="100%" h={200} />
            </Box>
            {/* <CardAction
                justifyContent="space-between"
                actions={[
                    {
                        label: "aimes",
                        icon: "md-heart-outline",
                        labelProps: {},
                        iconProps: { size: "md" },
                    },
                    {
                        label: "vues",
                        icon: "eye-outline",
                        labelProps: {},
                        iconProps: { size: "md" },
                    },
                    {
                        label: "commentaires",
                        icon: "chatbox-outline",
                        labelProps: {},
                        iconProps: { size: "md" },
                    },
                    {
                        label: "partages",
                        icon: "md-arrow-redo-outline",
                        labelProps: {},
                        iconProps: { size: "md" },
                    },
                ]}
            /> */}
            <Box p={2}>
                <VStack mb={3}>
                    <Text
                        fontWeight="medium"
                        fontSize="2xl"
                        color="coolGray.800"
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit.
                    </Text>
                    <Text color="blue.600">
                        #items #medecin #stPrierre #2030
                    </Text>
                </VStack>
                <Box>
                    <Text color="coolGray.700" textAlign="justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur, consectetur molestiae voluptatibus est vel
                        iusto dignissimos. Quisquam iure illo consequuntur,
                        ullam necessitatibus, doloribus fuga aliquam provident
                        corrupti hic alias velit.
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

DetailReader.displayName = "DetailReader";
export default DetailReader;
