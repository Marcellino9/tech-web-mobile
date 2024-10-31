import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Dashboard from "./Dashboard";
import QrcodeScane from "./QrcodeScane";
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="tabs_Dashboard"
      screenOptions={{
        tabBarActiveTintColor: "#49a3b7",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="tabs_Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="QrcodeScane"
        component={QrcodeScane}
        options={{
          tabBarLabel: "Scanne Qr",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="camera-party-mode"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
