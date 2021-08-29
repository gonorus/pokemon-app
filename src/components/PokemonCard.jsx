import React from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const PokemonCard = (props) => {
  const { pokemon } = props;
  const { name, dreamworld } = pokemon;

  const CardStyle = css({
    width: '150px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    borderRadius: '10px',
    backgroundImage: `linear-gradient(#D3D3D3, #B5B5B5)`,

    '&:hover': {
      boxShadow: '0px 0px 24px 6px rgba(0,0,0,0.6);',
      transform: 'scale(1.05)',
      transitionDuration: '500ms'
    },

    'img': {
      height: '115px',
      width: '115px',
      margin: 'auto 0',
      alignSelf: 'center'
    },

    '.info': {
      margin: '8px 0',

      'p': {
        width: '100%',
        margin: 0,
        color: '#6A6A6A',
        fontSize: '11pt',
        fontWeight: 'lighter',
        textTransform: 'uppercase',
        textAlign: 'center'
      }
    }
  });

  return (
    <Link to={`detail/${name}`} css={CardStyle}>
      <LazyLoadImage
        src={dreamworld}
        alt='pokemon-image'
        height='115px'
        width='115px'
      />
      <div className='info'>
        <p>{name}</p>
        <p>owned: 0</p>
      </div>
    </Link>
  );
};
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    artwork: PropTypes.string,
    dreamworld: PropTypes.string
  })
};
PokemonCard.defaultProps = {
  pokemon: {
    name: 'pokemon-name',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    dreamworld: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg'
  }
}
export default PokemonCard;