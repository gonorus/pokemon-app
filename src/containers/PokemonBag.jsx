import React from 'react';
import PokemonCardList from '../components/PokemonCardList';
import UseOwnedPokemon from '../hooks/UseOwnedPokemon';

const PokemonBag = () => {
  const ownedPokemon = UseOwnedPokemon();
  return (<PokemonCardList pokemonList={ownedPokemon} />);
};
export default PokemonBag;