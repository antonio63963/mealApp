import { useContext } from "react";

import { FavoriteContext } from "../store/context/favorite-context";
import { MEALS } from "../data/meal";

import ListMealsItems from "../components/ListMealsItems";

function FavoriteScreen() {
  const favoriteContext = useContext(FavoriteContext);
  const meals = MEALS.filter(meal => favoriteContext.ids.includes(meal.id))

  return <ListMealsItems listMeals={meals} />;
}

export default FavoriteScreen;
