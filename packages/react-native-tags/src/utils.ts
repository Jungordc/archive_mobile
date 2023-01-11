/** @format */

import { ViewStyle } from "react-native";

/**
 *
 * @param styles the style
 * @returns object of style
 */
export function converStyleArrayToObject<T = ViewStyle>(styles: T | T[]): T {
    if (Array.isArray(styles)) {
        return styles.reduce(
            (prev, current) => ({ ...prev, ...current }),
            {} as T
        );
    }
    return styles;
}

/**
 * @returns bool
 * @param text the value is string
 * @param tagOnString the expression for creating tags is list of string
 */
export function isMatchTags(text: string, tagOnString: string[] = []): boolean {
    return (
        tagOnString.includes(text.slice(-1)) &&
        !text.match(new RegExp(`^[${tagOnString.join("")}]+$`, "g"))
    );
}

export function indexOf(text: string, tags: string[]): boolean {
    return tags.indexOf(text.slice(0, -1).trim()) > -1;
}

/**
 *
 * @param text the tags text
 * @param tags the list of tags
 * @param createTagOnString the expression for creating tags is list of string
 * @returns boolean
 */
export function canAddTag(
    text: string,
    tags: string[],
    createTagOnString: string[] = []
): boolean {
    return (
        text.length > 1 &&
        isMatchTags(text, createTagOnString) &&
        !(tags.indexOf(text.slice(0, -1).trim()) > -1) &&
        !indexOf(text, tags)
    );
}

/**
 * return the last tag
 * @param tags list of tags
 * @returns
 */
export function getLastTag(tags: string[]): string {
    return tags.slice(-1)[0];
}
