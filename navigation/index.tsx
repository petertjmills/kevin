import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button, ColorSchemeName } from "react-native";
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import BottomTabNavigator from "./BottomTabNavigator";
import NotFoundScreen from "../screens/NotFoundScreen";
import loginScreen from "../screens/loginScreen"
import registerScreen from "../screens/registerScreen";


export default function Pepepepooniggerstyink({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <RootNavigator></RootNavigator>
    </NavigationContainer>
  );
}



// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
export const Stack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={loginScreen}/>
      <Stack.Screen name="Register" component={registerScreen}/>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

