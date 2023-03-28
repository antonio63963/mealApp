import { useState, createContext } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

function FavoriteContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(id) {
    setFavorites((currentState) => [id, ...currentState]);
  }
  function removeFavorite(id) {
    setFavorites((currentState) => currentState.filter((item) => item !== id));
  }

  const value = {
    ids: favorites,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
