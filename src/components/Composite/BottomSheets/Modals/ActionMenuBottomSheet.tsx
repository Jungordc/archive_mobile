/** @format */

import { View, Text, Icon, HStack } from "native-base";
import React from "react";
import { BottomSheetModal, TouchableOpacity } from "@gorhom/bottom-sheet";
import Ionicons from "@expo/vector-icons/Ionicons";
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

type ActionItemPressableProps = {
    iconName?: string;
};

const ActionItemPressable: React.FC<ActionItemPressableProps> = ({
    children,
    iconName,
}) => {
    return (
        <TouchableOpacity>
            <HStack p={2} space={4} alignItems="center">
                <Icon
                    color="coolGray.500"
                    size={25}
                    fontWeight="medium"
                    as={Ionicons}
                    name={iconName}
                />
                <Text color="coolGray.700" fontSize="lg">
                    {children}
                </Text>
            </HStack>
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
                <ActionItemPressable iconName="person-remove-outline">
                    S'abonner a l'auteur{" "}
                </ActionItemPressable>
                <ActionItemPressable iconName="lock-closed-outline">
                    Bloquer l'auteur
                </ActionItemPressable>
                <ActionItemPressable iconName="eye-off-outline">
                    Ne plus voir cet archive
                </ActionItemPressable>
                <ActionItemPressable iconName="bug-outline">
                    Inapproprié
                </ActionItemPressable>
                <ActionItemPressable iconName="flag-outline">
                    Signaler
                </ActionItemPressable>
            </View>
        </BottomSheetModal>
    );
});

ActionMenuBottomSheet.displayName = "ActionMenuBottomSheet";
export default ActionMenuBottomSheet;
