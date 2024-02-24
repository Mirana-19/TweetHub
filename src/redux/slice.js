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
    clearUsers(state) {
      state.data = initialState.data;
      state.page = initialState.page;
      state.error = initialState.error;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.data = [...state.data, ...payload];
        state.isLoading = false;
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
      })
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.error = action.error.message || 'An error occurred';
          state.isLoading = false;
          console.error('API request failed with error:', action.error);
        }
      );
  },
  selectors: {
    selectTweets: state => state.data,
    selectError: state => state.error,
    selectIsLoading: state => state.isLoading,
    selectPage: state => state.page,
  },
});

export const tweetsReducer = tweetSlice.reducer;
export const { incrementPage, clearUsers } = tweetSlice.actions;
export const { selectTweets, selectError, selectIsLoading, selectPage } =
  tweetSlice.selectors;
