import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {WEATHER_API_KEY, WEATHER_API_URL} from '@env';

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: `${WEATHER_API_URL}`,
  }),
  endpoints: builder => ({
    getWeather: builder.query({
      query: (city: string) => `current.json?key=${WEATHER_API_KEY}&q=${city}`,
    }),
  }),
});

export const {useGetWeatherQuery} = weatherAPI;
