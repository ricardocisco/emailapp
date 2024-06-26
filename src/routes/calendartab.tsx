import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CalendarScreen from "../screens/CalendarScreen";
import CalendarTaskScreen from "../screens/CalendarTaskScreen";
import CalendarGantScreen from "../screens/CalendarGantScreen";

const Tab = createBottomTabNavigator();

export default function CalendarTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="CalendarTask" component={CalendarTaskScreen} />
      <Tab.Screen name="CalendarGant" component={CalendarGantScreen} />
    </Tab.Navigator>
  );
}
