/** @format */

import BottomTabIcon from "./BottomTabIcon";

export type BottomTabIconPropType = {
    focused: boolean;
    color: string;
    size: number;
};

export const BottomTabIconHome = (props: BottomTabIconPropType) => {
    return (
        <BottomTabIcon name="home-outline" focusIconName="home" {...props} />
    );
};

export const BottomTabIconSearch = (props: BottomTabIconPropType) => {
    return (
        <BottomTabIcon
            name="search-outline"
            focusIconName="search-sharp"
            {...props}
        />
    );
};

export const BottomTabIconMenu = (props: BottomTabIconPropType) => {
    return (
        <BottomTabIcon
            name="person-circle-outline"
            focusIconName="person-circle"
            {...props}
        />
    );
};

export const BottomTabIconEdit = (props: BottomTabIconPropType) => {
    return (
        <BottomTabIcon
            name="add-circle-outline"
            focusIconName="add-circle-sharp"
            {...props}
        />
    );
};
