/** @format */

import React from "react";
import LikeButton, {
    LikeButtonProps,
} from "../../components/Composite/ButtonsActions/LikeButton";

export type LikeButtonContainerProps = {
    btnProps?: LikeButtonProps;
    onLiked?(toggle: boolean): void;
};
const LikeButtonContainer: React.FC<LikeButtonContainerProps> = ({
    btnProps,
    onLiked,
    ...props
}) => {
    const [liked, setLiked] = React.useState<boolean>(false);
    const onLike = React.useCallback(() => {
        setLiked((state) => {
            const newState = !state;
            onLiked?.(newState);
            return newState;
        });
    }, []);

    return <LikeButton liked={liked} onPress={onLike} {...btnProps} />;
};

export default React.memo(LikeButtonContainer);
