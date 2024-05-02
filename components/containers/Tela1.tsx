import { View, Text, StyleSheet, Image } from "react-native";
import React, { PropsWithChildren } from "react";

export default function Tela1({ children }: PropsWithChildren) {
  return <View style={styles.box1}>{children}</View>;
}

const styles = StyleSheet.create({
  box1: {
    backgroundColor: "gray",
    width: "100%",
    height: 50,
    marginTop: 37,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
