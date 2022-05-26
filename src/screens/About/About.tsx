/** @format */

import { View, Text, Image } from "native-base";
import React from "react";

export type AboutProps = {};
const About: React.FC<AboutProps> = ({}) => {
    return (
        <View flex={1} p={4}>
            <View my={6}>
                <View alignItems="center" my="10">
                    <Image
                        alt="jungo archive"
                        _alt={{
                            fontWeight: "bold",
                            fontSize: "3xl",
                        }}
                        resizeMode="contain"
                        source={require("../../../assets/images/Logo Archives.png")}
                        style={{
                            height: 100,
                            width: "100%",
                        }}
                    />
                </View>
                <Text textAlign="center">
                    Jungo Archive est un réseau social en ligne permettant aux
                    utilisateur d'archiver, de partager, et de trouver des
                    examens, des travaux ( tfc, tfb, memoir, thèse), items,
                    exercices (devoirs, tp, td), syllabus(Cours),...
                </Text>
            </View>
            <View>
                <Text
                    color="coolGray.400"
                    fontWeight="bold"
                    fontSize="2xs"
                    textAlign="center"
                >
                    v0.1-aplha copyright 2022 Archive
                </Text>
            </View>
        </View>
    );
};

About.displayName = "About";
export default About;
