/** @format */

import { View, Text, useTheme, Divider } from "native-base";
import React from "react";
import { BottomSheetModal, TouchableOpacity } from "@gorhom/bottom-sheet";
import HStack from "native-base/src/components/primitives/Stack/HStack";
import Heading from "native-base/src/components/primitives/Heading";
import VStack from "native-base/src/components/primitives/Stack/VStack";
import { ActivityIndicator } from "react-native";

export type SavePostBottomSheetProps = {
    snapPoints?: string[];
    onConfirm?(): void;
};

const SavePostBottomSheet = React.forwardRef<
    BottomSheetModal,
    SavePostBottomSheetProps
>(({ onConfirm, snapPoints = [] }, ref) => {
    const theme = useTheme();
    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={snapPoints}
            // onChange={handleSheetChanges}
        >
            <View p={2} style={{}}>
                <VStack space={5}>
                    <HStack alignItems="center" justifyContent="space-between">
                        <Heading fontSize={20}>Enregistrer dans</Heading>
                        <TouchableOpacity
                            style={{
                                backgroundColor: theme.colors.primary[500],
                                paddingHorizontal: theme.sizes[4],
                                paddingVertical: theme.sizes[2],
                                borderRadius: 500,
                            }}
                            onPress={onConfirm}
                        >
                            <Text color="coolGray.50">Confirmer</Text>
                        </TouchableOpacity>
                    </HStack>
                    <Divider />
                    <View>
                        <ActivityIndicator
                            size="large"
                            color={theme.colors.primary[500]}
                        />
                        <View>
                            <Text>Dossier principal</Text>
                        </View>
                    </View>
                </VStack>
            </View>
        </BottomSheetModal>
    );
});

export default SavePostBottomSheet;