import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import SectionCard from "../../components/containers/section/SectionCard";
import SectionListd from "../../components/containers/SectionListd";
import LogOutCard from "../../components/containers/section/LogOutCard";
import { Link, router } from "expo-router";
import FullScreen from "../../components/containers/FullScreen";
import Header from "../../components/containers/Header/Header";
//teste
import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";

import AcTion from "../../components/AcTion";

//export default function Carros()
function Carros() {
  return (
    <FullScreen>
      <View>
        <Header>
          <Text style={styles.Title}>HorizonCarz</Text>
        </Header>
        <SectionCard>
          <Text style={styles.Title}>Carros a Venda</Text>
          <SectionListd />
        </SectionCard>
        <LogOutCard>
          <AcTion />
        </LogOutCard>
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
    color: "black",
    fontSize: 25,
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
