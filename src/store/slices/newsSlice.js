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
      return action.payload || [];
    },
    [fetchNews.rejected]: () => {
      console.log('Rejected');
    },
  },
});

export const { setNews } = newsSlice.actions;

export const selectNews = (state) => state.news;

export const newsReducer = newsSlice.reducer;
