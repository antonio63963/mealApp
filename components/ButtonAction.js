import { View, Text, Pressable, StyleSheet } from "react-native";

function ButtonAction({ text, onPressed }) {
  return (
   <View style={styles.rootContainer}>
     <Pressable onPress={onPressed}>
       <View style={styles.innerContainer}>
         <Text style={styles.text}>{text}</Text>
       </View>
     </Pressable>
   </View>
  );
}

export default ButtonAction;

const styles = StyleSheet.create({
  rootContainer: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
  innerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "#eeeeee",
    // elevation: 5
  },
  text: {
    color: "#eeeeee",
    fontSize: 18,
    fontWeight: "bold",
  },
});
