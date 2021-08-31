import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IData, newsInitStateType } from '../types'; 

const initialState: newsInitStateType = {
  titles: [],
  headlines: {
    positive: [],
    neutral: [],
    negative: [],
  },
  loading: 'idle'
}

const fetchData = async (url: string, data: string, country?: string) => {
  const config = {
    method: 'POST',
    body: JSON.stringify({data, country}),
    headers: { 
      'Content-Type': 'application/json',
     }
  } 
  
  try {
    const newsData = await fetch(url, config);
    return newsData.json();
  } catch(err) { return err };
}

export const fetchTitles = createAsyncThunk(
  'sources',
  async (country: string) => {
    return fetchData('/sources', country);
  }
)

export const fetchHeadlines = createAsyncThunk(
  'authHeadlines',
  async (data: IData) => {
    return fetchData('/headlines', data.title, data.country);
  }
)

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTitles.fulfilled, (state, action) => {
      state.titles = action.payload
    })
    builder.addCase(fetchHeadlines.fulfilled, (state, action) => {
      state.headlines = action.payload
    })
  },
})

export default newsSlice.reducer;
