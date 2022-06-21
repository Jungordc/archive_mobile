/** @format */

import React from "react";
import ShareBottonSheet from "../../components/Composite/BottomSheets/Modals/ShareBottonSheet";
import useBottomSheetActions from "../../components/Composite/BottomSheets/Modals/useBottomSheetActions";
import ShareButton, {
    ShareButtonProps,
} from "../../components/Composite/ButtonsActions/ShareButton";

export type ShareContainerButtonSheetProps = {
    btnProps?: ShareButtonProps;
};

const ShareContainerButtonSheet: React.FC<ShareContainerButtonSheetProps> = ({
    btnProps,
}) => {
    const shareAction = useBottomSheetActions({});
    return (
        <React.Fragment>
            <ShareButton onPress={shareAction.onOpen} {...btnProps} />
            <ShareBottonSheet
                snapPoints={shareAction.snapPoints}
                ref={shareAction.ref}
            />
        </React.Fragment>
    );
};

export default ShareContainerButtonSheet;
