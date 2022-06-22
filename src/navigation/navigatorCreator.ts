/** @format */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList, HomeTabPramList } from "./Types";

export const HomeStack = createNativeStackNavigator<RootStackParamList>();
export const BottomTab = createBottomTabNavigator<HomeTabPramList>();
