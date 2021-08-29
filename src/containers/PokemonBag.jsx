import React, { useContext, useMemo } from 'react';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import PokemonCardList from '../components/PokemonCardList';
import { PokedexContext } from '../context/pokedex';

const PokemonBag = () => {
  const { pokedex } = useContext(PokedexContext);
  const ownedPokemon = useMemo(() => {
    if (pokedex) {
      return Object.keys(pokedex).map(
        key => {
          const pokemon = pokedex[key];
          return pokemon.owned.map(
            owned => ({
              id: null,
              pokemonName: key,
              name: owned.name,
              image: pokemon.image,
              catchedDate: owned.catchedDate,
            })
          )
        }
      ).flat(1);
    }
    return [];
  })
  return (<PokemonCardList pokemonList={ownedPokemon} />);
};
export default PokemonBag;