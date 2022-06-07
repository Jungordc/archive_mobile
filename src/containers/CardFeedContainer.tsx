/** @format */
import React from "react";
import { FeedCardHorizontalProps } from "../components/Composite/Cards/FeedCardHorizontal/FeedCardHorizontal";
import SavePostBottomSheet from "../components/Composite/BottomSheets/Modals/SavePostBottomSheet";
import ActionMenuBottomSheet from "../components/Composite/BottomSheets/Modals/ActionMenuBottomSheet";
import useBottomSheetActions from "../components/Composite/BottomSheets/Modals/useBottomSheetActions";

const CardFeedContainer: React.FC = ({ children }) => {
    const [saved, setSaved] = React.useState<boolean>(false);
    const actionBottonSheet = useBottomSheetActions({});
    const savePostBottonSheet = useBottomSheetActions({
        onOpen(present) {
            if (!saved) {
                present();
            } else {
                setSaved((state) => !state);
            }
        },
        onClose(close) {
            close();
            setSaved((state) => !state);
        },
    });

    const props: FeedCardHorizontalProps = React.useMemo(
        () => ({
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi",
            saved,
            onSave: savePostBottonSheet.onOpen,
            onMenu: actionBottonSheet.onOpen,
            infos: ["1 jour environs", "200 j'aimes", "2000 vues"],
            baseOnText: "Base sur votre historiques",
        }),
        [saved]
    );

    return (
        <>
            {React.cloneElement(children as any, props)}
            <SavePostBottomSheet
                ref={savePostBottonSheet.ref}
                snapPoints={savePostBottonSheet.snapPoints}
                onConfirm={savePostBottonSheet.onClose}
            />
            <ActionMenuBottomSheet
                ref={actionBottonSheet.ref}
                snapPoints={savePostBottonSheet.snapPoints}
            />
        </>
    );
};

export default CardFeedContainer;
