import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../slices/favoritesSlice';
import style from './FavoritesList.module.css';

const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={style.favorites_list}>
      <h2>Favorites List</h2>
      <div className={style.favorites_lists}>
        {favorites.map((favorite) => (
          <div className={style.favorites_item} key={favorite.id}>
            <h3>{favorite.title}</h3>
            <p>{favorite.description}</p>
            <p>Published on: {favorite.publishedAt.slice(0, 10)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
