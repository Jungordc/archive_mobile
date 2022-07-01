/** @format */

import { ComonTypeContainerImage } from "../Types";

export const getFirstImage = (images: ComonTypeContainerImage["images"]) => {
    return (images?.length || 0) > 0 ? images?.[0] : undefined;
};
