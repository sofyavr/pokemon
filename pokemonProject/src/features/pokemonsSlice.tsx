import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface PArray {
  front_shiny: string;
}

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  sprites: PArray;
}

export interface PokemonState {
  pokemon: Pokemon | null; 
  error: string | null; 
}
export const fetchRandomPokemon = createAsyncThunk<Pokemon, void>('pokemons/fetchRandomPokemon', async () => {
  const randomId = Math.floor(Math.random() * 20) + 1; 
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`); 
  const data = await response.json();
  
  return {
    id: data.id,
    name: data.name,
    weight: data.weight,
    sprites: data.sprites
  };
});

// Создаем слайс
const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemon: null as Pokemon | null, 
    error: null as string | null, 
  } as PokemonState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomPokemon.fulfilled, (state, action) => {
        state.pokemon = action.payload;
        state.error = null; 
      })
      .addCase(fetchRandomPokemon.rejected, (state, action) => {
        state.error = action.error.message || null; 
      });
  },
});

export default pokemonSlice.reducer;