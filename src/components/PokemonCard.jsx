import React from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';

const PokemonCard = (props) => {
  const { pokemon, pocket } = props;
  const { name, artwork } = pokemon;

  const OnCardClick = () => {
    alert(name);
  }

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
    <div css={CardStyle} onClick={OnCardClick}>
      <img src={artwork} />
      <div className='info'>
        <p>{name}</p>
        <p>owned: {pocket[[name]].length}</p>
      </div>
    </div>
  );
};
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    artwork: PropTypes.string,
    dreamworld: PropTypes.string
  }),
  pocket: PropTypes.shape({
    [PropTypes.string]: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    }))
  })
};
PokemonCard.defaultProps = {
  pokemon: {
    name: 'pokemon-name',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    artwork: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    dreamworld: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg'
  },
  pocket: {
    'pokemon-name': [
      { name: 'pokemon-name1' },
      { name: 'pokemon-name2' },
    ],
    'charmander': [
      { name: 'charmander1' },
      { name: 'charmander2' },
    ]
  }
}
export default PokemonCard;