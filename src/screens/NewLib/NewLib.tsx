/** @format */

import { View, Text, Heading, Divider, Button } from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import ProfileImages from "../../components/Composite/ProfileImages/ProfileImages";
import InputTitle from "../../components/Primitive/InputTitle/InputTitle";

export type NewLibProps = {};
const NewLib: React.FC<NewLibProps> = ({}) => {
    return (
        <React.Fragment>
            <ScrollView bounces={false}>
                <ProfileImages />
                <View p={2} my={50}>
                    {/* <Heading fontSize="md" mb={2}>
                    Nouvelle bibliotheque
                </Heading> */}
                    {/* <Divider /> */}
                    <View>
                        <View mx={1}>
                            <InputTitle
                                textInputProps={{
                                    placeholder: "Nom",
                                }}
                            />
                        </View>
                        <View mx={1}>
                            <InputTitle
                                textInputProps={{
                                    placeholder: "Description",
                                    style: {
                                        fontSize: 20,
                                        fontWeight: "400",
                                    },
                                }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View
                h={50}
                // bg="amber.300"
                position="absolute"
                left={0}
                right={0}
                bottom={0}
                p={1}
                borderTopWidth="1"
                borderColor="coolGray.200"
            >
                <Button colorScheme="primary.500" maxW="56" borderRadius="full">
                    Enregistrer
                </Button>
            </View>
        </React.Fragment>
    );
};

NewLib.displayName = "NewLib";
export default NewLib;
