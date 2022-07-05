/** @format */

import { useTheme } from "native-base";
import TabBarIcon from "./TabBarIcon";
// screens
import MeDash from "../screens/MeDash/MeDash";
import Home from "../screens/Home/Home";
import SelectCategorie from "../screens/SelectCategorie/SelectCategorie";
import Search from "../screens/Search/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeTabPramList } from "./types";

export const BottomTab = createBottomTabNavigator<HomeTabPramList>();

type tabBarIconPropType = {
    focused: boolean;
    color: string;
    size: number;
};

const tabBarIconHome = (props: tabBarIconPropType) => {
    return <TabBarIcon name="home-outline" focusIconName="home" {...props} />;
};
const tabBarIconSearch = (props: tabBarIconPropType) => {
    return (
        <TabBarIcon
            name="search-outline"
            focusIconName="search-sharp"
            {...props}
        />
    );
};
const tabBarIconMenu = (props: tabBarIconPropType) => {
    return (
        <TabBarIcon
            name="person-circle-outline"
            focusIconName="person-circle"
            {...props}
        />
    );
};

const tabBarIconEdit = (props: tabBarIconPropType) => {
    return (
        <TabBarIcon
            name="add-circle-outline"
            focusIconName="add-circle-sharp"
            {...props}
        />
    );
};

const HomeTabNavigation: React.FC = () => {
    const theme = useTheme();
    return (
        <BottomTab.Navigator
            initialRouteName="Index"
            sceneContainerStyle={{
                backgroundColor: theme.colors.white,
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.coolGray[800],
                tabBarInactiveTintColor: theme.colors.coolGray[500],
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                },
            }}
        >
            <BottomTab.Screen
                options={{
                    tabBarIcon: tabBarIconHome,
                }}
                name="Index"
                component={Home}
            />
            <BottomTab.Screen
                options={{
                    tabBarIcon: tabBarIconSearch,
                }}
                name="Search"
                component={Search}
            />
            <BottomTab.Screen
                name="Edit"
                component={SelectCategorie}
                options={{
                    tabBarIcon: tabBarIconEdit,
                }}
            />
            <BottomTab.Screen
                name="MeDash"
                component={MeDash}
                options={{
                    tabBarIcon: tabBarIconMenu,
                }}
            />
        </BottomTab.Navigator>
    );
};

export default HomeTabNavigation;
