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
    getGreatBall: builder.query({
      query: () => `item/great-ball`,
    }), 
    getDuskBall: builder.query({
      query: () => `item/dusk-ball`,
    }), 
    getNetBall: builder.query({
      query: () => `item/net-ball`,
    }), 
    getAntidote: builder.query({
      query: () => `item/antidote`,
    }), 
    getIceHeal: builder.query({
      query: () => `item/ice-heal`,
    }), 
}),
})

export const { useGetAllItemsQuery, useGetItemByNameQuery, useGetDuskBallQuery, useGetNetBallQuery, useGetAntidoteQuery, useGetIceHealQuery,  } = itemApi