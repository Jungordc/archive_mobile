/** @format */

import { View, Text, Divider } from "native-base";
import React from "react";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import HStack from "native-base/src/components/primitives/Stack/HStack";
import Heading from "native-base/src/components/primitives/Heading";
import VStack from "native-base/src/components/primitives/Stack/VStack";
// import { ActivityIndicator } from "react-native";
import ButtonBottomSheets from "../ButtonBottomSheets";
import { Radio } from "native-base/src/components/primitives/Radio";

export type AuthorChangeDataType = {
    id: number | string;
    name: string;
};

export type ChangeAuthorBottomSheetProps = {
    snapPoints?: string[];
    onConfirm?(authorId: string | number): void;
    authors?: AuthorChangeDataType[];
    actifAuthor?: string;
};

const EmptyContent = () => {
    return (
        <View flex="1" justifyContent="center" alignItems="center">
            <Heading color="coolGray.700">Pas d'Autheur Pour L'instant</Heading>
        </View>
    );
};

const ChangeAuthorBottomSheet = React.forwardRef<
    BottomSheetModal,
    ChangeAuthorBottomSheetProps
>(({ onConfirm, authors = [], actifAuthor = "1", snapPoints = [] }, ref) => {
    const [userActif, setUserActif] = React.useState<string>(actifAuthor);

    const onChangeUserActif = React.useCallback((value: string) => {
        setUserActif(value);
    }, []);

    const handlerConfirm = React.useCallback(
        () => onConfirm?.(userActif),
        [userActif]
    );

    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={snapPoints}
            // onChange={handleSheetChanges}
        >
            <View flex={1} p={2} style={{}}>
                <VStack flex={1} space={5}>
                    <HStack
                        space="3"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <VStack flex={0.7}>
                            <Heading color="coolGray.800" fontSize={20}>
                                Changer d'autheur actif
                            </Heading>
                            <Text color="coolGray.600" fontSize="2xs">
                                En chageant l'autheur, vous allez interagir
                                etant que cet autheur
                            </Text>
                        </VStack>
                        <View flex={0.3}>
                            <ButtonBottomSheets onPress={handlerConfirm}>
                                Confirmer
                            </ButtonBottomSheets>
                        </View>
                    </HStack>
                    <Divider />
                    <View flex={1}>
                        {/* <ActivityIndicator
                            size="large"
                            color={theme.colors.primary[500]}
                        /> */}
                        <View flex="1">
                            <BottomSheetScrollView>
                                {authors.length > 0 ? (
                                    <Radio.Group
                                        value={userActif}
                                        onChange={onChangeUserActif}
                                        name="myRadioGroup"
                                        accessibilityLabel="Pick your favorite number"
                                        colorScheme="success"
                                    >
                                        {authors.map((item) => (
                                            <Radio
                                                key={item.id}
                                                colorScheme="green"
                                                value={item.id.toString()}
                                                my={2}
                                                _text={{
                                                    color: "coolGray.700",
                                                    fontSize: "2xl",
                                                }}
                                            >
                                                {item.name}
                                            </Radio>
                                        ))}
                                    </Radio.Group>
                                ) : (
                                    <EmptyContent />
                                )}
                            </BottomSheetScrollView>
                        </View>
                    </View>
                </VStack>
            </View>
        </BottomSheetModal>
    );
});

export default ChangeAuthorBottomSheet;
