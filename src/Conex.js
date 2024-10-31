import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Conex({ navigation }) {
  const [dataName, setDataName] = useState("");
  const [dataPassword, setDataPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const change = () => {
    navigation.goBack();
  };
  const { height } = Dimensions.get("window");

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          height: height * 2,
          padding: height / 10,

          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{ fontSize: 40, color: "#1d8758", alignItems: "center" }}
          >
            Se connecter
          </Text>
        </View>
        <View style={{ marginVertical: 50 }}>
          <TextInput
            placeholder="entrer votre nom"
            style={{
              fontSize: 20,
              padding: 15,
              backgroundColor: "#d1edd9",
              width: height / 2,
              borderRadius: 10,
            }}
            value={userName}
            // onChange={(e) => setUserName(e.target.value)}
            onChangeText={(text) => setUserName(text)}
          />
          <TextInput
            placeholder="mots de passe"
            secureTextEntry
            style={{
              marginTop: height / 20,
              fontSize: 20,
              padding: 15,
              backgroundColor: "#d1edd9",
              width: height / 2,
              borderRadius: 10,
            }}
            value={userPassword}
            // onChange={(e) => setUserPassword(e.target.value)}
            onChangeText={(text) => setUserPassword(text)}
          />
          <View>
            <Text
              style={{
                alignSelf: "flex-end",
                marginTop: 30,
                color: "gray",
              }}
            >
              Mots de passe oublier ?
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("BottomTabs")}
            style={{
              backgroundColor: "#1d8758",
              paddingVertical: 20,
              borderRadius: 20,
              // paddingHorizontal: 60,
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 23,
              }}
            >
              Commencer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

// adb shell input keyevent 82
// adb reverse tcp:3002 tcp:3002
