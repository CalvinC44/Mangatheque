import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../assets/colors/colors";
import mangaData from "../assets/data/mangaData";
import mangaSerieData from "../assets/data/mangaSerieData";

const Home = () => {
  const renderMangaItem = ({ item }) => {
    <TouchableOpacity>
      <ImageBackground source={item.image}></ImageBackground>
    </TouchableOpacity>;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.menuWrapper}></View>
        </SafeAreaView>

        <View style={styles.listMangaWrapper}>
          <Text style={styles.listMangaTitle}>Liste des mangas</Text>
          <View style={styles.listMangaCategorieWrapper}>
            <Text style={styles.listMangaCategoryText}>All</Text>
            <Text style={styles.listMangaCategoryText}>Shonen</Text>
            <Text style={styles.listMangaCategoryText}>Seinen</Text>
          </View>
          <View style={styles.listMangaItemsWrapper}>
            <FlatList
              data={mangaSerieData}
              renderItem={renderMangaItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator="false"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listMangaWrapper: {
    marginHorizontal: 20,
    marginTop: 20
  },
  listMangaTitle: {
    fontWeight: "bold",
    fontSize: 32
  },
  listMangaCategorieWrapper: {
    flexDirection: "row",
    marginTop: 20
  },
  listMangaCategoryText: {
    marginRight: 30,
    fontSize: 16,
    color: colors.gray
  }
});
export default Home;
