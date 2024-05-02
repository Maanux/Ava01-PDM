import { View, Text, FlatList, StyleSheet, SectionList } from "react-native";
import React from "react";

import data from "../../services/data";
import convertData from "../../helpers/convertData";

export default function SectionListd() {
  return (
    <View>
      <SectionList
        sections={convertData(data)}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.sectionTitle}>{item.brand}</Text>
            <Text style={styles.tab}>ID: {item.id}</Text>
            <Text style={styles.tab}>Modelo: {item.model}</Text>
            <Text style={styles.tab}>Ano: {item.year}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.TitleCars}>{section.brand}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontWeight: "bold",
    color: "white",
  },
  TitleCars: {
    fontWeight: "bold",
    color: "white",
    width: "100%",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    padding: 8,
    backgroundColor: "#363636",
    fontSize: 24,
    marginTop: 15,
  },
  sectionTitle: {
    marginTop: 24,
    fontWeight: "bold",
    color: "white",
    width: "100%",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    padding: 8,
    alignItems: "center",
    backgroundColor: "#696969",
  },

  tab: {
    color: "white",
    width: "90%",
    left: 10,
    top: 0,
    padding: 8,
    alignItems: "center",
    backgroundColor: "#808080",
  },
});
