import { View, StyleSheet, FlatList, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/meal";

function CategoryScreen() {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={(cat) => (
          <CategoryGridTile title={cat.item.title} color={cat.item.color} />
        )}
        keyExtractor={(cat, idx) => cat.id}
        numColumns={2}
      />
    </View>
  );
}

export default CategoryScreen;
