import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetItems } from '../models/IGetItems'

export const berryApi = createApi({
  reducerPath: 'berryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllBerries: builder.query<IGetItems, string>({
      query: () => `berry/`,
    }),
    getBerryByName: builder.query({
      query: (name) => `berry/${name}`,
    }),
}),
})

export const { useGetAllBerriesQuery, useGetBerryByNameQuery,  } = berryApi