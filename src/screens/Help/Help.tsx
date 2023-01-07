/** @format */

import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

export type HelpProps = {};
const Help: React.FC<HelpProps> = ({}) => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        try {
            // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            console.log(result);

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            console.log("Error......>>", error);
        }
    };

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Button
                title="Pick an image from camera roll"
                onPress={pickImage}
            />
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                />
            )}
        </View>
    );
};

Help.displayName = "Help";
export default Help;
