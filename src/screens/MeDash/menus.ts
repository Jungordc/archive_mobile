/** @format */

import { IoniconsNameType } from "../../components/Primitive/Type";
import { HomeTabPramList, RootStackParamList } from "../../navigation/types";

export type MenuItemType = {
    id: string;
    icon: IoniconsNameType;
    name: string;
    path: keyof RootStackParamList | keyof HomeTabPramList;
};

export const MENUS: MenuItemType[] = [
    {
        id: "1",
        icon: "library-outline",
        name: "Creer une bibliotheque",
        path: "NewLib",
    },
    {
        id: "2",
        icon: "help-circle-outline",
        name: "Aide et assistance",
        path: "Help",
    },
    {
        id: "3",
        icon: "information-circle-outline",
        name: "Apropos",
        path: "About",
    },
];
