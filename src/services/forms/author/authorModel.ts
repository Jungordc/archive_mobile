/** @format */

import { types } from "mobx-state-tree";

export const authorEditionModel = types.model("AuthorEdition", {
    name: types.string,
    description: types.string,
    website: types.string,
    domaine: types.string,
    cover: types.maybeNull(types.string),
    avatar: types.maybeNull(types.string),
});

export const authorEditionIntance = authorEditionModel.create({
    name: "",
    description:
        "une petite ou longue description pour votre bien savoir votre biblio",
    domaine: "",
    website: "",
});
