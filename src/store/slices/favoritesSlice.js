import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites;

export const favoritesReducer = favoritesSlice.reducer;
