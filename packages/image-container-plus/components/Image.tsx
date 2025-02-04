/** @format */

import React from "react";
import {
    GestureResponderEvent,
    ImageURISource,
    TouchableOpacity,
} from "react-native";
import { View, Image as NBImage } from "native-base";
import { InterfaceViewProps } from "native-base/src/components/basic/View/types";
import { fetchImage } from "../utils/fetcher";

export type ImageProps = {
    source?: ImageURISource | number;
    onPress?(event?: GestureResponderEvent): void;
} & InterfaceViewProps;

const Image: React.FC<ImageProps> = ({
    bgColor = "coolGray.400",
    borderRadius = "md",
    source,
    onPress,
    ...props
}) => {
    const [inner, setInner] = React.useState(
        <View
            borderRadius={borderRadius}
            flex={1}
            bgColor={bgColor}
            {...props}
        />
    );

    const url = React.useMemo(() => {
        if (typeof source == "number") return source;
        if (source) return source.uri;
        return undefined;
    }, [source]);

    React.useEffect(() => {
        if (url && source) {
            const controller = new (AbortController ||
                window.AbortController)();
            fetchImage(url, { signal: controller.signal }).then((isImage) => {
                if (isImage) {
                    setInner(
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{ flex: 1 }}
                            onPress={onPress}
                        >
                            <NBImage
                                borderRadius={borderRadius}
                                alt="img"
                                source={source}
                                flex={1}
                            />
                        </TouchableOpacity>
                    );
                }
            });
            return () => controller.abort();
        }
    }, [url, source]);

    return <>{inner}</>;
};

export default Image;
