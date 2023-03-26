import { View, Text, StyleSheet} from 'react-native';
import {useRoute}from '@react-navigation/native';

function MealDetailsScreen() {
  const route = useRoute();
  const {id, title} = route.params;
  return (<View>
    <Text>Details</Text>
    <Text>{title}</Text>
  </View>)
};

export default MealDetailsScreen;

const styles = StyleSheet.create({

});
