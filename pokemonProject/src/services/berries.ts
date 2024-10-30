import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const berryApi = createApi({
  reducerPath: 'berriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getBerryByName: builder.query({
      query: (name) => `berry/${name}`,
    }),
  }),
})

export const { useGetBerryByNameQuery } = berryApi