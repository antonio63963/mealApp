import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function onPressMeal() {
    navigation.navigate("Details", { id, title });
  }

  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={onPressMeal}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressedCard : null)}
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  rootContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "black",
    backgroundColor: "white", // it's for IOS to show shadow!!!
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressedCard: {
    opacity: 0.5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  detailItem: {
    color: "grey",
    fontSize: 14,
    marginHorizontal: 8,
  },
});
