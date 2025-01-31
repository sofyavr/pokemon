import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IGetItems } from '../models/IGetItems'

export const itemApi = createApi({
  reducerPath: 'itemApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllItems: builder.query<IGetItems, string>({
      query: () => `item/`,
    }),
    getItemByName: builder.query({
      query: (name) => `item/${name}`,
    }),
}),
})

export const { useGetAllItemsQuery, useGetItemByNameQuery,  } = itemApi