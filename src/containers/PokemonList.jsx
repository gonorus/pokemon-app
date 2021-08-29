import React, { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonCard from '../components/PokemonCard';

import { COMPONENT_HEIGHT } from '../components/enums';
import { LoadingLoader } from '../components/LoadingLoader';
import { LOAD_POKEMON_LIST } from '../graphql/queries';

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
    <InfiniteScroll
      height={`calc(100vh - ${COMPONENT_HEIGHT.Menubar})`}
      style={{
        height: `calc(100vh - ${COMPONENT_HEIGHT.Menubar})`,
        padding: '16px 0',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '8px'
      }}
      dataLength={pokemonList.length}
      next={FetchPokemonData}
      hasMore={hasMore}
      loader={<LoadingLoader />}
    >
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon}  />
      ))}
    </InfiniteScroll>
  );
};
export default PokemonList;