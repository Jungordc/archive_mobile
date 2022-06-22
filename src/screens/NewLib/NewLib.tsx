/** @format */

import React from "react";
import { ScrollView } from "react-native";
import { View } from "native-base/src/components/basic/View";
import ProfileImages from "../../components/Composite/ProfileImages/ProfileImages";
import InputTitle from "../../components/Primitive/InputTitle/InputTitle";
import usePickImage from "../../hooks/pickers/usePickImage";
import { RootStackScreenProps } from "../../navigation/types";
import useBtnSaveEffect from "../../hooks/actions/useBtnSaveEffect";

export type NewLibProps = {} & RootStackScreenProps<"NewLib">;

const NewLib: React.FC<NewLibProps> = ({ navigation }) => {
    const cover = usePickImage({});
    const profile = usePickImage({ aspect: [4, 4] });

    const handlerSave = React.useCallback(() => {
        console.log("save .......//////");
    }, []);

    useBtnSaveEffect({
        navigation,
        btnProps: {
            onPress: handlerSave,
        },
    });

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
