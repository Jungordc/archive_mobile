/** @format */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabPramList } from "./types";
import { useTheme } from "native-base";
import TabBarIcon from "./TabBarIcon";
// screens
import MeDash from "../screens/MeDash/MeDash";
import Home from "../screens/Home/Home";
import SelectCategorie from "../screens/SelectCategorie/SelectCategorie";

const BottomTab = createBottomTabNavigator<HomeTabPramList>();

const HomeTabNavigation: React.FC = () => {
    const theme = useTheme();
    return (
        <BottomTab.Navigator
            initialRouteName="Index"
            sceneContainerStyle={{
                backgroundColor: "#fff",
            }}
            screenOptions={{
                tabBarActiveTintColor: theme.colors.primary[500],
            }}
        >
            <BottomTab.Screen
                options={{
                    title: "Archive",
                    tabBarLabel: "Acceuil",
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="grid-sharp" color={color} />
                    ),
                }}
                name="Index"
                component={Home}
            />
            <BottomTab.Screen
                name="Edit"
                component={SelectCategorie}
                options={{
                    title: "Categorie",
                    tabBarLabel: "Nouveau",
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="add-circle-sharp" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="MeDash"
                component={MeDash}
                options={{
                    title: "Menu",
                    tabBarLabel: "Moi",
                    headerTitleAlign: "center",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="person-sharp" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

export default HomeTabNavigation;
