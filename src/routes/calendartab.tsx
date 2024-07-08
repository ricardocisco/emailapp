import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CalendarScreen from "../screens/CalendarScreen";
import CalendarTaskScreen from "../screens/CalendarTaskScreen";
import CalendarGantScreen from "../screens/CalendarGantScreen";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

export default function CalendarTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#0368FF",
        tabBarInactiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="calendar-outline"
              type="ionicon"
              color={color}
              size={size}
            ></Icon>
          ),
        }}
        name="Calendar"
        component={CalendarScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="checkmark-circle-outline"
              type="ionicon"
              color={color}
              size={size}
            ></Icon>
          ),
        }}
        name="CalendarTask"
        component={CalendarTaskScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="browsers-outline"
              type="ionicon"
              color={color}
              size={size}
            ></Icon>
          ),
        }}
        name="CalendarGant"
        component={CalendarGantScreen}
      />
    </Tab.Navigator>
  );
}
