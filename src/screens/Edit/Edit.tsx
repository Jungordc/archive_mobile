/** @format */

import React from "react";
import { RootStackScreenProps } from "../../navigation/types";
import {
    MSTEditor,
    EditorRefType,
} from "../../components/Composite/Editor/EditConnector";
import useBtnSaveEffect, {
    useBtnSaveRefType,
} from "../../hooks/actions/useBtnSaveEffect";
import { View } from "native-base/src/components/basic/View";

export type EditProps = {} & RootStackScreenProps<"Edition">;

const Edit: React.FC<EditProps> = ({
    navigation,
    route: {
        params: { category },
    },
}) => {
    const EditorRef = React.useRef<EditorRefType>(null);
    const BtnSaveRef = React.useRef<useBtnSaveRefType>(null);

    const handlerPress = React.useCallback(
        (value?: any) => EditorRef.current?.handlerSubmit?.(),
        [EditorRef]
    );

    const handlerEditingDocs = React.useCallback(
        () => navigation.navigate("EditionDocs"),
        []
    );

    const handlerDetailViewDocs = React.useCallback(
        (index) => navigation.navigate("EditionDocs", { index: 0 }),
        []
    );

    const onSubmit = React.useCallback((data: any) => {
        console.log("data...", data);
    }, []);

    //
    useBtnSaveEffect({
        navigation,
        ref: BtnSaveRef,
        btnProps: {
            onPress: handlerPress,
        },
    });

    return (
        <View flex={1}>
            <MSTEditor
                ref={EditorRef}
                onSubmit={onSubmit}
                handlerEditingDocs={handlerEditingDocs}
                onPressImage={handlerEditingDocs}
                handlerDetailViewDocs={handlerDetailViewDocs}
            />
        </View>
    );
};

Edit.displayName = "Edit";
export default Edit;
