import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MediFriendsScreen from '../screens/mediFriendsScreen';
import CalendarScreen from '../screens/calendarScreen';
import GamesScreen from '../screens/gamesScreen';
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
        component={medifriendsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person-add" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Schedule"
        component={calendarNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-calendar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="History"
        component={gamesNavigator}
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

const medifriendsStack = createStackNavigator<TabOneParamList>();

function medifriendsNavigator() {
  return (
    <medifriendsStack.Navigator>
      <medifriendsStack.Screen
        name="Medifriends"
        component={MediFriendsScreen}
        options={{ headerShown: false}}
      />
    </medifriendsStack.Navigator>
  );
}

const calendarStack = createStackNavigator<TabTwoParamList>();

function calendarNavigator() {
  return (
    <calendarStack.Navigator>
      <calendarStack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ headerShown: false,}}
      />
    </calendarStack.Navigator>
  );
}
const gamesStack = createStackNavigator<TabThreeParamList>();

function gamesNavigator() {
  return (
    <gamesStack.Navigator>
      <gamesStack.Screen
        name="Games"
        component={GamesScreen}
        options={{ headerShown: false,}}
      />
    </gamesStack.Navigator>
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
