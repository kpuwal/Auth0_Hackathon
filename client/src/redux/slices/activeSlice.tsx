import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICountries } from '../types'; 

const initialState = {
  mood: 0,
  country: { iso: "", label: "" },
  title: "",
}

export const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    activateMood: (state, action: PayloadAction<number>) => {
      state.mood = action.payload
    },
    activateCountry: (state, action: PayloadAction<ICountries>) => {
      state.country = action.payload
    },
    activateTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
  },
})

export const { activateMood, activateCountry, activateTitle } = activeSlice.actions;
export default activeSlice.reducer;
