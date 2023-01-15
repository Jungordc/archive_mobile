/** @format */

import React from "react";
import { View, Text, HStack, Image } from "native-base";
import IconButton from "../../Primitive/IconButton/IconButton";
import Chip from "../../Primitive/Chip/Chip";

type CoverItemProps = {};

const CoverItem: React.FC<CoverItemProps> = ({ ...props }) => {
    return (
        <View p="3" position="relative">
            <View position="absolute" zIndex={1} right={1}>
                <Chip
                    w="40"
                    borderWidth="4"
                    borderColor="white"
                    justifyContent="center"
                >
                    Couverture
                </Chip>
            </View>
            <View h="64" w="full" borderRadius="lg">
                <Image
                    height="full"
                    width="full"
                    alt="Cover"
                    borderRadius="lg"
                    source={{
                        uri: "https://www.bing.com/th?id=OIP.XNDdJDXwaC_xgNMWF-8jSgHaE8&w=162&h=106&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
                    }}
                />
            </View>
        </View>
    );
};

export default CoverItem;
