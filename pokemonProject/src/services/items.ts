import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetItems } from '../components/IGetItems'

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getItemByName: builder.query<IGetItems, string>({
      query: (name) => `item/${name}`,
    }),
  }),
})

export const { useGetItemByNameQuery } = itemApi