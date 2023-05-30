import { createSlice } from '@reduxjs/toolkit';
import fetchNews from './newsApi';

const newsSlice = createSlice({
  name: 'news',
  initialState: [],
  reducers: {
    setNews: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: {
    [fetchNews.pending]: () => {
      console.log('Loading...');
    },
    [fetchNews.fulfilled]: (state, action) => {
      console.log('Fulfilled', action.payload);
      const news = action.payload.map((e) => ({
        id: Math.random().toString(),
        author: e.author,
        content: e.content,
        description: e.description,
        publishedAt: e.publishedAt,
        source: e.source,
        title: e.title,
        url: e.url,
        urlToImage: e.urlToImage,
      }));
      return news || [];
    },
    [fetchNews.rejected]: () => {
      console.log('Rejected');
    },
  },
});

export const { setNews } = newsSlice.actions;

export const selectNews = (state) => state.news;

export const newsReducer = newsSlice.reducer;
