/** @format */

import { View, Text } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import { Box } from "native-base";

export type DocReaderProps = {};
const DocReader: React.FC<DocReaderProps> = (props) => {
    return (
        <Box flex={1}>
            <WebView
                style={{
                    flex: 1,
                }}
                source={{
                    uri: "https://media.readthedocs.org/pdf/python-guide-fr/latest/python-guide-fr.pdf",
                }}
            />
        </Box>
    );
};

export default DocReader;
