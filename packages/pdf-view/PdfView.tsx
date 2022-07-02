/** @format */

import React from "react";
import { View, Text } from "native-base";
import { WebViewProps, WebView } from "react-native-webview";

type PdfViewProps = {} & WebViewProps;

const PdfView: React.FC<PdfViewProps> = ({ ...props }) => {
    return (
        <View flex={1}>
            <WebView
                style={{
                    flex: 1,
                }}
                source={{
                    uri: "http://tdc-www.harvard.edu/Python.pdf",
                }}
                originWhitelist={["*"]}
            />
        </View>
    );
};

export default PdfView;
