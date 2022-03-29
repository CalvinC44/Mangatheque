import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SerieManga from "./components/SerieManga";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mangaWrapper}>
        <Text style={styles.sectionTitle}>Séries de manga</Text>
        <View style={styles.items}>
          <SerieManga />
          <SerieManga />
          <SerieManga />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED"
  },
  mangaWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {
    marginTop: 30
  }
});
