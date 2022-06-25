/** @format */

import React from "react";
import { FlatList } from "react-native";
import { View, Text, Heading } from "native-base";
import CommentReplay from "../../components/Composite/CommentReplay/CommentReplay";
import { CommentItem, CommentInput } from "../../components/Composite/Comment";
import useFakeData from "../../services/faceData";
import { CommentPreProcessor } from "../../components/Composite/Comment/core";
import { comments } from "../../components/Composite/Comment/commet.data.json";

export type CommentsProps = {};

const Comments: React.FC<CommentsProps> = ({}) => {
    const data = new CommentPreProcessor(comments);

    return (
        <View flex={1}>
            <FlatList
                bounces={false}
                showsVerticalScrollIndicator={false}
                data={data.detCommentPreProcessed()}
                keyExtractor={(i) => i.id.toString()}
                renderItem={({ item, index }) => {
                    return <CommentItem {...item} />;
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
