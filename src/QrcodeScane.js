// "expo-camera",
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Linking,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useIsFocused } from "@react-navigation/native";
import ScannedAfterModal from "./ScannedAfterModal";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";

const QrcodeScane = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [contenu, setcontenue] = useState(false);
  const [visiteUrl, setVIsite] = useState(false);
  console.log(hasPermission, scanned);
  const isFocused = useIsFocused();
  const toogleModal = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    (async () => {
      setScanned(false);
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const AddFunc = async (data, type) => {
    try {
      await AsyncStorage.setItem(
        `${data}`,
        JSON.stringify([
          type,
          moment()
            .format("HH:mm:ss")
            .split(":")
            .map((item, index) =>
              index == 0 ? item + "h " : index == 1 ? item + "min " : item + "s"
            ).join``,
        ])
      );
    } catch (e) {
      console.error("Erreur lors du stockage des données", e);
    }
  };
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setcontenue(data);
    /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/g.test(data)
      ? setVIsite(true)
      : setVIsite(false);
    AddFunc(data, type);
    setOpenModal(true);
  };

  if (hasPermission === null) {
    return <Text>Demande de permission pour la camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Pas d'acces à la camera</Text>;
  }

  return (
    <View style={styles.container}>
      {isFocused ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 500, width: 400 }}
        />
      ) : null}
      {scanned && (
        <TouchableOpacity
          onPress={() => setScanned(false)}
          style={{
            paddingRight: 15,
            backgroundColor: "#49a3b7",
            paddingVertical: 20,
            borderRadius: 20,
            paddingHorizontal: 30,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            Scan QR code
          </Text>
        </TouchableOpacity>
      )}
      {openModal && (
        <ScannedAfterModal
          ouverture={openModal}
          visiteUrl={visiteUrl}
          fonctionnlery={toogleModal}
          information={contenu}
          // im={valeurIm}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default QrcodeScane;
