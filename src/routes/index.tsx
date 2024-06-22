import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackRoutes from "./stackroutes";
import TabRoutes from "./tabroutes";
import { SafeAreaView } from "react-native";

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
