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
    const [tags, setTags] = React.useState<tagsType>(value || []);

    const tagLenght = React.useMemo(() => tags?.length, [tags]);

    const onChangeTags = React.useCallback((newTags: tagsType) => {
        onChange?.(newTags);
        setTags(newTags);
    }, []);

    const onTagPress = React.useCallback(
        (index: number) => {
            const tagsFiltered = tags.filter((_, i) => i !== index);
            onChange?.(tagsFiltered);
            setTags(tagsFiltered);
        },
        [tags]
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
