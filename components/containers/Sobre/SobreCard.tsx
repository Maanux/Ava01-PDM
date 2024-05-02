import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";

export default function SobreCard({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A9A9A9",
    maxWidth: "80%",
    width: "80%",
    height: "59%",
    borderRadius: 9,
    padding: 12,
    alignItems: "center",
    left: 40,
    top: 50,
  },
});
