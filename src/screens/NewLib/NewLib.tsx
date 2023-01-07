/** @format */

import React from "react";
import { ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import { RootStackScreenProps } from "../../navigation/types";
import useBtnSaveEffect, {
    useBtnSaveRefType,
} from "../../hooks/actions/useBtnSaveEffect";
import AuthorEditorConnector, {
    EditorRefType,
} from "../../components/Composite/Author/AuthorEditorConnector";
import { getTokens } from "../../services/accounts/utils";

export type NewLibProps = {} & RootStackScreenProps<"NewLib">;

const NewLib: React.FC<NewLibProps> = ({ navigation }) => {
    const EditorRef = React.useRef<EditorRefType>(null);
    const BtnSaveRef = React.useRef<useBtnSaveRefType>(null);

    const handlerSave = React.useCallback(() => {
        EditorRef.current?.handlerSubmit?.();
    }, [EditorRef]);

    const onSubmit = React.useCallback((data: any) => {
        console.log("data: ", data, getTokens());
    }, []);

    useBtnSaveEffect({
        ref: BtnSaveRef,
        navigation,
        btnProps: {
            onPress: handlerSave,
        },
    });

    return (
        <ScrollView bounces={false}>
            <AuthorEditorConnector ref={EditorRef} onSubmit={onSubmit} />
        </ScrollView>
    );
};

NewLib.displayName = "NewLib";
export default observer(NewLib);
