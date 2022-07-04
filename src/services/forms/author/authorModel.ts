/** @format */

import { types } from "mobx-state-tree";

export const authorEditionModel = types.model("AuthorEdition", {
    name: types.string,
    descrption: types.string,
    cover: types.maybeNull(types.string),
    avatar: types.maybeNull(types.string),
    website: types.maybeNull(types.string),
    domaine: types.maybeNull(types.string),
});

export const authorEditionIntance = authorEditionModel.create({
    name: "",
    descrption: "",
});
