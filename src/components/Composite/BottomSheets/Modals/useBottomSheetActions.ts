/** @format */

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import * as React from "react";

type argsType = {
    snapPoints?: string[];
    onOpen?(args: () => void): void;
    onClose?(args: () => void): void;
};

export default function useBottomSheetActions({
    snapPoints,
    onClose,
    onOpen,
}: argsType) {
    const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

    const handlerOnClose = React.useCallback(
        () => bottomSheetModalRef.current?.close(),
        []
    );

    const handlerOnOpen = React.useCallback(
        () => bottomSheetModalRef.current?.present(),
        []
    );

    //
    const _onClose = React.useCallback(() => {
        if (onClose) {
            onClose(handlerOnClose);
        } else {
            handlerOnClose();
        }
    }, [onClose]);

    //
    const _onOpen = React.useCallback(() => {
        if (onOpen) {
            onOpen(handlerOnOpen);
        } else {
            handlerOnOpen();
        }
    }, [onOpen]);

    return {
        ref: bottomSheetModalRef,
        snapPoints: snapPoints || ["30%", "50%"],
        onClose: _onClose,
        onOpen: _onOpen,
    };
}
