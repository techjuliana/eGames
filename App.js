import React from "react";
import Routes from "./src/routes";
import { tema } from "./src/theme/theme";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer theme={tema}>
      <Routes />
    </NavigationContainer>
  );
}
