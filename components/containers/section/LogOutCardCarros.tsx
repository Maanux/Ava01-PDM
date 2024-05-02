import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";

export default function LogOutCardCarros({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    width: "11%",
    height: "45%",
    borderRadius: 9,
    padding: 10,
    left: 150,
    top: -45,
  },
});
