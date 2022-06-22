/** @format
 * via message privee
 * facebook
 * copy link
 */

import React from "react";
import { Share } from "react-native";
import { View, Text, Heading } from "native-base";
import { BottomSheetModal, TouchableOpacity } from "@gorhom/bottom-sheet";
import { ComonBottomSheetType } from "../Types";
import { VStack } from "native-base/src/components/primitives/Stack";
import IconButtonBottomSheets, {
    IconButtonBottomSheetsProps,
} from "../IconButtonBottomSheets";
import Divider from "native-base/src/components/composites/Divider";
import ButtonBottomSheets from "../ButtonBottomSheets";
import { useShare } from "../../../../hooks/actions/useShare";

export type ShareBottonSheetProps = {} & ComonBottomSheetType;

const LabelContainer: React.FC<{
    btnProps?: IconButtonBottomSheetsProps;
    label?: number | string;
}> = ({ btnProps, label }) => {
    return (
        <VStack justifyContent="center" alignItems="center">
            <IconButtonBottomSheets {...btnProps} />
            <Text>{label}</Text>
        </VStack>
    );
};

const ShareBottonSheet = React.forwardRef<
    BottomSheetModal,
    ShareBottonSheetProps
>(({ snapPoints = [], ...props }, ref) => {
    const handlerShareContent = useShare({ dialogTitle: "archive Partage" });

    const onShare = async () => {
        handlerShareContent({
            content: {
                title: "Partager l'argive",
                url: "http://jungo-archive.com/dkjsdkjkdjkjsdkflkjk",
                message:
                    "https://web.facebook.com/photo/?fbid=462179109245813&set=a.128777029252691",
            },
        });
    };
    return (
        <BottomSheetModal ref={ref} snapPoints={snapPoints}>
            <View flex={1} p={2}>
                <Heading>Partager l'archive</Heading>
                <Divider my="4" />
                <ButtonBottomSheets onPress={onShare}>
                    Confirmer
                </ButtonBottomSheets>
            </View>
        </BottomSheetModal>
    );
});

export default ShareBottonSheet;
