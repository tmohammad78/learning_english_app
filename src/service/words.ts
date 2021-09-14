import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const wordsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery } = wordsApi;
