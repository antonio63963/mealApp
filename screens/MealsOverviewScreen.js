import { View, StyleSheet, Text, FlatList } from "react-native";
import { useLayoutEffect } from "react";

import { MEALS } from "../data/meal";

import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const { categoryId, title } = route.params;
  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });
  
  useLayoutEffect(() => {
    navigation.setOptions({title});

  }, [navigation])
  return (
    <View stye={styles.container}>
      <FlatList
        data={meals}
        renderItem={(meal) => {
          const {id, title, imageUrl, duration, complexity, affordability } = meal.item;
          const itemData = {id, title, imageUrl, duration, complexity, affordability };
          return (
            <MealItem
              {...itemData}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
