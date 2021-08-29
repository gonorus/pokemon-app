import React, { useContext } from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { PokedexContext } from '../context/pokedex';

const PokemonCard = (props) => {
  const { pokemon } = props;
  const { id, name, image } = pokemon;
  const { pokedex } = useContext(PokedexContext);

  const CardStyle = css({
    width: '150px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    borderRadius: '10px',
    backgroundImage: `linear-gradient(#D3D3D3, #B5B5B5)`,
    textDecoration: 'none',

    '&:hover': {
      boxShadow: '0px 0px 24px 6px rgba(0,0,0,0.6);',
      transform: 'scale(1.05)',
      transitionDuration: '500ms'
    }
  });

  const CardImageStyle = css({
    height: '100%',
    width: '100%',
    margin: 0,
    alignSelf: 'center',
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  });

  const InfoStyle = css({
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
  });

  return (
    <Link to={`detail/${name}`} css={CardStyle}>
      <div css={CardImageStyle} />
      <div css={InfoStyle}>
        <p>#{id} - {name}</p>
        <p>owned: {pokedex && pokedex[[name]] ? pokedex[[name]].length : 0}</p>
      </div>
    </Link>
  );
};
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string
  })
};
PokemonCard.defaultProps = {
  pokemon: {
    id: 1,
    name: 'pokemon-name',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  }
}
export default PokemonCard;