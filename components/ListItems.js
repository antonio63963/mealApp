import { View, Text, StyleSheet } from "react-native";

function ListItem() {
  return (
    <View style={styles.stepContainer}>
      {steps.map((item, idx) => (
        <Text key={`${idx}_step`} style={styles.detailText}>
          {idx + 1}. {item}
        </Text>
      ))}
    </View>
  );
};

export default ListItem;
