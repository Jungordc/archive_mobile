/** @format */

import { BottomTab } from "./navigatorCreator";
import { useTheme } from "native-base";
import TabBarIcon from "./TabBarIcon";
// screens
import MeDash from "../screens/MeDash/MeDash";
import Home from "../screens/Home/Home";
import SelectCategorie from "../screens/SelectCategorie/SelectCategorie";
import Search from "../screens/Search/Search";

const HomeTabNavigation: React.FC = () => {
    // const theme = useTheme();
    return (
        <BottomTab.Navigator
            initialRouteName="Index"
            sceneContainerStyle={
                {
                    // backgroundColor: theme.colors.white,
                }
            }
            screenOptions={{
                // tabBarActiveTintColor: theme.colors.coolGray[800],
                // tabBarInactiveTintColor: theme.colors.coolGray[500],
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                },
            }}
        >
            <BottomTab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: (props) => (
                        <TabBarIcon
                            name="home-outline"
                            focusIconName="home"
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
                            name="person-circle-outline"
                            focusIconName="person-circle-sharp"
                            {...props}
                        />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

export default HomeTabNavigation;
