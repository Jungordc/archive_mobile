/** @format */

import React from "react";
import { View, Text, Heading } from "native-base";
import {
    BottomSheetModal,
    TouchableOpacity,
    BottomSheetFlatList,
    BottomSheetFooter,
} from "@gorhom/bottom-sheet";
import { ComonBottomSheetType } from "../Types";

export type ShareBottonSheetProps = {} & ComonBottomSheetType;

const ShareBottonSheet = React.forwardRef<
    BottomSheetModal,
    ShareBottonSheetProps
>(({ snapPoints = [], ...props }, ref) => {
    return (
        <BottomSheetModal ref={ref} snapPoints={snapPoints}>
            <View flex={1} position="relative">
                <View px="2" flex={1}></View>
                <Heading>Share ...</Heading>
            </View>
        </BottomSheetModal>
    );
});

export default ShareBottonSheet;
