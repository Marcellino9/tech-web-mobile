import * as React from "react";
import { Appbar, Avatar, Searchbar } from "react-native-paper";
import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import Affichage from "./Affichage";
import { useIsFocused } from "@react-navigation/native";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
const data = [
  {
    id: 1,
    title: "Arrivé",
  },
  {
    id: 2,
    title: "en attente",
  },
];
const Dashboard = ({ navigation }) => {
  const [searchValue, setSearValue] = React.useState("");
  const [dataInfo, setDataInfo] = React.useState([]);
  const [dataPresences, setDataPresences] = React.useState([]);
  const [aarivveAtt, setArriv] = React.useState({});
  const [MyTrueData, setMydata] = React.useState([]);
  const [nombreAbs, setAbs] = React.useState(null);
  const [congg, setcongg] = React.useState(null);
  const isFocused = useIsFocused();
  const datedujour = moment().format("DD-MM-YYYY");
  const FetchData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      if (keys.length > 0) {
        const result = await AsyncStorage.multiGet(keys);
        setMydata(result);
      } else {
        setMydata([]);
      }
    } catch (e) {
      console.error("Erreur lors de la récupération des données", e);
    }
  };
  React.useEffect(() => {
    FetchData();
  }, [isFocused]);
  const change = () => {
    navigation.navigate("QrcodeScane");
  };
  const onChangeSearch = (query) => {
    setSearValue(query);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Appbar.Header>
        <Text>
          <Text
            style={{
              fontSize: 30,
              color: "#49a3b7",
            }}
          >
            {" "}
            QR
          </Text>
        </Text>
        <Appbar.Content title="" />
        <Searchbar
          placeholder="Search"
          onChangeText={(text) => {
            onChangeSearch(text);
          }}
          style={{ width: "70%" }}
        />
        <TouchableOpacity onPress={() => change()}>
          <View style={{ marginLeft: 5 }}>
            <Image
              source={require("../assets/scanning_11207804.png")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "cover",
                borderRadius: 100,
              }}
            />
          </View>
        </TouchableOpacity>
      </Appbar.Header>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          padding: 10,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", justifyContent: "center" }}>
          Liste des code QR
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}
      >
        {MyTrueData &&
          MyTrueData.filter(([key, value]) => {
            return searchValue.toLowerCase() === ""
              ? [key, value]
              : (key + "" + JSON.parse(value)[1] + JSON.parse(value)[0])
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
          })
            .sort((a, b) => a - b)
            .map(([key, value], index) => {
              return (
                <View key={index}>
                  <View>
                    <Affichage
                      value={value}
                      contenu={key}
                      navigation={navigation}
                      FetchData={FetchData}
                    />
                  </View>
                </View>
              );
            })}
      </View>
    </ScrollView>
  );
};

export default Dashboard;
