import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApi = createAsyncThunk(
  'api/fetchApi',
  async ({ url, method, body }) => {
    const options = {
      method,
      headers: { 'Content-Type': 'application/json' },
      ...(method === 'POST' && { body: JSON.stringify(body) }),
    };

    const res = await fetch(url, options);
    const data = await res.json();
    return { data, status: res.status };
  }
);

export const axiosApi = createAsyncThunk(
  'api/axiosApi',
  async ({ url, method, body }) => {
    let res;
    if (method === 'GET') {
      res = await axios.get(url);
    } else {
      res = await axios.post(url, body);
    }
    return { data: res.data, status: res.status };
  }
);

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    loading: false,
    data: null,
    error: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.status = action.payload.status;
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(axiosApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(axiosApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.status = action.payload.status;
      })
      .addCase(axiosApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;