import React from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PyhsicalInfo } from './PyhsicalInfo';
import { PokemonTypeInfo } from './PokemonTypeInfo';

const BaseInfo = (props) => {
  const { name, height, weight, types } = props;

  const BaseInfoStyle = css({
    maxWidth: '650px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '16px',

    'img': {
      height: '150px',
      width: '150px',
      alignSelf: 'center'
    },

    '.info': {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',

      'h2': {
        textTransform: 'uppercase',
        textAlign: 'center',
        margin: 0
      }
    },

    '@media (min-width: 420px)': {
      flexDirection: 'row',

      'img': {
        height: '250px',
        width: '250px'
      }
    }
  });

  const PokemonTypesStyle = css({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'center'
  });
  return (
    <div css={BaseInfoStyle}>
      <LazyLoadImage
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
        alt='pokemon-image'
        height='150px'
        width='150px'
      />
      <div className='info'>
        <h2>{name}</h2>
        <PyhsicalInfo height={height} weight={weight} />
        <div css={PokemonTypesStyle}>
          {
            types.map((type, index) => <PokemonTypeInfo key={index} type={type} />)
          }
        </div>
      </div>
    </div>
  );
}
BaseInfo.propTypes = {
  name: PropTypes.string,
  height: PropTypes.number,
  weight: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.string)
};
BaseInfo.defaultProps = {
  name: 'charmander (fake)',
  height: 6,
  weight: 85,
  types: ['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy']
};
export default BaseInfo;