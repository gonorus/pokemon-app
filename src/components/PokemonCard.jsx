import React, { useContext } from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { PokedexContext } from '../context/pokedex';
import CloseIcon from '../images/cancel.svg';

const PokemonCard = (props) => {
  const { pokemon } = props;
  const { id, pokemonName, name, image, catchedDate } = pokemon;
  const { pokedex, RemovePokemonFromPokedex } = useContext(PokedexContext);

  const CardContainer = css({
    position: 'relative',
    borderRadius: '10px',
    boxSizing: 'border-box',

    '&:hover': {
      boxShadow: '0px 0px 24px 6px rgba(0,0,0,0.6);',
      transform: 'scale(1.05)',
      transitionDuration: '500ms',
    }
  });

  const CardStyle = css({
    width: '150px',
    height: '200px',
    display: 'flex',
    borderRadius: '10px',
    flexDirection: 'column',
    backgroundImage: `linear-gradient(#D3D3D3, #B5B5B5)`,
    textDecoration: 'none',
  });

  const CloseButtonStyle = css({
    height: '35px',
    width: '35px',
    position: 'absolute',
    top: '-15px',
    right: '-15px',
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
      textAlign: 'center'
    }
  });

  return (
    <div css={CardContainer}>
      {pokemonName === name ? <></> : <img css={CloseButtonStyle} src={CloseIcon} onClick={() => RemovePokemonFromPokedex(pokemonName, name)} />}
      <Link to={`detail/${pokemonName}`} css={CardStyle}>
        <div css={CardImageStyle} />
        <div css={InfoStyle}>
          {
            id ?
              <>
                <p>#{id} - {name}</p>
                <p>owned: {pokedex && pokedex[[name]] ? pokedex[[name]].owned.length : 0}</p>
              </>
              :
              <>
                <p>{name}</p>
                <p>Catched: {catchedDate}</p>
              </>
          }
        </div>
      </Link>
    </div>
  );
};
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    pokemonName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    catchedDate: PropTypes.string
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