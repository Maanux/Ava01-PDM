import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FullScreen from "../components/containers/FullScreen";
import Card from "../components/containers/Card";
import FormInput from "../components/Form/FormInput";
import { MaterialIcons } from "@expo/vector-icons";
import FormButton from "../components/Form/FormButton";

import React, { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHidden, setPasswordHidden] = useState(true);

  const handleOnOff = () => {
    setPasswordHidden(!passwordHidden);
  };
  const handleLogin = () => {
    if (username === "teste" && password === "123") {
      router.push("./Carros/Carros");
    } else {
      console.log("Nome de usuário ou senha incorretos");
    }
  };

  return (
    <FullScreen>
      <View style={styles.container}>
        <Image
          source={require("./../assets/BrandMarkLogo2.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Card>
          <FormInput
            value={username}
            placeholder="Usuario"
            onChangeText={setUsername}
          />
          <FormInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={passwordHidden}
          />
          <TouchableOpacity onPress={handleOnOff} style={styles.iconContainer}>
            <MaterialIcons
              name={passwordHidden ? "visibility-off" : "visibility"}
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <FormButton onPress={handleLogin} title="Logar" />

          <Text>Procure no melhor App do Mercado</Text>
        </Card>
        <Link href="./Carros/SobreApp" style={styles.copy}>
          <Text>© Maanux</Text>
        </Link>
        <StatusBar style="auto" />
      </View>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  iconContainer: {
    position: "relative",
    left: 90,
    bottom: 40,
  },
  copy: {
    fontSize: 17,
    top: 175,
    fontWeight: "bold",
  },
});
