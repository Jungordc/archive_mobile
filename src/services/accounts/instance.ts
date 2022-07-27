/** @format */

import { AccountsModel } from "./models";

export const AccountInstance = AccountsModel.create({
    isAuthenticated: true,
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
