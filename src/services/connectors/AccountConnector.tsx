/** @format */
import React from "react";
import { observer } from "mobx-react-lite";
import { AccountInstance } from "../accounts/instance";
import { ScreenManagerPropsType } from "../../Types/screens";

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
            AccountInstance.authors.map((author) => ({
                id: author.id,
                name: author.name,
            }));

        const onChangeAuthor = React.useCallback(
            (authorId: string | number) => {
                AccountInstance.changeActifAuthor(authorId.toString());
            },
            []
        );

        return (
            <Component
                actifAuthor={AccountInstance.actifAuthor?.id}
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
) =>
    observer((props: T) => {
        const actifAuthor = AccountInstance.actifAuthor;
        const authors: AuthorDataType[] = AccountInstance.authors.map(
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

// account screen connector manager
export const accountScreenNavigationConnector = <
    T extends ScreenManagerPropsType
>(
    Component: React.FC<T>
) =>
    observer((props: T) => {
        const isth: boolean = AccountInstance.isAuthenticated;
        const defaultUser: number | string =
            AccountInstance.actifAuthor?.id || 0;

        return (
            <Component
                {...props}
                isAuthenticated={isth}
                defaultUser={defaultUser}
            />
        );
    });
