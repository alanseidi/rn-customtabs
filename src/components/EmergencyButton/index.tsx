import React from "react";
import {
  Container,
  Title
} from "./styles";
import {Alert, TouchableOpacityProps} from "react-native";
import {NavigationHelpers, ParamListBase, RouteProp} from "@react-navigation/native";
import {BottomTabNavigationEventMap} from "@react-navigation/bottom-tabs/src/types";

interface Props extends TouchableOpacityProps{
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  route: RouteProp<ParamListBase>;
  onPress: () => void;
  onLongPress: () => void;
}

export default function EmergencyButton({navigation, route, onPress, onLongPress}: Props){
  function handleOnPress(){
    onPress();
  }
  function handleOnLongPress(){
    onLongPress();
  }
  return(
    <Container
      onPress={handleOnPress}
      onLongPress={handleOnLongPress}
    >
      <Title>Botão do Pânico</Title>
    </Container>
  );
}
