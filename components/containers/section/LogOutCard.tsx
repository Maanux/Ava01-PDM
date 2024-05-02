import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";

export default function LogOutCard({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCDCDC",
    maxWidth: "80%",
    width: "80%",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    alignContent: "center",
    left: 40,
    top: 10,
  },
});
