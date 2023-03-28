import { View, Text, StyleSheet } from "react-native";

import ButtonAction from "./ButtonAction";

function MessageScreen({message, buttonText, onButton}) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{message}</Text>
      {onButton && <ButtonAction text={buttonText} onPressed={onButton} />}
    </View>
  );
}

export default MessageScreen;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#eeeeee",
    fontSize: 32,
    fontWeight: "bold",
  },
});
