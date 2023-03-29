import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/meal";

import ListMealsItems from "../components/ListMealsItems";
import MessageScreen from "../components/MessageScreen";

function FavoriteScreen() {
  const navigation = useNavigation();
  // const favoriteContext = useContext(FavoriteContext);
  // const meals = MEALS.filter((meal) => favoriteContext.ids.includes(meal.id));
  const favoriteIds = useSelector(state => state.favoriteMeals.ids);
  const meals = MEALS.filter(meal => favoriteIds.includes(meal.id));

  return (
    <ListMealsItems listMeals={meals}>
      <MessageScreen
        message={"No Favorite Meals Yet..."}
        buttonText="Go to Select!"
        onButton={() => navigation.navigate('MealCategories')}
      />
    </ListMealsItems>
  );
}

export default FavoriteScreen;
