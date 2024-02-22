import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d61124f6967ba8e3bd6bc1.mockapi.io';

export const getUsers = createAsyncThunk(
  'tweets/users',
  async (params, thunkAPI) => {
    try {
      const { data } = await axios.get('/tweets', {
        params: { ...params, limit: 3 },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const followUser = createAsyncThunk(
  'tweets/followUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.put(`/tweets/${user.id}`, {
        ...user,
        followers: user.followers + 1,
        following: true,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const unFollowUser = createAsyncThunk(
  'tweets/unFollowUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.put(`/tweets/${user.id}`, {
        ...user,
        followers: user.followers - 1,
        following: false,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
