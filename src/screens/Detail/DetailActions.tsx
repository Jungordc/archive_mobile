/**
 *  like, share, save, vue
 * @format */

import React from "react";
import isString from "lodash/isString";
import { Icon, HStack, IconButton, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InterfaceHStackProps } from "native-base/lib/typescript/components/primitives/Stack/HStack";
import SaveButtonBottomSheet from "../../containers/Actions/SaveButtonBottomSheet";
import { InterfaceIconButtonProps } from "native-base/src/components/composites/IconButton/types";
import LikeButtonContainer from "../../containers/Actions/LikeButtonContainer";
import LabelChangeActionContainer from "../../containers/Actions/LabelChangeActionContainer";

export type DetailActions = {} & InterfaceHStackProps;

type IconButtonLabelProps = {
    icon: string | React.ReactNode;
    label: string;
};

const ComonButtonActionProps: InterfaceIconButtonProps = {
    borderColor: "coolGray.200",
    tintColor: "coolGray.200",
    colorScheme: "coolGray",
    borderRadius: "full",
    size: "md",
};

const IconButtonLabel: React.FC<IconButtonLabelProps> = ({ icon, label }) => {
    const buttonComponent = isString(icon) ? (
        <IconButton
            {...ComonButtonActionProps}
            icon={<Icon as={Ionicons} name={icon} />}
        />
    ) : (
        icon
    );
    return (
        <HStack alignItems="center">
            {buttonComponent}
            {label && (
                <Text fontSize="sm" color="coolGray.600">
                    {label}
                </Text>
            )}
        </HStack>
    );
};

const DetailActions: React.FC<DetailActions> = ({ ...vstackProps }) => {
    return (
        <HStack
            flex={1}
            px="3"
            py="2"
            justifyContent="space-evenly"
            {...vstackProps}
        >
            <LabelChangeActionContainer
                initialLabel={249}
                children={({ label, onChangeLabel }) => (
                    <IconButtonLabel
                        icon={
                            <LikeButtonContainer
                                onLiked={onChangeLabel}
                                btnProps={ComonButtonActionProps}
                            />
                        }
                        label={label.toString()}
                    />
                )}
            />
            <LabelChangeActionContainer
                initialLabel={234}
                children={({ label, onChangeLabel }) => (
                    <IconButtonLabel
                        icon={
                            <SaveButtonBottomSheet
                                onSaved={onChangeLabel}
                                btnProps={ComonButtonActionProps}
                            />
                        }
                        label={label.toString()}
                    />
                )}
            />
            <IconButtonLabel icon="chatbubble-outline" label="23" />
            <IconButtonLabel icon="share-outline" label="2" />
        </HStack>
    );
};

export default DetailActions;
