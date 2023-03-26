import { View, StyleSheet, FlatList, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/meal";

function CategoryScreen({ navigation }) {
  function onPressHandler({id, title}) {
    navigation.navigate("MealsOverview", { categoryId: id, title });
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={(cat) => (
          <CategoryGridTile
            title={cat.item.title}
            color={cat.item.color}
            onPress={onPressHandler.bind(this, {id: cat.item.id, title: cat.item.title})}
          />
        )}
        keyExtractor={(cat, idx) => cat.id}
        numColumns={2}
      />
    </View>
  );
}

export default CategoryScreen;
