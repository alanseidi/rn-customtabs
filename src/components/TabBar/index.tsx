import React from "react";
import {TouchableOpacity, View, Text, Alert} from "react-native";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs/src/types";
import {
  Container
} from "./styles";
import EmergencyButton from "../EmergencyButton";

interface TabBarProps extends BottomTabBarProps{}

export default function TabBar({ state, descriptors, navigation }: TabBarProps){
  return(
    <Container>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;
        const handleOnPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const handleOnLongPress = () => {
          Alert.alert('Longpress');
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        console.log(options);
        return (
          <View
            key={route.key}
          >
            {options.tabBarIcon !== undefined &&
              <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={handleOnPress}
                  onLongPress={handleOnLongPress}
                  style={{ flex: 1, alignItems:"center" }}
              >
                {options.tabBarIcon({
                  size: 40,
                  color: isFocused ? '#673ab7' : '#222',
                  focused: isFocused
                })}
                  <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                    {label}
                  </Text>
              </TouchableOpacity>
            }
            {options.tabBarLabel === 'emergency' &&
              <EmergencyButton
                navigation={navigation}
                route={route}
                onPress={handleOnPress}
                onLongPress={handleOnLongPress}
              />
            }
          </View>
        );
      })}
    </Container>
  );
}
