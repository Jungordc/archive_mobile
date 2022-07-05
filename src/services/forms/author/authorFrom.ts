/** @format */

import { Field, Form, converters, RepeatingForm } from "mstform";
import { authorEditionModel } from "./authorModel";

export const AuthorEditionForm = new Form(authorEditionModel, {
    name: new Field(converters.string, {}),
    description: new Field(converters.string),
    domaine: new Field(converters.string),
    website: new Field(converters.string),
    avatar: new Field(converters.maybeNull(converters.string)),
    cover: new Field(converters.maybeNull(converters.string)),
});
