/** @format */

import React from "react";
import { ScrollView } from "react-native";
import { Text, Heading } from "native-base";
import { HStack, VStack } from "native-base/src/components/primitives/Stack";
import { View } from "native-base/src/components/basic/View";

import { RootStackScreenProps } from "../../navigation/types";
import RootContainer from "../../components/Primitive/RootContainer/Container";
import ProfileImageButton from "../../components/Composite/ProfileImages/ProfileImageButton";
import SubButtonContainer from "../../containers/Actions/SubButtonContainer";
import IconLabel from "../../components/Primitive/IconLabel/IconLabel";

export type ProfileProps = {} & RootStackScreenProps<"Profile">;

export type SuscriberTextProps = {
    name: string | number;
    n: string | number;
};
export const SuscriberText: React.FC<SuscriberTextProps> = ({ n, name }) => {
    return (
        <HStack space={2} alignItems="center">
            <Heading color="coolGray.600" size="md">
                {n}
            </Heading>
            <Text color="coolGray.600">{name}</Text>
        </HStack>
    );
};

const Profile: React.FC<ProfileProps> = ({ route: { params }, navigation }) => {
    return (
        <RootContainer>
            <ScrollView>
                <ProfileImageButton btn={<SubButtonContainer />} />
                <View my={3} p={2}>
                    <VStack mb={3}>
                        <Heading>Unicaf Schoolarships</Heading>
                        <Text>@username </Text>
                    </VStack>
                    <View>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Recusandae harum doloribus, cumque quo labore
                            ad dolor, consequatur quia nesciunt aliquid expedita
                            unde quas voluptate magnam accusantium nihil. Eaque,
                            omnis consectetur.
                        </Text>
                    </View>
                    <VStack my={3} space={2}>
                        <IconLabel icon="link" label="https://www.mashin.com" />
                        <IconLabel
                            icon="calculator"
                            label="A rejoins Archive depuis le 23/3/2012"
                        />
                        <IconLabel icon="briefcase" label="Education" />
                        {/* <HStack alignItems="center" space={2}>
                            <Icon as={Ionicons} name="md-link" />
                            <Text color="coolGray.500">
                                https://www.mashin.com
                            </Text>
                        </HStack> */}
                        {/* <HStack alignItems="center" space={2}>
                            <Icon as={Ionicons} name="md-calendar" />
                            <Text color="coolGray.500">
                                A rejoins Archive depuis le 23/3/2012
                            </Text>
                        </HStack> */}
                        {/* <HStack alignItems="center" space={2}>
                            <Icon as={Ionicons} name="briefcase" />
                            <Text color="coolGray.500">Education</Text>
                        </HStack> */}
                    </VStack>
                    <View>
                        <HStack space={5}>
                            <SuscriberText n={243} name="Abonners" />
                            <SuscriberText n={34} name="Abonnements" />
                        </HStack>
                    </View>
                </View>
                <View>
                    <Text>Content here</Text>
                </View>
            </ScrollView>
        </RootContainer>
    );
};

Profile.displayName = "Profile";
export default Profile;
