/** @format */

import { View, FlatList } from "react-native";
import React from "react";
import TopicItem from "./TopicItem";

export type TopicListProps = {
    data?: { title: string; id: number | string }[];
    selected?: number | string;
    onSelect?(e: string | number): void;
};

const _data = new Array(7).fill(0).map((_, index) => ({
    title: `Topic ${index}`,
    id: `id${index}`,
}));

const TopicList: React.FC<TopicListProps> = ({
    selected = 0,
    onSelect,
    data = _data,
}) => {
    const [_selected, setSelected] = React.useState<number | string>(selected);

    return (
        <View>
            <FlatList
                bounces={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data}
                renderItem={({ index, item }) => (
                    <TopicItem
                        onPress={() => {
                            setSelected(index);
                            onSelect?.(index);
                        }}
                        title={item.title}
                        _text={{
                            color:
                                _selected === index
                                    ? "coolGray.300"
                                    : "coolGray.700",
                        }}
                        colorScheme="muted"
                        bg={_selected === index ? "black" : "coolGray.100"}
                    />
                )}
            />
        </View>
    );
};

TopicList.displayName = "TopicList";
export default TopicList;
