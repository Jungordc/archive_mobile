/** @format */
import { Field, Form, converters } from "mstform";
import { ArchiveEditionModel } from "./archiveModel";

export const ArchiveEditionForm = new Form(ArchiveEditionModel, {
    title: new Field(converters.string, {}),
    description: new Field(converters.string),
    category: new Field(converters.string),
    cover: new Field(converters.maybeNull(converters.string)),
    tags: new Field(converters.stringArray),
    docs: new Field(converters.stringArray),
});
