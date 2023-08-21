import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
