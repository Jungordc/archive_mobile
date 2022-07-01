/** @format */

export type ComonTypeContainerImage<T = { uri: string }> = {
    images?: T[];
    onPress?(image: T): void;
};
