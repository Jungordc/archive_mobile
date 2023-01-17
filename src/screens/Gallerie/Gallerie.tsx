/** @format */

import React from "react";
import { View } from "native-base";
import { observer } from "mobx-react-lite";
import { useLoadImages, OGallery } from "../../components/Composite/Gallery";

type GallerieProps = {};

const Gallerie: React.FC<GallerieProps> = ({ ...props }) => {
    const images = useLoadImages();
    return (
        <View>
            <OGallery data={images} />
        </View>
    );
};

export const OGallerie = observer(Gallerie);
export default Gallerie;