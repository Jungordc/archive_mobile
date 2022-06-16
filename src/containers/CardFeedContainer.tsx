/** @format */
import React from "react";
import { FeedCardHorizontalProps } from "../components/Composite/Cards/FeedCardHorizontal/FeedCardHorizontal";
import MoreButtonBottomSheet from "./Actions/MoreButtonBottomSheet";
import SaveButtonBottomSheet from "./Actions/SaveButtonBottomSheet";

export type CardFeedContainerProps = {
    onPress?(archiveId: number | string): void;
};

const CardFeedContainer: React.FC<CardFeedContainerProps> = ({
    children,
    onPress,
}) => {
    return React.cloneElement<FeedCardHorizontalProps>(children as any, {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi",
        infos: ["1 jour environs", "200 j'aimes", "2000 vues"],
        baseOnText: "Base sur votre historiques",
        onPress: () => onPress?.(234),
        actions: (
            <React.Fragment>
                <SaveButtonBottomSheet />
                <MoreButtonBottomSheet />
            </React.Fragment>
        ),
    });
};

export default CardFeedContainer;
