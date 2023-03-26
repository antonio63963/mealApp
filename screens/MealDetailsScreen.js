import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { MEALS } from "../data/meal";

import Character from "../components/Character";
import ListItem from "../components/ListItems";

function MealDetailsScreen({ navigation, route }) {
  const { id, title } = route.params;
  const selectedMeal = MEALS.find((m) => m.id === id);
  const { imageUrl, affordability, complexity, duration, ingredients, steps } =
    selectedMeal;
  console.log(selectedMeal);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>
          <View style={styles.characters}>
            <Character text={`${duration}m`}>
              <Ionicons name="time" size={20} color="grey" />
            </Character>
            <Character text={capitalizeFirstLetter(complexity)}>
              <MaterialIcons name="stairs" size={20} color="grey" />
            </Character>
            <Character text={capitalizeFirstLetter(affordability)}>
              <MaterialIcons name="store" size={20} color="grey" />
            </Character>
          </View>
        </View>

        <ListItem title="Ingredients" isUl={true} list={ingredients} />

        <ListItem
          title="Steps"
          isUl={false}
          list={steps}
          bgColor="#eee"
          textColor="#080d1f"
        />
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: "#eee",
  },
  imageContainer: {
    position: "relative",
  },
  titleWrapper: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    backgroundColor: "#080d1f",
    padding: 5,
    paddingRight: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    opacity: 0.7,
  },
  title: {
    color: "#fff",
    fontSize: 24,
  },
  image: {
    width: "100%",
    height: 250,
  },
  characters: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
