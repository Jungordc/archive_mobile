/** @format */

import React from "react";
import { Box, Input } from "native-base";
import Comment from "../Comment/Comment";

export type CommentReplayProps = {
    replays?: any[];
};

const CommentReplay: React.FC<CommentReplayProps> = ({ replays }) => {
    const [comment, setComment] = React.useState<boolean>(false);
    const onReplay = React.useCallback((id: string | number) => {
        setComment(false);
    }, []);

    const onpenEditor = React.useCallback(() => setComment(true), []);
    return (
        <Box bg="#fff" p={1} borderRadius="sm">
            <Comment
                onReplay={onpenEditor}
                children={
                    <React.Fragment>
                        {replays?.map((item, index) => {
                            return (
                                <Comment
                                    key={`key${index}`}
                                    onReplay={onpenEditor}
                                />
                            );
                        })}
                        {comment && (
                            <Box>
                                <Input
                                    borderRadius="full"
                                    bg="coolGray.200"
                                    borderColor="coolGray.200"
                                    focusOutlineColor="coolGray.100"
                                    onSubmitEditing={() => onReplay(2)}
                                />
                            </Box>
                        )}
                    </React.Fragment>
                }
            />
        </Box>
    );
};

export default CommentReplay;
