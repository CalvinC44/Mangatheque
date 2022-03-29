import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const SerieManga = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}></View>
      {/*<Image
        style={styles.imageSerie}
        source={require("../assets/71gwzyXnaNL.jpg")}
  />*/}
      <View style={styles.itemRight}>
        <Text style={styles.itemText}>Titre</Text>
        <Text style={styles.itemText}>Date</Text>
        <Text style={styles.itemText}>Nombre de sorties</Text>
        <Text style={styles.itemText}>Auteur</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 75,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },
  itemLeft: {
    flex: 1,
    backgroundColor: "#aaa"
  },
  itemRight: {
    flex: 3,
    backgroundColor: "#aaa"
  },
  itemText: {},
  imageSerie: {}
});

export default SerieManga;
