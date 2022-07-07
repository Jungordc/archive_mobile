/** @format */
import React from "react";
import { observer } from "mobx-react-lite";
import { acountsInstance } from "../data/accounts";

type BottomSheetAuthorDataType = {
    id: number | string;
    name: string;
};

type AuthorDataType = {
    id: string | number;
    name: string;
    accountType: "USER" | "LIB";
    cover?: string | null;
    avatar?: string | null;
    isActif?: boolean;
};

export const bottomSheetChangeAuthorConnector = <
    T extends {
        actifAuthor?: string;
        authors?: BottomSheetAuthorDataType[];
        onConfirm?(id: string | number): void;
    }
>(
    Component: React.FC<T>
) => {
    return observer((props: T) => {
        const authors: BottomSheetAuthorDataType[] =
            acountsInstance.authors.map((author) => ({
                id: author.id,
                name: author.name,
            }));

        const onChangeAuthor = React.useCallback(
            (authorId: string | number) => {
                acountsInstance.changeActifAuthor(authorId.toString());
            },
            []
        );

        return (
            <Component
                actifAuthor={acountsInstance.actifAuthor?.id}
                authors={authors}
                onConfirm={onChangeAuthor}
                {...props}
            />
        );
    });
};

export const authorListConnector = <
    T extends {
        authors?: AuthorDataType[];
    }
>(
    Component: React.FC<T>
) => {
    return observer((props: T) => {
        const actifAuthor = acountsInstance.actifAuthor;
        const authors: AuthorDataType[] = acountsInstance.authors.map(
            (author) => ({
                id: author.id,
                name: author.name,
                accountType: author.authorType,
                avatar: author.avatar,
                cover: author.cover,
                isActif: author.id === actifAuthor?.id,
            })
        );

        return <Component authors={authors} {...props} />;
    });
};
