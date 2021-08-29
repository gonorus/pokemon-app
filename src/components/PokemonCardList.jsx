import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonCard from './PokemonCard';
import { LoadingLoader } from './LoadingLoader';
import { COMPONENT_HEIGHT } from './enums';

const PokemonCardList = (props) => {
  const { pokemonList, hasMore, hasMoreFetch } = props;

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
      next={hasMoreFetch}
      hasMore={hasMore}
      loader={<LoadingLoader />}
    >
      {pokemonList.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </InfiniteScroll>
  );
};
PokemonCardList.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string
  })).isRequired,
  hasMore: PropTypes.bool,
  hasMoreFetch: PropTypes.func
};
PokemonCardList.defaultProps = {
  pokemonList: [
    {
      id: 1,
      name: 'pokemon-name',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
    }
  ],
  hasMore: false,
  hasMoreFetch: () => { }
}
export default PokemonCardList;