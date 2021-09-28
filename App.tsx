import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import AppRoutes from "./src/routes/app.routes";
import EmergencyButton from "./src/components/EmergencyButton";


export default function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}

