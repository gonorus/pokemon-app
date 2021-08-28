import React from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { POKEMON_TYPE_COLOR } from './enums';
import { Capitalize } from '../helpers/String';
import { HighContrastValue } from '../helpers/Color';

export const PokemonTypeInfo = (props) => {
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
