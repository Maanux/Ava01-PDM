import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";

export default function LogOutCard({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    width: "50%",
    height: "16%",
    borderRadius: 9,
    padding: 20,
    alignItems: "center",
    alignContent: "center",
    left: 100,
    top: 76,
  },
});
