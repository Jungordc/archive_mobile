/** @format */

import { Platform } from "react-native";

export const fetchImage = async (src: any, options: object) => {
    try {
        const fetchCall: any = await fetch(src, options);
        const contentTypeHeader =
            Platform.OS === "web"
                ? fetchCall.headers.get("content-type")
                : fetchCall.headers.map["content-type"];
        if (contentTypeHeader.startsWith("image/")) {
            return true;
        } else {
            console.warn("Online fetched source is not a supported image");
            return false;
        }
    } catch (err) {
        console.warn("Error fetching source, falling back to initials", err);
        return false;
    }
};
