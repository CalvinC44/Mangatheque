import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView
} from "react-native";
import SerieManga from "./components/SerieManga";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.mangaWrapper}>
        <Text style={styles.sectionTitle}>Séries de manga</Text>
        <ScrollView style={styles.items}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Serie");
            }}
          >
            <SerieManga />
          </TouchableOpacity>
          <SerieManga />
          <SerieManga />
        </ScrollView>
      </View>
    </View>
  );
}

function SerieScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <TouchableOpacity
        style={{ backgroundColor: "red", padding: 20 }}
        onPress={() => {
          navigation.navigate("Manga");
        }}
      ></TouchableOpacity>
    </View>
  );
}

function MangaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Manga screen</Text>
      <TouchableOpacity
        style={{ backgroundColor: "red", padding: 20 }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      ></TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Serie" component={SerieScreen} />
        <Stack.Screen name="Manga" component={MangaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
