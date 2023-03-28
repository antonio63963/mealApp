import { useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { FavoriteContext } from "../store/context/favorite-context";

import MealItem from "../components/MealItem";

export function renderMealItem(meal) {
  const { id, title, imageUrl, duration, complexity, affordability } =
    meal.item;
  const itemData = { id, title, imageUrl, duration, complexity, affordability };
  return <MealItem {...itemData} />;
}

function ListMealsItems({ listMeals }) {
  return (
    <View style={styles.rootContainer}>
      {listMeals.length ? (
        <FlatList
          data={listMeals}
          keyExtractor={(item, idx) => `${idx}_meal`}
          renderItem={renderMealItem}
        />
      ) : (
        <View style={[styles.rootContainer]}>
          <Text>No Favorite Meals Yet...</Text>
        </View>
      )}
    </View>
  );
}

export default ListMealsItems;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#eeeeee",
    fontSize: 32,
    fontWeight: "bold",
  },
});
