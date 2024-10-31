import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../src/Login";
import Conex from "../src/Conex";
// import Dashboard from "../src/Dashboard";
// import QrcodeScane from "../src/QrcodeScane";
import BottomTabs from "../src/BottomTabs";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Conexion"
          component={Conex}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="BottomTabs" component={BottomTabs} options={{headerShown: false}}/> */}

        {/* <Stack.Screen name="BottomTabs" component={BottomTabs} options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
