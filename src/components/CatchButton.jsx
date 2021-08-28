import React, { useContext } from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { PokedexContext } from '../context/pokedex';

const CatchButton = (props) => {
  const { pokemonName } = props;
  const { AddPokemonIntoPokedex } = useContext(PokedexContext);

  const CatchButtonStyle = css({
    alignSelf: 'center',
    width: '75px',
    padding: '8px',
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    borderRadius: '25px',
    fontWeight: 'bold',

    'p': {
      margin: 0,
    }
  });

  return (
    <div css={CatchButtonStyle} onClick={() => AddPokemonIntoPokedex(pokemonName)}>
      <p>Catch<br />this<br />Pokemon</p>
    </div>
  );
};
CatchButton.propTypes = {
  pokemonName: PropTypes.string.isRequired
};
export default CatchButton;