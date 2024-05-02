import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import React from "react";

type FormInput = {
  placeHolder?: string;
} & TextInputProps;

export default function FormInput({ placeholder, ...rest }: FormInput) {
  return (
    <View style={styles.container}>
      {placeholder && <Text style={styles.placeHolder}>{placeholder}</Text>}
      <TextInput {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    backgroundColor: "#C0C0C0",
    borderRadius: 4,
    padding: 4,
    width: "70%",
    marginBottom: 10,
  },
  placeHolder: {
    color: "black",
  },
});
