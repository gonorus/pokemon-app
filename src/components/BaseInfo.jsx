import React from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { PyhsicalInfo } from './PyhsicalInfo';
import { PokemonTypeInfo } from './PokemonTypeInfo';
import CatchButton from './CatchButton';
import { COMPONENT_MAX_WIDTH } from './enums';

const BaseInfo = (props) => {
  const { name, height, weight, types, image } = props;

  const BaseInfoStyle = css({
    maxWidth: COMPONENT_MAX_WIDTH.Content,
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
        src={image}
        alt='pokemon-image'
        height='150px'
        width='150px'
      />
      <div className='info'>
        <h2>{name}</h2>
        <PyhsicalInfo height={height} weight={weight} />
        <CatchButton pokemonName={name} image={image} />
        <div css={PokemonTypesStyle}>
          {
            types.map((elementType, index) => <PokemonTypeInfo key={index} type={elementType.type} />)
          }
        </div>
      </div>
    </div>
  );
}
BaseInfo.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.shape({
      id: PropTypes.any,
      name: PropTypes.string
    })
  })).isRequired
};
BaseInfo.defaultProps = {
  name: 'charmander (fake)',
  height: 6,
  weight: 85,
  types: [
    {
      id: null,
      name: 'bug'
    }
  ]
};
export default BaseInfo;