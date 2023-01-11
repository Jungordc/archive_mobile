/** @format */

import React from "react";
import { observer } from "mobx-react-lite";
import VStack from "native-base/src/components/primitives/Stack/VStack";
import { useTheme } from "native-base/src/hooks";
import Chip from "../../Primitive/Chip/Chip";
import InputTitleUtils from "../../Primitive/InputTitle/InputTitleUtils";
import IconLabel from "../../Primitive/IconLabel/IconLabel";
import Tags from "../../../../packages/react-native-tags/src/Tags";

const MstTags = observer(Tags);
const MstInputTitleUtils = observer(InputTitleUtils);

interface MstInputTagsProps<T extends string> {
    placeholder?: string;
    maxTags?: number;
    onAdd?(tag: T, index?: number): void;
    onRemove?(tag: T, index: number): void;
    tags?: T[];
}

const MstInputTags: React.FC<MstInputTagsProps<string>> = ({
    placeholder = "Tags",
    maxTags = 6,
    tags = [],
    onAdd,
    onRemove,
    ...props
}) => {
    const theme = useTheme();

    return (
        <MstInputTitleUtils
            max={maxTags}
            placeholder={placeholder}
            value={tags?.length}
        >
            <VStack flex={1} space="2">
                <MstTags
                    maxNumberOfTags={6}
                    initialTags={tags}
                    textInputProps={{ placeholder }}
                    onAdd={onAdd}
                    onRemove={onRemove}
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
                    label="Taper sur espace, virgule ou enter pour confirmer le tag"
                    ml="1"
                    mt="2"
                />
            </VStack>
        </MstInputTitleUtils>
    );
};

export default MstInputTags;
