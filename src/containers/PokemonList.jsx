import React, { useCallback, useEffect, useState } from 'react';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import PokemonCardList from '../components/PokemonCardList';
import { LOAD_POKEMON_LIST } from '../graphql/Queries';
import { COMPONENT_HEIGHT } from '../components/enums';
import UseOwnedPokemon from '../hooks/UseOwnedPokemon';

const PokemonList = () => {
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const ownedPokemon = UseOwnedPokemon();

  const PokemonDataAPI = useCallback(() => LOAD_POKEMON_LIST.fetchMore({
    variables: { offset: offset },
    updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult
  }), [offset]);

  const FetchPokemonData = useCallback(() => {
    PokemonDataAPI().then(
      response => {
        const { count, nextOffset, results } = response.data.pokemons;
        const updatedData = [
          ...pokemonList,
          ...results.map(
            (pokemon) => {
              return ({
                id: pokemon.id,
                pokemonName: pokemon.name,
                name: pokemon.name,
                image: pokemon.image
              });
            })
        ];
        setOffset(nextOffset);
        setPokemonList(updatedData);
        setHasMore(updatedData.length < count);
      }
    )
  }, [pokemonList]);

  useEffect(() => {
    FetchPokemonData();
  }, []);

  const PokemonListStyle = css({
    height: '100%',

    'h2': {
      margin: 0,
      padding: '8px',
      textAlign: 'center',
      position: 'sticky',
      top: COMPONENT_HEIGHT.Menubar,
      zIndex: 1,
      backgroundColor: 'white'
    }
  });

  return (
    <div css={PokemonListStyle}>
      <h2>Total Owned Pokemon: {ownedPokemon.length}</h2>
      <PokemonCardList
        pokemonList={pokemonList}
        hasMore={hasMore}
        hasMoreFetch={FetchPokemonData}
      />
    </div>
  );
};
export default PokemonList;