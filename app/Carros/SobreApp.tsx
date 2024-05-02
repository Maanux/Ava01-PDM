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

export default function SobreApp() {
  const handlePress = () => {
    Linking.openURL("https://github.com/Maanux");
  };
  const navigation = useNavigation();
  return (
    <FullScreen>
      <View>
        <Header>
          <Text style={styles.Title}>HorizonCarz</Text>
        </Header>
        <SobreCard>
          <Text style={styles.Title}>Horizon Carz</Text>
          <Text style={styles.Text}>versão 1.0</Text>
          <Text style={styles.Text2}> Desenvolvido por: </Text>
          <Text style={styles.Text2}> Emanuel dos Santos Kanetchny </Text>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.Git}> Github Maanux </Text>
          </TouchableOpacity>

          <Text style={styles.copy}>© Maanux</Text>
        </SobreCard>
        {/* <Link href="./../index" style={styles.log}>
          <Text>LogOut</Text>
        </Link> */}
        <Button
          title="LogOut"
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        />
      </View>
    </FullScreen>
  );
}
const styles = StyleSheet.create({
  Title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  Text: {
    fontSize: 15,
    top: 10,
  },
  Text2: {
    fontSize: 17,
    top: 150,
  },
  Git: {
    fontSize: 17,
    top: 160,
    fontWeight: "bold",
  },
  copy: {
    fontSize: 17,
    top: 175,
    fontWeight: "bold",
    marginTop: 10,
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
});
