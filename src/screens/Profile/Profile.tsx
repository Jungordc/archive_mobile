/** @format */

import React from "react";
import { ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, Text, Heading, VStack, HStack, Icon } from "native-base";
import { RootStackScreenProps } from "../../navigation/types";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import ProfileImageButton from "../../components/Composite/ProfileImages/ProfileImageButton";
import SubButtonContainer from "../../containers/Actions/SubButtonContainer";

export type ProfileProps = {} & RootStackScreenProps<"Profile">;

const Profile: React.FC<ProfileProps> = ({ route: { params }, navigation }) => {
    return (
        <RootContainer>
            <ScrollView>
                <ProfileImageButton btn={<SubButtonContainer />} />
                <Box my={3} p={2}>
                    <VStack mb={3}>
                        <Heading>Unicaf Schoolarships</Heading>
                        <Text>@username </Text>
                    </VStack>
                    <Box>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae harum doloribus, cumque quo labore
                            ad dolor, consequatur quia nesciunt aliquid expedita
                            unde quas voluptate magnam accusantium nihil. Eaque,
                            omnis consectetur.
                        </Text>
                    </Box>
                    <VStack my={3} space={2}>
                        <HStack alignItems="center" space={2}>
                            <Icon as={Ionicons} name="md-link" />
                            <Text color="coolGray.500">
                                https://www.mashin.com
                            </Text>
                        </HStack>
                        <HStack alignItems="center" space={2}>
                            <Icon as={Ionicons} name="md-calendar" />
                            <Text color="coolGray.500">
                                A rejoins Archive depuis le 23/3/2012
                            </Text>
                        </HStack>
                        <HStack alignItems="center" space={2}>
                            <Icon as={Ionicons} name="briefcase" />
                            <Text color="coolGray.500">Education</Text>
                        </HStack>
                    </VStack>
                    <Box>
                        <HStack space={5}>
                            <HStack space={2} alignItems="center">
                                <Heading color="coolGray.600" size="md">
                                    234
                                </Heading>
                                <Text color="coolGray.600">Abonners</Text>
                            </HStack>
                            <HStack space={2} alignItems="center">
                                <Heading color="coolGray.600" size="md">
                                    23
                                </Heading>
                                <Text color="coolGray.600">Abonnements</Text>
                            </HStack>
                        </HStack>
                    </Box>
                </Box>
                <Box>
                    <Text>Content here</Text>
                </Box>
            </ScrollView>
        </RootContainer>
    );
};

Profile.displayName = "Profile";
export default Profile;
