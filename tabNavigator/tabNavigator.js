import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Amis from "../screen/amis";
import ListMessage from "../screen/listMessage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Suggestion from "../screen/suggestion";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { Icon } from "native-base";
const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="listMessage"
        component={ListMessage}
      />
      <Tab.Screen
        name="amis"
        options={{
          tabBarLabel: "Amis",
          tabBarIcon: ({ color, size }) => (
            <Icon
              as={FontAwesome5}
              name="user-friends"
              color={color}
              size={5}
            />
          ),
        }}
        component={Amis}
      />
      <Tab.Screen
        name="suggestion"
        options={{
          tabBarLabel: "suggestion",
          tabBarIcon: ({ color, size }) => (
            <Icon as={FontAwesome5} name="user-plus" color={color} size={5} />
          ),
        }}
        component={Suggestion}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
