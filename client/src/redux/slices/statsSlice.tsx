import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { statsInitStateType } from '../types'; 

const initialState: statsInitStateType = {
  byCountries: [],
  byTitles: []
}

const fetchResource = async (url: string) => {
  try {
    const statsData = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    return statsData.json();
  } catch(err) { return err };
}

export const fetchStatistics = createAsyncThunk(
  'stats',
  async () => {
    return fetchResource('/statistics');
  }
)

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStatistics.fulfilled, (state, action) => {
      state.byCountries = action.payload.byCountries
      state.byTitles = action.payload.byTitles
    })
  },
})

export default statsSlice.reducer;
