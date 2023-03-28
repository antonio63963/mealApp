import { useLayoutEffect } from "react";

import { MEALS } from "../data/meal";

import ListMealsItems from "../components/ListMealsItems";
import MessageScreen from "../components/MessageScreen";

function MealsOverviewScreen({ route, navigation }) {
  const { categoryId, title } = route.params;
  const meals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });
  
  useLayoutEffect(() => {
    navigation.setOptions({title});

  }, [navigation])

  return (
    <ListMealsItems listMeals={meals}>
      <MessageScreen
        message={"Sorry! No meals in this category..."}
      />
    </ListMealsItems>
  );
}

export default MealsOverviewScreen;
