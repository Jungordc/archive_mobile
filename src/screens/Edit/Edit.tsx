/** @format */

import React from "react";
import { View } from "native-base/src/components/basic/View";
import useBtnSaveEffect, {
    useBtnSaveRefType,
} from "../../hooks/actions/useBtnSaveEffect";

import MstEditor, {
    EditorRefType,
} from "../../components/Composite/Editor/MstEditor";
import { RootStackScreenProps } from "../../navigation/types";

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
        (index: any) => navigation.navigate("EditionDocs", { index: 0 }),
        []
    );

    const onSubmit = React.useCallback((data: any) => {
        console.log(JSON.stringify(data, null, 4));
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
            <MstEditor ref={EditorRef} onSubmit={onSubmit} />
        </View>
    );
};

Edit.displayName = "Edit";
export default Edit;
