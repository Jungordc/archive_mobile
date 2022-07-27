/** @format */

import { types, cast } from "mobx-state-tree";

export const AuthorModel = types.model("Author", {
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

export const AccountsModel = types
    .model("AccountModel", {
        isAuthenticated: types.boolean,
        authors: types.array(AuthorModel),
        actifAuthor: types.maybe(
            types.reference(types.late(() => AuthorModel))
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
            authenticate() {
                self.isAuthenticated = true;
                console.log("Authicanted", self.isAuthenticated)
            },
            deconnect() {
                self.isAuthenticated = false;
            },
        };
    });
