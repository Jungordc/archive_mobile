/** @format */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabPramList } from "./types";
import { useTheme } from "native-base";
import TabBarIcon from "./TabBarIcon";
// screens
import MeDash from "../screens/MeDash/MeDash";
import Home from "../screens/Home/Home";
import SelectCategorie from "../screens/SelectCategorie/SelectCategorie";
import Search from "../screens/Search/Search";

const BottomTab = createBottomTabNavigator<HomeTabPramList>();

const HomeTabNavigation: React.FC = () => {
    const theme = useTheme();
    return (
        <BottomTab.Navigator
            initialRouteName="Index"
            sceneContainerStyle={{
                backgroundColor: theme.colors.white,
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
                    headerShown: false,
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            name="ios-grid-outline"
                            focusIconName="grid-sharp"
                            {...props}
                        />
                    ),
                }}
                name="Index"
                component={Home}
            />
            <BottomTab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            name="search-outline"
                            focusIconName="search-sharp"
                            {...props}
                        />
                    ),
                }}
                name="Search"
                component={Search}
            />
            <BottomTab.Screen
                name="Edit"
                component={SelectCategorie}
                options={{
                    title: "Categorie",
                    tabBarLabel: "Nouveau",
                    headerTitleAlign: "center",
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            name="add-circle-outline"
                            focusIconName="add-circle-sharp"
                            {...props}
                        />
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
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            name="md-person-outline"
                            focusIconName="person-sharp"
                            {...props}
                        />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

export default HomeTabNavigation;
