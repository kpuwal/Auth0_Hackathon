import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { statsInitStateType, maxProp } from '../types';

const serverUrl = process.env.REACT_APP_SERVER_URL;

const objInint: maxProp = {
  month: 0,
  mood: "",
  posY: 0,
  posX: 0,
  txtVal: 0,
}

const initialState: statsInitStateType = {
  byCountries: {
    data: [],
    happy: "unknown yet",
    sad: "unknown yet",
  },
  byTitles: {
    data: [],
    happy: [],
    sad: [],
  },
  byDates: {
    posPoints: "",
    neuPoints: "",
    negPoints: "",
    max: [],
    main: objInint,
    second: objInint,
    third: objInint,
    totalWorldMood: {
      name: "unknown",
      data: 0,
      best: [0, 0],
      worst: [0, 0],
    }
  },
}

const fetchResource = async (url: string, token: string) => {
  console.log("try to fetch")
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
    return fetchResource(`${serverUrl}/statistics`, token);
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
