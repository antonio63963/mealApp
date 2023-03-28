import {View, Text, StyleSheet} from 'react-native';

function FavoriteScreen() {
  return (<View style={styles.rootContainer}>
    <Text>Favorite</Text>
  </View>)
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
