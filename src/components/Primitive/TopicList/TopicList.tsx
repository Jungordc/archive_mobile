/** @format */

import React from "react";
import { FlatList } from "react-native";
import TopicItem from "./TopicItem";
import useFakeData from "../../../services/faceData";
import { keyExtractor } from "../../../utils/core";

export type TopicListProps = {
    data?: { title: string; id: number | string }[];
    selected?: number | string;
    onSelect?(e: string | number): void;
};

const TopicList: React.FC<TopicListProps> = ({
    selected = 0,
    onSelect,
    // data = _data,
}) => {
    const data = useFakeData({ id: 0, title: "Topic title" });
    const [_selected, setSelected] = React.useState<number | string>(selected);

    const handlerSelectTopic = React.useCallback((index: string | number) => {
        return () => {
            setSelected(index);
            onSelect?.(index);
        };
    }, []);

    const renderItem = React.useCallback(
        ({ index, item }) => {
            const indexSelected: boolean = _selected === index;
            return (
                <TopicItem
                    onPress={handlerSelectTopic(index)}
                    title={item.title}
                    _text={{
                        color: indexSelected ? "coolGray.300" : "coolGray.700",
                    }}
                    colorScheme="muted"
                    bg={indexSelected ? "black" : "coolGray.100"}
                />
            );
        },
        [_selected]
    );

    return (
        <FlatList
            horizontal
            data={data}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    );
};

TopicList.displayName = "TopicList";
export default TopicList;
