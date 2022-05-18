/** @format */

import { Box, Image, Avatar } from "native-base";
import { InterfaceBoxProps } from "native-base/lib/typescript/components/primitives/Box/types";
import React from "react";
import AvatarLabel from "../../Primitive/AvatarLabel/AvatarLabel";

type AuthorProps = {} & InterfaceBoxProps;

const uri = {
    uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
};

const Author: React.FC<AuthorProps> = ({ ...boxProps }) => {
    return (
        <Box flex={1} {...boxProps}>
            <Box>
                <Image alt="cover" borderRadius="md" source={uri} h="24" />
                <AvatarLabel
                    mt={2}
                    source={uri}
                    title="Author Archive"
                    subTitle="Bibliotheque | 200 contenus | 300 j'aimes"
                />
            </Box>
        </Box>
    );
};

export default Author;
