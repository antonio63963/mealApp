import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import OcticonsIcons from "react-native-vector-icons/Octicons";

import { MEALS } from "../data/meal";

import Character from "../components/Character";

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
        <View style={styles.descriptionSection}>
          <Text style={styles.ingredTitle}>Ingredients:</Text>
          {ingredients.map((item, idx) => (
            <View style={styles.ingredientItem}>
              <OcticonsIcons name="dot-fill" color="#eee" seze={20} />
              <Text key={`${idx}_ingred`} style={styles.detailText}>
                 {item}
              </Text>
            </View>
          ))}
          <Text style={styles.ingredTitle}>Steps:</Text>
          <View style={styles.stepContainer}>
            {steps.map((item, idx) => (
              <Text key={`${idx}_step`} style={styles.detailText}>
                {idx + 1}. {item}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // padding: 16,
  },
  card: {
    backgroundColor: "#eee",
    // borderRadius: 8,
    // overflow: "hidden",
  },
  imageContainer: {
    position: 'relative',

  },
  titleWrapper: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    backgroundColor: '#080d1f',
    padding: 5,
    paddingRight: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    opacity: .7
  },
  title: {
    color: '#fff',
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
  descriptionSection: {
    padding: 16
  },
  ingredTitle: {
    color: "#eee",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  detailText: {
    marginLeft: 10,
    color: "#eee",
    opacity: 0.7,
    fontSize: 22,
    marginVertical: 8,
  },
  stepContainer: {
    backgroundColor: '#eee'
  }
});
