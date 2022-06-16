/** @format */

import React from "react";
import useBottomSheetActions from "../../components/Composite/BottomSheets/Modals/useBottomSheetActions";
import ActionMenuBottomSheet from "../../components/Composite/BottomSheets/Modals/ActionMenuBottomSheet";
import MoreButton, {
    MoreButtonProps,
} from "../../components/Composite/ButtonsActions/MoreButton";

export type MoreButtonBottomSheetProps = {
    btnProps?: MoreButtonProps;
};

const MoreButtonBottomSheet: React.FC<MoreButtonBottomSheetProps> = ({
    btnProps,
}) => {
    const actionBottonSheet = useBottomSheetActions({
        snapPoints: ["35%", "37%"],
    });
    return (
        <>
            <MoreButton onPress={actionBottonSheet.onOpen} {...btnProps} />
            <ActionMenuBottomSheet
                ref={actionBottonSheet.ref}
                snapPoints={actionBottonSheet.snapPoints}
            />
        </>
    );
};

export default MoreButtonBottomSheet;
