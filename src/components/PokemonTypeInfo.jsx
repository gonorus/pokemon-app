import React from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { POKEMON_TYPE_COLOR } from './enums';
import { Capitalize } from '../helpers/String';
import { HighContrastValue } from '../helpers/Color';

export const PokemonTypeInfo = (props) => {
  const { name } = props.type;
  const contrastValue = HighContrastValue(POKEMON_TYPE_COLOR[Capitalize(name)]);

  const PokemonTypeStyle = css({
    minWidth: '75px',
    minHeight: '35px',
    margin: 0,
    lineHeight: '35px',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: `rgb(${contrastValue}, ${contrastValue}, ${contrastValue})`,
    backgroundColor: POKEMON_TYPE_COLOR[Capitalize(name)],
    borderRadius: '25px',
  });
  return (
    name === undefined ? <></> : <p css={PokemonTypeStyle}>{name}</p>
  );
};
PokemonTypeInfo.propTypes = {
  type: PropTypes.shape({
    id: PropTypes.any,
    name: PropTypes.string.isRequired
  })
};
