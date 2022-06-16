/** @format */

import { View, Text, Heading, Divider, Button } from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import ProfileImages from "../../components/Composite/ProfileImages/ProfileImages";
import InputTitle from "../../components/Primitive/InputTitle/InputTitle";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import usePickImage from "../../hooks/pickers/usePickImage";
import { RootStackScreenProps } from "../../navigation/types";

export type NewLibProps = {} & RootStackScreenProps<"NewLib">;
const NewLib: React.FC<NewLibProps> = ({ navigation }) => {
    const cover = usePickImage();
    const profile = usePickImage();

    const handlerSave = React.useCallback(() => {
        console.log(".......//////");
    }, []);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight() {
                return (
                    <Button
                        onPress={handlerSave}
                        colorScheme="green"
                        rounded="full"
                        size="sm"
                    >
                        Enregistrer
                    </Button>
                );
            },
        });
    }, [navigation, handlerSave]);

    return (
        <ScrollView bounces={false}>
            <ProfileImages
                profileCoverProps={{
                    source: cover.source,
                    onSelectProfile: cover.onpenSelectorImage,
                }}
                profileAvatarProps={{
                    source: profile.source,
                    onSelectProfile: profile.onpenSelectorImage,
                }}
                edit
            />
            <View p={2} my={50}>
                <View>
                    <View mx={1}>
                        <InputTitle
                            textInputProps={{
                                placeholder: "Nom",
                            }}
                        />
                    </View>
                    <View mx={1}>
                        <InputTitle
                            textInputProps={{
                                placeholder: "Description",
                                style: {
                                    fontSize: 20,
                                    fontWeight: "400",
                                },
                            }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

NewLib.displayName = "NewLib";
export default NewLib;
