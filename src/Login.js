import { useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
// import logo from "";
const Login = ({ navigation }) => {
  const change = () => {
    navigation.navigate("BottomTabs");
  };
  const { height } = Dimensions.get("window");

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: height * 2 }}>
      <View>
        <ImageBackground
          style={{
            height: height / 2.5,
            marginTop: 100,
          }}
          resizeMode="contain"
          source={require("../assets/qr-code.1024x834.png")}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 60,
          paddingTop: 10,
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Text>
          <Text
            style={{
              fontSize: 30,
              color: "#49a3b7",
            }}
          >
            Scan
            <Text
              style={{
                fontSize: 30,
                color: "#fc6829",
              }}
            >
              Cr-Code
            </Text>
          </Text>
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 50,
          paddingTop: 10,
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: "gray",
          }}
        >
          Rapide, facile, efficace – Scannez maintenant !
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 50,
          marginTop: 100,
          paddingTop: 10,
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={change}
          style={{
            backgroundColor: "#49a3b7",
            paddingVertical: 20,
            borderRadius: 20,
            paddingHorizontal: 60,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            Commencer
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
