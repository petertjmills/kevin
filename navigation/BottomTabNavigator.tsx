import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import {BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList, BlogParamList} from '../types';
import Blog from "../screens/blogScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Medifriends"
      tabBarOptions={{ activeTintColor:'#4d7cfc', inactiveBackgroundColor: '#1C1c1c',activeBackgroundColor: '#292929' }}>
      <BottomTab.Screen
        name="Medifriends"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person-add" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Schedule"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-calendar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="History"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-game-controller" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Blog"
        component={BlogNavigator}
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="ios-bookmarks" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerShown: false}}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false,}}
      />
    </TabTwoStack.Navigator>
  );
}
const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerShown: false,}}
      />
    </TabThreeStack.Navigator>
  );
}
const BlogStack = createStackNavigator<BlogParamList>();

function BlogNavigator() {
    return (
        <BlogStack.Navigator>
            <BlogStack.Screen
                name="Blog"
                component={Blog}
                options={{ headerShown: false,}}
            />
        </BlogStack.Navigator>
    );
}
