import { useContext } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

import { FavoriteContext } from "../store/context/favorite-context";

import MealItem from "../components/MealItem";
import ButtonText from "./ButtonAction";

export function renderMealItem(meal) {
  const { id, title, imageUrl, duration, complexity, affordability } =
    meal.item;
  const itemData = { id, title, imageUrl, duration, complexity, affordability };
  return <MealItem {...itemData} />;
}

function ListMealsItems({ listMeals, children }) {
  return (
    <View style={styles.rootContainer}>
      {listMeals.length ? (
        <FlatList
          data={listMeals}
          keyExtractor={(item, idx) => `${idx}_meal`}
          renderItem={renderMealItem}
        />
      ) : children}
    </View>
  );
}

export default ListMealsItems;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
