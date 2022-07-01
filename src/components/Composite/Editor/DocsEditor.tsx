/** @format */

import React from "react";
import { FlatList, Dimensions } from "react-native";
import { View } from "native-base/src/components/basic/View";
import Image from "../../../../packages/image-container-plus/components/Image";
import IconButton from "../../Primitive/IconButton/IconButton";
import RootContainer from "../../Primitive/RootContainer/Container";

interface DocsEditorProps {
    docs?: string[];
}

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

const DocsEditor: React.FC<DocsEditorProps> = ({ docs = [], ...props }) => {
    const data = docs.map((i) => ({ uri: i }));
    return (
        <RootContainer>
            <View position="absolute" top="9" right="3">
                <IconButton rounded="full" iconName="close" variant="solid" />
            </View>
            <FlatList
                horizontal
                bounces
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View
                            flex={1}
                            height={HEIGHT}
                            width={WIDTH}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <View h={300} w="100%" m="4" p="2">
                                <Image borderRadius="none" source={item} />
                            </View>
                        </View>
                    );
                }}
            />
        </RootContainer>
    );
};

export default DocsEditor;
