/** @format */

import { types, cast, Instance } from "mobx-state-tree";
import { Asset, PagedInfo } from "expo-media-library";

const MediaTypeValue = types.union(
    types.literal("audio"),
    types.literal("photo"),
    types.literal("video"),
    types.literal("unknown")
);

const MediaSubtype = types.union(
    types.literal("depthEffect"),
    types.literal("hdr"),
    types.literal("highFrameRate"),
    types.literal("livePhoto"),
    types.literal("panorama"),
    types.literal("screenshot"),
    types.literal("stream"),
    types.literal("timelapse")
);

/**
 * Image select
 */
const ImageAssetModel = types.model("ImageAssetModel", {
    id: types.identifier,
    filename: types.string,
    uri: types.string,
    width: types.number,
    height: types.number,
    creationTime: types.number,
    modificationTime: types.number,
    duration: types.number,
    mediaType: MediaTypeValue,
    albumId: types.optional(types.maybe(types.string), undefined),
    mediaSubtypes: types.optional(
        types.maybe(types.array(MediaSubtype)),
        undefined
    ),
});

/**
 *
 */
type IImageAsset = Instance<typeof ImageAssetModel>;

/**
 *
 */
export const GalleryModel = types
    .model("GalleryModel", {
        loading: types.boolean,
        endCursor: types.string,
        hasNextPage: types.boolean,
        totalCount: types.number,
        selected: types.array(types.reference(ImageAssetModel)),
        images: types.array(ImageAssetModel),
    })
    .actions((self) => ({
        initImages(pageInfo: PagedInfo<Asset>) {
            self.images = cast(pageInfo.assets);
            self.endCursor = pageInfo.endCursor;
            self.hasNextPage = pageInfo.hasNextPage;
            self.totalCount = pageInfo.totalCount;
        },
        /**
         *
         * @param images
         */
        addImages(images: Asset[]) {
            self.images.concat(images);
        },
        /**
         *
         * @param image
         */
        selectImage(image: IImageAsset) {},
        /**
         *
         */
        toogleSelect(image: IImageAsset) {
            console.log("toogleSelect", self.selected.includes(image));
        },
        /**
         *
         */
        clearSelected() {
            self.selected = cast([]);
        },
    }));

export const InstGallery = GalleryModel.create({
    images: [],
    selected: [],
    loading: false,
    endCursor: "",
    hasNextPage: false,
    totalCount: 0,
});