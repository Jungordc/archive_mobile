/** @format */

import React from "react";
import useBottomSheetActions from "../../components/Composite/BottomSheets/Modals/useBottomSheetActions";
import CommentBottonSheet from "../../components/Composite/BottomSheets/Modals/CommentBottonSheet";
import CommentButton, {
    CommentButtonProps,
} from "../../components/Composite/ButtonsActions/CommentButton";

export type CommentButtonSheetProps = {
    btnProps?: CommentButtonProps;
};

const CommentButtonSheet: React.FC<CommentButtonSheetProps> = ({
    btnProps,
}) => {
    const actionBottonSheet = useBottomSheetActions({
        snapPoints: ["70%", "97%"],
    });

    return (
        <>
            <CommentButton onPress={actionBottonSheet.onOpen} {...btnProps} />
            <CommentBottonSheet
                snapPoints={actionBottonSheet.snapPoints}
                ref={actionBottonSheet.ref}
            />
        </>
    );
};

export default CommentButtonSheet;
