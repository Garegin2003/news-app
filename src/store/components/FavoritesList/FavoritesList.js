import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../slices/favoritesSlice";

const FavoritesList = () => {
    const favorites = useSelector(selectFavorites)

    return (
        <div>
          <h2>Favorites List</h2>
          {favorites.map((favorite) => (
            <div key={favorite.id}>
              <h3>{favorite.title}</h3>
              <p>{favorite.description}</p>
              <p>Published on: {favorite.date}</p>
            </div>
          ))}
        </div>
      );
}

export default FavoritesList