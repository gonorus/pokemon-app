import React from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import InfiniteScroll from "react-infinite-scroll-component";
import PokemonCard from './PokemonCard';
import { LoadingLoader } from './LoadingLoader';
import { COMPONENT_MAX_WIDTH } from './enums';

const PokemonCardList = (props) => {
  const { pokemonList, hasMore, hasMoreFetch } = props;

  const InfineScrollStyle = css({
    maxWidth: COMPONENT_MAX_WIDTH.Menubar,
    padding: '16px 0',
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '18px',

    '@media (min-width: 600px)': {
      margin: '0 auto',
    }
  });

  return (
    <InfiniteScroll
      css={InfineScrollStyle}
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
    pokemonName: PropTypes.string,
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