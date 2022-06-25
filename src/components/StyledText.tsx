/** @format */

import { Text, TextProps } from "./Themed";

const MonoText: React.FC<TextProps> = (props) => {
    return (
        <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
    );
};

export default MonoText;
