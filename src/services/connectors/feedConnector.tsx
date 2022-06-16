/** @format */

import * as React from "react";

export function connectorFeedCards<T>(Components: React.ComponentType<T>) {
    return (props: T & { onSelect?: (e: any) => void }) => {
        const [saved, setSaved] = React.useState<boolean>(false);
        const onPress = React.useCallback(() => {
            props.onSelect?.(123);
            console.log("selected");
        }, []);
        return (
            <Components
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi"
                saved={saved}
                // onSave ={savePostBottonSheet.onOpen}
                // onMenu ={actionBottonSheet.onOpen}
                infos={["1 jour environs", "200 j'aimes", "2000 vues"]}
                baseOnText="Base sur votre historiques"
                onPress={onPress}
                {...props}
            />
        );
    };
}
