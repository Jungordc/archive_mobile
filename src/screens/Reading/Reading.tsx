/** @format */

import React from "react";
import { View, Text } from "native-base";
import { RootStackScreenProps } from "../../navigation/types";

export type ReadingProps = {} & RootStackScreenProps<"Reading">;

const Reading: React.FC<ReadingProps> = () => {
    return (
        <View>
            <Text>Reading</Text>
        </View>
    );
};

export default Reading;
