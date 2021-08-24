import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { statsInitStateType } from '../types'; 

const initialState: statsInitStateType = {
  byCountries: [],
  byTitles: [],
  byDates: []
}

const fetchResource = async (url: string, token: string) => {
  try {
    const statsData = await fetch(url, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
    return statsData.json();
  } catch(err) { return err };
}

export const fetchStatistics = createAsyncThunk(
  'stats',
  async (token: string) => {
    return fetchResource('/statistics', token);
  }
)

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatistics.fulfilled, (state, action) => {
      console.log("fetched ", action.payload)
      state.byCountries = action.payload.byCountries
      state.byTitles = action.payload.byTitles
      state.byDates = action.payload.byDates
    })
  },
})

export default statsSlice.reducer;
