import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../slices/favoritesSlice';
import style from './NewsItem.module.css';

const NewsItem = ({ newsItem }) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(newsItem));
  };

  return (
    <div className={style.news_item}>
      <h2 className={style.news_title}>{newsItem.title}</h2>
      <p className={style.news_description}>{newsItem.description}</p>
      <p>Published on: {newsItem.date}</p>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default NewsItem;
