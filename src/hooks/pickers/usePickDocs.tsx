/** @format */

import React from "react";
import * as DocumentPicker from "expo-document-picker";

async function launchDocsPicker<T>(params?: T) {
    return DocumentPicker.getDocumentAsync({ multiple: true });
}

export function usePickdocs<T>(params: T) {
    const handlerOpen = React.useCallback(async () => {
        const results = await launchDocsPicker();
        if (results.type === "success") {
            console.log(results);
        }
    }, []);

    return {
        handlerOpen,
    };
}
