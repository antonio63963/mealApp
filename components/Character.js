import {View, Text, StyleSheet} from 'react-native';

function Character({text, children}) {
  return (
    <View style={styles.container}>
      {children}
      <Text style={styles.charText}>{text}</Text>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  charText: {
    fontSize: 18,
    color: "grey",
    marginLeft: 5,
  },
});
