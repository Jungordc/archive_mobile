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
};
const SaveButtonBottomSheet: React.FC<SaveButtonBottomSheetProps> = ({
    btnProps,
    onSaved,
    ...props
}) => {
    const [saved, setSaved] = React.useState<boolean>(false);
    React.useEffect(() => {
        onSaved?.(saved);
    }, [saved]);

    const savePostBottonSheet = useBottomSheetActions({
        onOpen(present) {
            if (!saved) {
                present();
            } else {
                setSaved((state) => !state);
            }
        },
        onClose(close) {
            close();
            setSaved((state) => !state);
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
