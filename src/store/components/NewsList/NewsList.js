import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNews } from '../../slices/newsSlice';
import fetchNews from '../../slices/newsApi';
import NewsItem from '../NewsItem/NewsItem';

const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div>
      <h2>News List</h2>
      {news.map((article) => (
        <NewsItem key={article.id} newsItem={article} />
      ))}
    </div>
  );
};

export default NewsList;
