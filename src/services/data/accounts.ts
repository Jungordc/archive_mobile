/** @format */

import { types } from "mobx-state-tree";

export const AccountAuthorModel = types.model("Author", {
    id: types.identifier,
    name: types.string,
    description: types.string,
    avatar: types.maybeNull(types.string),
    cover: types.maybeNull(types.string),
    domaine: types.maybeNull(types.string),
    website: types.maybeNull(types.string),
    authorType: types.optional(
        types.union(types.literal("USER"), types.literal("LIB")),
        "LIB"
    ),
});

export const AcountsModel = types
    .model("Accounts", {
        authors: types.array(AccountAuthorModel),
        actifAuthor: types.maybe(
            types.reference(types.late(() => AccountAuthorModel))
        ),
    })
    .actions((self) => {
        return {
            afterCreate() {
                if (!self.actifAuthor && self.authors.length > 0) {
                    const hasAuthorUser = self.authors.find(
                        (author) => author.authorType === "USER"
                    );
                    self.actifAuthor = hasAuthorUser || self.authors[0];
                }
            },
            changeActifAuthor(authorId: string) {
                self.actifAuthor = self.authors.find(
                    (author) => author.id === authorId
                );
            },
        };
    });

export const acountsInstance = AcountsModel.create({
    authors: [
        {
            id: "1",
            name: "bienfait shomari",
            description: "je suis une personne tout simplement",
            avatar: "",
            cover: "",
            authorType: "USER",
        },
        {
            id: "2",
            name: "bienfait shomari page 1",
            description: "je suis une personne tout simplement",
            avatar: "",
            cover: "",
        },
        {
            id: "3",
            name: "bienfait shomari page 2",
            description: "je suis une personne tout simplement",
            avatar: "",
            cover: "",
        },
    ],
});
