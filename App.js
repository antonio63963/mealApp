import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

        <CategoryScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
