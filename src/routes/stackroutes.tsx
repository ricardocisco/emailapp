import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import InboxScreen from "../screens/InboxScreen";
import { StyleSheet } from "react-native";
import TabRoutes from "./tabroutes";
import SettingsScreen from "../screens/SettingsScreen";
import WriteScreen from "../screens/WriteScreen";

const Stack = createNativeStackNavigator();

export default function StackRoutes({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabRoutes} />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Configurações"
        component={SettingsScreen}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="Escrever"
        component={WriteScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
