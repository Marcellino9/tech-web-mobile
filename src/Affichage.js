import React from "react";
import { Avatar, Button } from "react-native-paper";
import { Text, View, TouchableOpacity, Image } from "react-native";
import moment from "moment";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ConfirmationSupp from "./ConfirmationSupp";
const Affichage = ({ contenu, value, navigation, FetchData }) => {
  const [poUp, setPopUpSupp] = React.useState(false);
  const isFocused = useIsFocused();
  const dateValue = moment().format("DD-MM-YYYY");
  const funcConfi = () => {
    setPopUpSupp(!poUp);
  };
  const suppData = async () => {
    try {
      await AsyncStorage.removeItem(`${contenu}`);
      console.log(`${contenu}`);
      FetchData();
      // console.log("activer");
    } catch (e) {
      console.error("Erreur lors de la suppression des données", e);
    }
  };
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "white",
        elevation: 5,
        padding: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderRadius: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Text>
            <Text style={{ marginTop: 3, fontSize: 15, fontWeight: "bold" }}>
              Type : {JSON.parse(value)[0]}
            </Text>
          </Text>
          <View
            style={{
              flexDirection: "column",
              width: "85%",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text>contenu : {contenu} </Text>
            </View>
            <View>
              <Text> heures : {JSON.parse(value)[1]} </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          // onPress={() => suppData()}
          onPress={() => funcConfi()}
        >
          <Image
            source={require("../assets/trash_6070867.png")}
            style={{
              width: 50,
              height: 50,
              resizeMode: "cover",
              position: "absolute",
              right: 0,
              // borderRadius: 200,
            }}
          />
        </TouchableOpacity>
      </View>
      {poUp && (
        <ConfirmationSupp
          poUp={poUp}
          funcConfi={funcConfi}
          contenu={contenu}
          suppData={suppData}
        />
      )}
    </TouchableOpacity>
  );
};
export default Affichage;
