import {configureStore} from '@reduxjs/toolkit';
import {weatherAPI} from '../api/weatherAPI';

export const store = configureStore({
  reducer: {
    [weatherAPI.reducerPath]: weatherAPI.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weatherAPI.middleware),
});
