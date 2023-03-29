import { Provider } from "react-redux";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";

import FavoriteContextProvider from "./store/context/favorite-context";
import {store} from './store/redux/store';

import CategoryScreen from "./screens/CategoryScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
  headerStyle: { backgroundColor: "#080d1f" },
  headerTintColor: "white",
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        ...screenOptions,
        sceneContainerStyle: { backgroundColor: "#272d42" },
        drawerInactiveTintColor: "white",
        drawerContentStyle: { backgroundColor: "#272d42" },
      }}
    >
      <Drawer.Screen
        name="MealCategories"
        component={CategoryScreen}
        options={{
          title: "Meal Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: "Favorite Meals",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              ...screenOptions,
              contentStyle: { backgroundColor: "#272d42" },
            }}
          >
            <Stack.Screen
              name="Categories"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen name="Details" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteContextProvider> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
