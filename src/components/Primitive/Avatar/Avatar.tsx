/** @format */

import { Avatar as NativeBaseAvatar } from "native-base";
import { IAvatarProps } from "native-base/lib/typescript/components/composites/Avatar/types";
import React from "react";

export type AvatarProps = {} & IAvatarProps;

const Avatar: React.FC<AvatarProps> = ({ ...props }) => {
    return <NativeBaseAvatar {...props} />;
};

export default Avatar;
