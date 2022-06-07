/** @format */

import { View, Text, Pressable } from "native-base";
import React from "react";
import { BottomSheetModal, TouchableOpacity } from "@gorhom/bottom-sheet";

/**
 * S'abonner a l'Hauteur | Se desabonner a l'hauteur
 * Inaproprier
 * signaler
 * Ne plus voir cet archive
 *
 */
export type ActionMenuBottomSheetProps = {
    snapPoints?: string[];
};

const ActionItemPressable: React.FC = ({ children }) => {
    return (
        <TouchableOpacity>
            <Pressable p={2}>
                <Text color="coolGray.700" fontWeight="medium" fontSize="2xl">
                    {children}
                </Text>
            </Pressable>
        </TouchableOpacity>
    );
};
const ActionMenuBottomSheet = React.forwardRef<
    BottomSheetModal,
    ActionMenuBottomSheetProps
>(({ snapPoints = [] }, ref) => {
    return (
        <BottomSheetModal ref={ref} snapPoints={snapPoints}>
            <View p={2}>
                <ActionItemPressable>S'abonner a l'auteur </ActionItemPressable>
                <ActionItemPressable>Bloquer l'auteur</ActionItemPressable>
                <ActionItemPressable>
                    Ne plus voir cet archive
                </ActionItemPressable>
                <ActionItemPressable>Inaproprier</ActionItemPressable>
                <ActionItemPressable>Signaler</ActionItemPressable>
            </View>
        </BottomSheetModal>
    );
});

ActionMenuBottomSheet.displayName = "ActionMenuBottomSheet";
export default ActionMenuBottomSheet;
