/** @format */

import React from "react";
import { View, Text, Heading } from "native-base";
import Divider from "native-base/src/components/composites/Divider";
import {
    BottomSheetModal,
    TouchableOpacity,
    BottomSheetFlatList,
    BottomSheetFooter,
} from "@gorhom/bottom-sheet";

import { ComonBottomSheetType } from "../Types";
import CommentReplay from "../../CommentReplay/CommentReplay";
import CommentInput from "../../Comment/CommentInput";

export type CommentBottonSheetProps = {} & ComonBottomSheetType;

const data = new Array(10).fill(0).map((_, index) => ({ id: `${index}` }));

const CommentBottonSheet = React.forwardRef<
    BottomSheetModal,
    CommentBottonSheetProps
>(({ snapPoints = [], ...props }, ref) => {
    const renderFooter = React.useCallback(
        (props) => (
            <BottomSheetFooter {...props}>
                <View bgColor="white" flex={1}>
                    <CommentInput />
                </View>
            </BottomSheetFooter>
        ),
        []
    );
    return (
        <BottomSheetModal
            ref={ref}
            snapPoints={snapPoints}
            footerComponent={renderFooter}
        >
            <View flex={1} position="relative">
                <View px="2" flex={1}>
                    <Heading color="coolGray.700" fontSize="lg" mb="2">
                        Commentaires
                    </Heading>
                    <Divider mr="5" mb="3" />
                    <BottomSheetFlatList
                        data={data}
                        keyExtractor={(i) => i.id}
                        renderItem={({ item, index }) => {
                            return (
                                <CommentReplay
                                    replays={index === 1 ? [1, 2, 3] : []}
                                />
                            );
                        }}
                    />
                </View>
            </View>
        </BottomSheetModal>
    );
});

export default CommentBottonSheet;
