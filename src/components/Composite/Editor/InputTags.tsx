/** @format */

import React from "react";
import VStack from "native-base/src/components/primitives/Stack/VStack";
import { useTheme } from "native-base/src/hooks";
import Chip from "../../Primitive/Chip/Chip";
import InputTitleUtils from "../../Primitive/InputTitle/InputTitleUtils";
import IconLabel from "../../Primitive/IconLabel/IconLabel";
import Tags from "../../../../packages/react-native-tags/src/Tags";

interface InputTagsProps<T extends string> {
    placeholder?: string;
    maxTags?: number;
    onChange?(tag: T, index?: number): void;
    onRemove?(tag: T, index: number): void;
    value?: T[];
}

const InputTags: React.FC<InputTagsProps<string>> = ({
    placeholder = "Tags",
    maxTags = 6,
    value,
    onChange,
    onRemove,
    ...props
}) => {
    const theme = useTheme();
    const [tags, setTags] = React.useState<string[]>(value || []);

    const onAddTag = React.useCallback((tag: string, index?: number) => {
        console.log("InputTags add", tag);
        setTags((p) => [...p, tag]);
        onChange?.(tag);
    }, []);

    const onRemoveTag = React.useCallback(
        (tag: any, index: number) => {
            console.log("InputTags remove", tag, index);
            const tagsFiltered = tags.filter((_, i) => i !== index);
            setTags(tagsFiltered);
            onRemove?.(tag, index);
        },
        [tags]
    );

    return (
        <InputTitleUtils
            max={maxTags}
            placeholder={placeholder}
            value={tags?.length}
        >
            <VStack flex={1} space="2">
                <Tags
                    initialTags={tags}
                    textInputProps={{ placeholder }}
                    onAdd={onAddTag}
                    onRemove={onRemoveTag}
                    inputContainerStyle={{
                        backgroundColor: theme.colors.coolGray[100],
                        borderRadius: theme.radii.full,
                        height: 40,
                    }}
                    renderItem={({ tag, onDelete, index }) => {
                        return (
                            <Chip onDelete={onDelete} key={index} m="1">
                                {tag}
                            </Chip>
                        );
                    }}
                />
                <IconLabel
                    icon="pricetags-outline"
                    label="Taper sur espace pour confirmer le tag"
                    ml="1"
                    mt="2"
                />
            </VStack>
        </InputTitleUtils>
    );
};

export default InputTags;
