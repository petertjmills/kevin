import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MediFriendsScreen from '../screens/mediFriendsScreen';
import CalendarScreen from '../screens/calendarScreen';
import GamesScreen from '../screens/gamesScreen';
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
  BlogParamList,
  SettingsParamList
} from "../types";
import Blog from "../screens/blogScreen";
import SettingsScreen from '../screens/settingsScreen'

import { getColor, tw }  from '../constants/styling/tailwind'
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Medifriends"
      tabBarOptions={
        {
          activeTintColor:getColor("primary"),
          inactiveBackgroundColor: getColor("light"),
          activeBackgroundColor: getColor("light"),
          style: tw("h-20 drop-shadow"),
          showLabel: false
        }
      }
    >

      <BottomTab.Screen
        name="Schedule"
        component={calendarNavigator}
        options={
          {
            tabBarIcon: ({ color }) => <TabBarIcon name="calendar-today" color={color} />,
            showLabel: false
          }
        }
      />
      <BottomTab.Screen
        name="Blog"
        component={BlogNavigator}
        options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="library-books" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Redeem"
        component={gamesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="redeem" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Medifriends"
        component={medifriendsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="supervisor-account" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="settings" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Icon size={36} {...props}/>;
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
const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false,}}
      />
    </SettingsStack.Navigator>
  );
}
