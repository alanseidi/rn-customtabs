import React from "react";
import {MaterialIcons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Index from "../pages/Index";
import ColetaSeletiva from "../pages/ColetaSeletiva";
import TabBar from "../components/TabBar";
import Emergencia from "../pages/Emergencia";
import EmergencyButton from "../components/EmergencyButton";

const {Navigator, Screen} = createBottomTabNavigator();

export default function AppRoutes(){

  return (
    <Navigator
      tabBar={props => <TabBar {...props}/> }
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Página Princial"
        component={Index}
        options={{
          tabBarIcon: (({size, color}) => (
            <MaterialIcons
              name="home"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Screen
        name="Emergência"
        component={Emergencia}
        options={{
          tabBarLabel: "emergency"
        }}
      />

      <Screen
        name="Coleta Seletiva"
        component={ColetaSeletiva}
        options={{
          tabBarIcon: (({size, color}) => (
            <MaterialIcons
              name="directions-car"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </Navigator>
  );
}
