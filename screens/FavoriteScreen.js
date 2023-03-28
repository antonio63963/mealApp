import { useContext, useState } from "react";
import { ScrollView, View, Text, FlatList, StyleSheet } from "react-native";

import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/meal";

import { renderMealItem } from "../components/MealItem";

function FavoriteScreen() {
  const favoriteContext = useContext(FavoriteContext);

  console.log("Favorite Screen: ", favoriteContext.ids);
  return (
    <View style={styles.rootContainer}>
      {favoriteContext.ids.length ? (
        <FlatList
          data={favoriteContext.ids.map((id) =>
            MEALS.find((item) => item.id === id)
          )}
          keyExtractor={(item, idx) => `${idx}_fav`}
          renderItem={renderMealItem}
        />
      ) : null}
    </View>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
