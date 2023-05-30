import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNews } from '../../slices/newsSlice';
import fetchNews from '../../slices/newsApi';
import NewsItem from '../NewsItem/NewsItem';
import style from './NewsList.module.css';
import { useNavigate } from 'react-router-dom';

const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className={style.news_list}>
      <h2 onClick={() => navigate('/favorites')} className={style.news}>
        News List
      </h2>
      <div className={style.news_lists}>
        {news.map((article) => (
          <NewsItem key={article.id} newsItem={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
