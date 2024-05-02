import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from "react-native";

type FormInput = {
  title: string;
} & TouchableOpacityProps;

export default function ActionFormButton({ title, ...rest }: FormInput) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: "#808080",
    borderRadius: 9,
    padding: 20,
    width: "80%",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
  },
  title: {
    fontWeight: "bold",
    color: "white",
  },
});
