import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";

export default function Header({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363636",
    maxWidth: "100%",
    width: "100%",
    height: "15%",
    padding: 12,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
  },
});
