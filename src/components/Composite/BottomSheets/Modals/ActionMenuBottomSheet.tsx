/** @format */

import { View, Text } from "native-base";
import React from "react";
import { BottomSheetModal, TouchableOpacity } from "@gorhom/bottom-sheet";

export type ActionMenuBottomSheetProps = {
    snapPoints?: string[];
};

const ActionMenuBottomSheet = React.forwardRef<
    BottomSheetModal,
    ActionMenuBottomSheetProps
>(({ snapPoints = [] }, ref) => {
    return (
        <BottomSheetModal ref={ref} snapPoints={snapPoints}>
            <Text m={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                repellendus dolorem fugiat exercitationem dignissimos. Animi
                quisquam soluta debitis, quibusdam tempora quae? Quis excepturi
                iste quasi ex ipsum, quidem rem sequi!
            </Text>
        </BottomSheetModal>
    );
});

ActionMenuBottomSheet.displayName = "ActionMenuBottomSheet";
export default ActionMenuBottomSheet;
