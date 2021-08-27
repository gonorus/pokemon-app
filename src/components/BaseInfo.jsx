import React from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { POKEMON_TYPE_COLOR } from './enums';
import { Capitalize } from '../helpers/String';
import { HighContrastValue } from '../helpers/Color';

const PyhsicalInfo = (props) => {
  const PhysicalInfoStyle = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '16px',

    'h3': {
      textTransform: 'capitalize',
    },

    'h3, h4': {
      textAlign: 'center',
      margin: 0
    }
  });
  return (
    <div css={PhysicalInfoStyle}>
      <section>
        <h3>Height</h3>
        <h4>{props.height / 10} m</h4>
      </section>
      <section>
        <h3>Weight</h3>
        <h4>{props.weight / 10} kg</h4>
      </section>
    </div>
  );
};
PyhsicalInfo.propTypes = {
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired
};

const PokemonTypeInfo = (props) => {
  const contrastValue = HighContrastValue(POKEMON_TYPE_COLOR[Capitalize(props.type)]);

  const PokemonTypeStyle = css({
    minWidth: '75px',
    minHeight: '35px',
    margin: 0,
    lineHeight: '35px',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: `rgb(${contrastValue}, ${contrastValue}, ${contrastValue})`,
    backgroundColor: POKEMON_TYPE_COLOR[Capitalize(props.type)],
    borderRadius: '25px',
  });
  return (
    <p css={PokemonTypeStyle}>{props.type}</p>
  );
};
PokemonTypeInfo.propTypes = {
  type: PropTypes.string.isRequired
};

const BaseInfo = (props) => {
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
        <h2>{props.name}</h2>
        <PyhsicalInfo height={props.height} weight={props.weight} />
        <div css={PokemonTypesStyle}>
          {
            props.types.map((type, index) => <PokemonTypeInfo key={index} type={type} />)
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