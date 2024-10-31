import { View, Text, TextInput, Dimensions, Linking } from "react-native";
import React, { useState } from "react";
import { Modal, Pressable, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

const ConfirmationSupp = ({ poUp, funcConfi, contenu, suppData }) => {
  return (
    <Modal animationType="slide" visible={poUp} transparent={true}>
      <Pressable
        style={{
          flex: 1,
          padding: 25,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            alignItems: "center",
            paddingTop: 45,
            borderRadius: 15,
            elevation: 5,
          }}
        >
          <View
            style={{
              position: "absolute",
              top: -45,
              shadowOpacity: 0.25,
              shadowRadius: 5,
              shadowOffset: { width: 0, height: 2 },
            }}
          >
            <Avatar.Image
              size={75}
              source={require("../assets/10507072.png")}
              style={{ marginLeft: 5, backgroundColor: "#fff" }}
            />
          </View>
          <View style={{ paddingVertical: 15 }}>
            <Text>
              <Text style={{ fontSize: 15 }}>
                <Text>Contenue :</Text>
              </Text>{" "}
              <Text>{contenu} </Text>
            </Text>
          </View>
          <View></View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              padding: 20,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => funcConfi()}
              style={{
                backgroundColor: "#49a3b7",
                paddingVertical: 15,
                borderRadius: 15,
                paddingHorizontal: 40,
                width: "50%",
                alignContent: "center",
                alignItems: "center",
                marginRight: 5,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                }}
              >
                annuler
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                suppData();
                funcConfi();
              }}
              style={{
                backgroundColor: "#fc6829",
                paddingVertical: 15,
                borderRadius: 15,
                paddingHorizontal: 40,
                width: "50%",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                }}
              >
                Supprimer
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    padding: 16,
    width: "90%",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#d1edd9",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default ConfirmationSupp;
