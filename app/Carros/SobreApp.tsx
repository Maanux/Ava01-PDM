import {
  View,
  Text,
  StyleSheet,
  Linking,
  Touchable,
  TouchableOpacity,
  Button,
} from "react-native";
import { Link, useNavigation } from "expo-router";
import React from "react";
import SobreCard from "../../components/containers/Sobre/SobreCard";
import FullScreen from "../../components/containers/FullScreen";
import Header from "../../components/containers/Header/Header";
import { CommonActions, NavigationContainer } from "@react-navigation/native";
import FormButton from "../../components/Form/FormButton";
import LogOutCard from "../../components/containers/section/LogOutCard";
import ButtonSobre from "../../components/containers/Sobre/ButtonSobre";
import AcTion from "../../components/AcTion";
import AcTionSobre from "../../components/containers/Sobre/ActionSobre";
import LogOutCardSobre from "../../components/containers/Sobre/LogOutCardSobre";

export default function SobreApp() {
  const handlePress = () => {
    Linking.openURL("https://github.com/Maanux");
  };
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "index" }],
      })
    );
  };

  return (
    <FullScreen>
      <View>
        <Header>
          <Text style={styles.Title}>HorizonCarz</Text>
          <LogOutCardSobre>
            <AcTionSobre />
          </LogOutCardSobre>
        </Header>
        <SobreCard>
          <Text style={styles.Title2}>Horizon Carz</Text>
          <Text style={styles.Text}>versão 1.0</Text>
          <Text style={styles.Text2}> Desenvolvido por: </Text>
          <Text style={styles.Text2}> Emanuel dos Santos Kanetchny </Text>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.Git}> Github Maanux </Text>
          </TouchableOpacity>

          <Text style={styles.copy}>© Maanux</Text>
        </SobreCard>
      </View>
    </FullScreen>
  );
}
const styles = StyleSheet.create({
  Title: {
    fontSize: 33,
    fontWeight: "bold",
    color: "white",
    top: 17,
  },
  Title2: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  Text: {
    fontSize: 15,
    top: 10,
    color: "white",
  },
  Text2: {
    fontSize: 17,
    top: 150,
    color: "white",
  },
  Git: {
    fontSize: 17,
    top: 160,
    fontWeight: "bold",
    color: "white",
  },
  copy: {
    fontSize: 17,
    top: 175,
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
  },
  head: {
    fontWeight: "bold",
    fontSize: 23,
  },
  log: {
    backgroundColor: "#DCDCDC",
    maxWidth: "80%",
    width: "17%",
    height: "6%",
    borderRadius: 4,
    padding: 8,
    alignItems: "center",
    left: 165,
    top: 50,
    marginTop: 10,
  },
  buttonStyle: {
    backgroundColor: "yellow",
  },
});
