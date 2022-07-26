/** @format */

import React from "react";
import {
    View,
    Text,
    ViewStyle,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Stack, { StackProps } from "./Stack";

type TextMoreProps = {
    title?: string;
};

type ItemColProps<T> = {
    start?: number;
    end?: number;
    data: T[];
    showMoreText?: boolean;
    moreText?: string;
    render(value: T): React.ReactNode;
    stackProps?: StackProps;
};

export type ImageFlatListProps<T> = {
    containerStyle?: ViewStyle;
} & ItemColProps<T>;

export const TextMore: React.FC<TextMoreProps> = ({ title }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[
                StyleSheet.absoluteFill,
                {
                    backgroundColor: "rgba(0,0,0,0.1)",
                    justifyContent: "center",
                    alignItems: "center",
                },
            ]}
        >
            <Text style={{ fontWeight: "bold", fontSize: 30, color: "#fff" }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

//
function ItemCol<T>({
    start = 0,
    end = 2,
    data,
    render,
    showMoreText,
    moreText,
    stackProps,
    ...props
}: ItemColProps<T>) {
    const innerData = data.slice(start, end);
    const lenghtOfData: number = innerData.length;

    return (
        <Stack space={2} {...stackProps}>
            {innerData.map((img, i) => {
                const isLastElement = i == lenghtOfData - 1;
                return (
                    <View
                        style={[styles.flex, styles.hFull, styles.wFull]}
                        key={i}
                    >
                        <React.Fragment>{render(img)}</React.Fragment>
                        {isLastElement && showMoreText && (
                            <TextMore title={moreText} />
                        )}
                    </View>
                );
            })}
        </Stack>
    );
}

export default function ImageFlatList<T>({
    data,
    render,
    containerStyle,
    ...props
}: ImageFlatListProps<T>) {
    //
    const dataLenght = data.length;
    const moreText = `+${dataLenght - 4}`;
    const canShowMoreText = dataLenght > 4;
    const is2images = dataLenght <= 2;
    const enderOfFirstImagesRows = dataLenght == 1 || dataLenght == 3 ? 1 : 2;

    return (
        <View style={styles.root}>
            <Stack
                style={[styles.hFull, styles.wFull]}
                direction="row"
                space={3}
            >
                <View style={[styles.flex, styles.hFull, styles.wFull]}>
                    <ItemCol
                        data={data}
                        render={render}
                        start={0}
                        end={enderOfFirstImagesRows}
                        stackProps={{
                            direction: is2images ? "row" : "column",
                        }}
                    />
                </View>
                {!is2images && (
                    <View style={[styles.flex, styles.hFull, styles.wFull]}>
                        <ItemCol
                            data={data}
                            start={enderOfFirstImagesRows}
                            end={enderOfFirstImagesRows + 2}
                            render={render}
                            showMoreText={canShowMoreText}
                            moreText={moreText}
                        />
                    </View>
                )}
            </Stack>
        </View>
    );
}

const styles = StyleSheet.create({
    wFull: {
        width: "100%",
    },
    hFull: {
        height: "100%",
    },
    flex: {
        flex: 1,
    },
    root: {
        minHeight: 250,
        borderRadius: 10,
        overflow: "hidden",
    },
});
