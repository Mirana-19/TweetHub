import { followUser, getUsers, unFollowUser } from './operations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  page: 1,
  error: '',
  isLoading: false,
};

const tweetSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    incrementPage: state => {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.data = [...state.data, ...payload];
      })
      .addCase(followUser.fulfilled, (state, { payload }) => {
        state.data = state.data.map(user =>
          user.id === payload.id ? { ...user, ...payload } : user
        );
      })
      .addCase(unFollowUser.fulfilled, (state, { payload }) => {
        state.data = state.data.map(user =>
          user.id === payload.id ? { ...user, ...payload } : user
        );
      });
  },
  selectors: {
    selectTweets: state => state.data,
    selectError: state => state.error,
    selectIsLoading: state => state.isLoading,
    selectPage: state => state.page,
  },
});

export const tweetsReducer = tweetSlice.reducer;
export const { incrementPage } = tweetSlice.actions;
export const { selectTweets, selectError, selectIsLoading, selectPage } =
  tweetSlice.selectors;
