/** @format */
import React from "react";
import useBottomSheetActions from "../../components/Composite/BottomSheets/Modals/useBottomSheetActions";
import ChangeAuthorBottomSheet, {
    ChangeAuthorBottomSheetProps,
} from "../../components/Composite/BottomSheets/Modals/ChangeAuthorBottomSheet";
import ChangeAuthor, {
    ChangeAuthorProps,
} from "../../components/Composite/ButtonsActions/ChangeAuthor";

export type ChangeAuthorActifBottomSheetProps = {
    btnProps?: ChangeAuthorProps;
} & ChangeAuthorBottomSheetProps;

const ChangeAuthorActifBottomSheet: React.FC<
    ChangeAuthorActifBottomSheetProps
> = ({ btnProps, onConfirm, ...props }) => {
    const onChangeAuthor = React.useCallback((authorId: string) => {
        onConfirm?.(authorId);
        savePostBottonSheet.onClose();
    }, []);

    const savePostBottonSheet = useBottomSheetActions({});
    return (
        <>
            <ChangeAuthor onPress={savePostBottonSheet.onOpen} {...btnProps} />
            <ChangeAuthorBottomSheet
                ref={savePostBottonSheet.ref}
                snapPoints={savePostBottonSheet.snapPoints}
                onConfirm={onChangeAuthor}
                {...props}
            />
        </>
    );
};

export default ChangeAuthorActifBottomSheet;
