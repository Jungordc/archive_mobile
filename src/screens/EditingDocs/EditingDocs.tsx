/** @format */

import React from "react";
import { View, Text } from "native-base";
import { RootStackScreenProps } from "../../navigation/types";
import DocsEditor from "../../components/Composite/Editor/DocsEditor";
import { observer } from "mobx-react-lite";
import { ArchiveEditionModelInstance } from "../../services/forms/editions/archiveModel";
import PdfView from "../../../packages/pdf-view/PdfView";

const DocsEditorObeserved = observer(DocsEditor);

type EditingDocsProps = {} & RootStackScreenProps<"EditionDocs">;

const EditingDocs: React.FC<EditingDocsProps> = ({ ...props }) => {
    return (
        <View flex={1} bg="gray.100">
            {/* <PdfView /> */}
            <DocsEditorObeserved docs={ArchiveEditionModelInstance.docs} />
        </View>
    );
};

export default EditingDocs;
