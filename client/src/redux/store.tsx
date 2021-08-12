import { configureStore } from '@reduxjs/toolkit';
// import newsReducer from './slices/newsSlice';
// import activeReducer from './slices/activeSlice';
// import statsReducer from './slices/statsSlice';

// import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    // news: newsReducer,
    // active: activeReducer,
    // stats: statsReducer,
  },
})

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
