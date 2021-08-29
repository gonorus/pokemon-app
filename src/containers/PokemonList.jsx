import React, { useCallback, useEffect, useState } from 'react';
import PokemonCardList from '../components/PokemonCardList';
import { LOAD_POKEMON_LIST } from '../graphql/Queries';

const PokemonList = () => {
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const PokemonDataAPI = useCallback(() => LOAD_POKEMON_LIST.fetchMore({
    variables: { offset: offset },
    updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult
  }), [offset]);

  const FetchPokemonData = useCallback(() => {
    PokemonDataAPI().then(
      response => {
        const { count, nextOffset, results } = response.data.pokemons;
        const updatedData = [...pokemonList, ...results];
        setOffset(nextOffset);
        setPokemonList(updatedData);
        setHasMore(updatedData.length < count);
      }
    )
  }, [pokemonList]);

  useEffect(() => {
    FetchPokemonData();
  }, []);

  return (
    <PokemonCardList
      pokemonList={pokemonList}
      hasMore={hasMore}
      hasMoreFetch={FetchPokemonData}
    />
  );
};
export default PokemonList;