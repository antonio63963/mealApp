import { View, StyleSheet, Text } from "react-native";

import { MEALS } from "../data/meal";

function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params;
  return (
    <View stye={styles.container}>
      <Text>Meals Overview Screen {categoryId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})
