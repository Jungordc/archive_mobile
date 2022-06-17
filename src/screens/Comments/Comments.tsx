/** @format */

import React from "react";
import { FlatList } from "react-native";
import { View, Text, Heading } from "native-base";
import CommentReplay from "../../components/Composite/CommentReplay/CommentReplay";
import CommentInput from "../../components/Composite/Comment/CommentInput";

export type CommentsProps = {};

const Comments: React.FC<CommentsProps> = ({}) => {
    const data = new Array(10).fill(0).map((_, index) => ({ id: `${index}` }));

    return (
        <View flex={1}>
            <FlatList
                bounces={false}
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(i) => i.id}
                renderItem={({ item, index }) => {
                    return (
                        <CommentReplay replays={index === 1 ? [1, 2, 3] : []} />
                    );
                }}
            />
            <View
                flex={1}
                position="absolute"
                zIndex={5}
                bottom={0}
                right={0}
                left={0}
                bg="white"
                borderTopColor="coolGray.200"
                borderTopWidth={0.5}
            >
                <CommentInput />
            </View>
        </View>
    );
};

export default Comments;
