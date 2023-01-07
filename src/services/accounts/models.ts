/** @format */

import { types } from "mobx-state-tree";

export const EmailRegistration = types
    .model("EmailRegistration", {
        orgin: types.optional(
            types.union(types.literal("LOGIN"), types.literal("SIGNIN")),
            "LOGIN"
        ),
        email: types.optional(types.string, ""),
        fullname: types.optional(types.string, ""),
    })
    .views((self) => ({
        getValues() {
            return {
                email: self.email,
                name: self.fullname,
                orgin: self.orgin,
            };
        },
    }))
    .actions((self) => ({
        setEmail(email: string) {
            self.email = email;
        },
        setFullname(name: string) {
            self.fullname = name;
        },
        setOrgin(orgin: "LOGIN" | "SIGNIN") {
            self.orgin = orgin;
        },
    }));

//author model
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

// root account model
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
                console.log("Authicanted", self.isAuthenticated);
            },
            deconnect() {
                self.isAuthenticated = false;
            },
        };
    });

// key token models
export const TokenModel = types
    .model("TokenModel", {
        access: types.maybeNull(types.string),
        refresh: types.maybeNull(types.string),
    })
    .actions((self) => ({
        setToken({ access, refrech }: { access: string; refrech: string }) {
            self.access = access;
            self.refresh = refrech;
        },
    }));
