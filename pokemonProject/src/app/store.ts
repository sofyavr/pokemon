import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { berryApi } from '../services/berry'
import { itemApi } from '../services/allItems'
import pokemonReducer from '../features/pokemonsSlice'
import moneyReducer from '../features/moneySlice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    counter: counterReducer,
    money: moneyReducer,
    [berryApi.reducerPath]: berryApi.reducer,
    [itemApi.reducerPath]: itemApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(berryApi.middleware, itemApi.middleware, ),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch