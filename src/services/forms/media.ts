/** @format */

import { types } from "mobx-state-tree";

/**
 * Media model
 */
export const MediaModel = types.model("MediaModel", {
    type: types.maybeNull(types.string),
    uri: types.string,
    isNew: types.optional(types.boolean, true),
});
