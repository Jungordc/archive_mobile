/** @format */
import React from "react";
import useBottomSheetActions from "../../components/Composite/BottomSheets/Modals/useBottomSheetActions";
import SavePostBottomSheet from "../../components/Composite/BottomSheets/Modals/SavePostBottomSheet";
import SaveButton, {
    SaveButtonProps,
} from "../../components/Composite/ButtonsActions/SaveButton";

export type SaveButtonBottomSheetProps = {
    btnProps?: SaveButtonProps;
    onSaved?(toogle: boolean): void;
    initialValue?: boolean;
};
const SaveButtonBottomSheet: React.FC<SaveButtonBottomSheetProps> = ({
    btnProps,
    onSaved,
    initialValue,
}) => {
    const [saved, setSaved] = React.useState<boolean>(initialValue || false);
    const onSavedChange = React.useCallback(() => {
        setSaved((state) => {
            const newState = !state;
            onSaved?.(newState);
            return newState;
        });
    }, []);

    const savePostBottonSheet = useBottomSheetActions({
        onOpen(present) {
            !saved ? present() : onSavedChange();
        },
        onClose(close) {
            onSavedChange();
            close();
        },
    });
    return (
        <>
            <SaveButton
                saved={saved}
                onPress={savePostBottonSheet.onOpen}
                {...btnProps}
            />
            <SavePostBottomSheet
                ref={savePostBottonSheet.ref}
                snapPoints={savePostBottonSheet.snapPoints}
                onConfirm={savePostBottonSheet.onClose}
            />
        </>
    );
};

export default SaveButtonBottomSheet;
