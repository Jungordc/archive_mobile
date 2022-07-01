/** @format */

import React from "react";
import VStack from "native-base/src/components/primitives/Stack/VStack";
import Tags from "react-native-tags";
import { useTheme } from "native-base/src/hooks";
import Chip from "../../Primitive/Chip/Chip";
import InputTitleUtils from "../../Primitive/InputTitle/InputTitleUtils";
import IconLabel from "../../Primitive/IconLabel/IconLabel";

export type tagsType = string[];

interface InputTagsProps {
    placeholder?: string;
    maxTags?: number;
    onChange?(tags: tagsType): void;
    value?: tagsType;
}

const InputTags: React.FC<InputTagsProps> = ({
    placeholder = "Tags",
    maxTags = 6,
    value,
    onChange,
    ...props
}) => {
    const theme = useTheme();
    const [tags, setStags] = React.useState<tagsType>(value || []);

    const tagLenght = React.useMemo(
        () => value?.length || tags.length,
        [tags, value]
    );

    const onChangeTags = React.useCallback((newTags: tagsType) => {
        onChange?.(newTags) || setStags(newTags);
    }, []);

    const onTagPress = React.useCallback(
        (index: number, tagLabel: string, event: any, deleted: boolean) => {
            onChange?.(value?.filter((_, i) => i !== index) || []) ||
                setStags((tgs) => tgs.filter((_, i) => i !== index));
        },
        [tags, value]
    );

    return (
        <InputTitleUtils
            max={maxTags}
            placeholder={placeholder}
            value={tagLenght}
        >
            <VStack flex={1}>
                <Tags
                    maxNumberOfTags={maxTags}
                    initialText="Tags_example"
                    initialTags={value || tags}
                    onChangeTags={onChangeTags}
                    onTagPress={onTagPress}
                    containerStyle={{
                        flex: 1,
                    }}
                    textInputProps={{
                        placeholder,
                    }}
                    inputContainerStyle={{
                        backgroundColor: theme.colors.coolGray[100],
                        borderRadius: theme.radii.full,
                        height: 40,
                    }}
                    inputStyle={{
                        color: theme.colors.coolGray[600],
                        fontSize: 14,
                    }}
                    renderTag={({ tag, index, onPress }) => (
                        <Chip onDelete={onPress} key={index} m="1">
                            {tag}
                        </Chip>
                    )}
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
