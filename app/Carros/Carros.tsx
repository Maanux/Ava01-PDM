import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import SectionCard from "../../components/containers/section/SectionCard";
import SectionListd from "../../components/containers/SectionListd";
import LogOutCard from "../../components/containers/section/LogOutCard";
import { Link, router } from "expo-router";
import FullScreen from "../../components/containers/FullScreen";
import Header from "../../components/containers/Header/Header";
import { MaterialIcons } from "@expo/vector-icons";

import {
  ActionSheetProvider,
  connectActionSheet,
  useActionSheet,
} from "@expo/react-native-action-sheet";

import AcTion from "../../components/AcTion";
import LogOutCardCarros from "../../components/containers/section/LogOutCardCarros";

function Carros() {
  return (
    <FullScreen>
      <View>
        <Header>
          <Text style={styles.Title2}>HorizonCarz</Text>
          <LogOutCardCarros>
            <AcTion />
          </LogOutCardCarros>
        </Header>

        <SectionCard>
          <Text style={styles.Title}>Carros a Venda</Text>
          <SectionListd />
        </SectionCard>
      </View>
    </FullScreen>
  );
}

// teste
const ConnectApp = connectActionSheet(Carros);

export default ConnectApp;

const styles = StyleSheet.create({
  Title: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
  },
  Title2: {
    fontWeight: "bold",
    color: "white",
    fontSize: 33,
    marginTop: 25,
  },
  bold: {
    fontWeight: "bold",
  },
  head: {
    fontWeight: "bold",
    fontSize: 23,
  },
  tamanho: {
    width: "100%",
  },
});
