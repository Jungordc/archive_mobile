/** @format */

import React from "react";
import { View, Text } from "native-base";
import { observer } from "mobx-react-lite";
import { RootStackScreenProps } from "../../navigation/types";
import DocsEditor from "../../components/Composite/Editor/DocsEditor";
import { ArchiveEditionModelInstance } from "../../services/forms/editions/archiveModel";

const ODocsEditor = observer(DocsEditor);

type EditingDocsProps = {} & RootStackScreenProps<"EditionDocs">;

const EditingDocs: React.FC<EditingDocsProps> = ({
    route,
    navigation,
    ...props
}) => {
    const docs = React.useMemo(
        () => ArchiveEditionModelInstance.docs,
        [ArchiveEditionModelInstance.docs]
    );
    const index = route.params?.index;

    const getSharedElementId = React.useCallback(
        (element: string) => `item.${element}.photo-doc`,
        []
    );

    return (
        <View flex={1} bg="gray.100">
            <ODocsEditor
                docs={docs}
                initialScrollIndex={1}
                getIds={getSharedElementId}
            />
        </View>
    );
};

export default EditingDocs;
