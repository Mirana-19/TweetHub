import { getUsers } from './operations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      user: '',
      tweets: null,
      followers: null,
      avatar: '',
      id: '',
      following: false,
    },
  ],
  page: 1,
  error: '',
  isLoading: false,
};

const tweetSlice = createSlice({
  name: 'tweets',
  initialState,
  extraReducers: builder => {
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.data = payload;
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
export const { selectTweets, selectError, selectIsLoading, selectPage } =
  tweetSlice.selectors;
