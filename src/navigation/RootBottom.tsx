/** @format */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { RootTabParamList } from "./types";
import TabBarIcon from "./TabBarIcon";
// screen
import Setting from "../screens/Setting/Setting";
import { HomeNavigator } from "./Home";
import { EditionNavigator } from "./Edition";
import MeDash from "../screens/MeDash/MeDash";
import { MeDashNavigator } from "./Dash";
import { useTheme } from "native-base";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator: React.FC = () => {
    const theme = useTheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: theme.colors.primary[500],
            }}
        >
            <BottomTab.Screen
                options={{
                    title: "Acceuil",
                    header: () => null,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="grid-sharp" color={color} />
                    ),
                }}
                name="Home"
                component={HomeNavigator}
            />
            <BottomTab.Screen
                name="Edit"
                component={EditionNavigator}
                options={{
                    title: "Nouveau",
                    header: () => null,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="add-circle-sharp" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="MeDash"
                component={MeDashNavigator}
                options={{
                    title: "Archive",
                    header: () => null,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="person-sharp" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;
