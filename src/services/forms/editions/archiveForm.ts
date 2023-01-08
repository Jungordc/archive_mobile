/** @format */
import { Field, Form, converters, RepeatingForm, SubForm } from "mstform";
import { ArchiveEditionModel, ArchiveEditModel } from "./archiveModel";

export const ArchiveEditionForm = new Form(ArchiveEditionModel, {
    title: new Field(converters.string, {}),
    description: new Field(converters.string),
    category: new Field(converters.string),
    cover: new Field(converters.maybeNull(converters.string)),
    tags: new Field(converters.stringArray, {}),
    docs: new Field(converters.stringArray),
});

/**
 * form of Edition of archive
 */
export const ArchiveEditForm = new Form(ArchiveEditModel, {
    title: new Field(converters.string),
    description: new Field(converters.string),
    cover: new SubForm({
        type: new Field(converters.maybeNull(converters.string)),
        uri: new Field(converters.string),
        isNew: new Field(converters.boolean),
    }),
    tags: new RepeatingForm({
        name: new Field(converters.string),
    }),
    docs: new RepeatingForm({
        type: new Field(converters.maybeNull(converters.string)),
        uri: new Field(converters.string),
        isNew: new Field(converters.boolean),
    }),
    // category: new Field(converters.maybeNull(converters.string)),
});
