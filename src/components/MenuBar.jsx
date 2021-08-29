import React from 'react';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';

import PokemonLogo from '../images/pokemon_logo.svg';
import PokedexLogo from '../images/pokedex.svg';
import { COMPONENT_HEIGHT, COMPONENT_MAX_WIDTH } from './enums';

const MenuBar = () => {
  const MenuStyle = css({
    position: 'sticky',
    top: 0,
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#3B4CCA',

    'nav': {
      maxWidth: COMPONENT_MAX_WIDTH.Menubar,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'row',
      height: COMPONENT_HEIGHT.Menubar,
      justifyContent: 'space-between'
    }
  });

  const LogoStyle = css({
    width: '150px',
    backgroundImage: `url(${PokemonLogo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'transparent',

    '@media (min-width: 600px)': {
      marginLeft: '8px'
    }
  });

  const PokedexStyle = css({
    margin: '8px 16px',
    backgroundImage: `url(${PokedexLogo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'transparent'
  });

  return (
    <div css={MenuStyle}>
      <nav>
        <Link to='/' css={LogoStyle}>Home</Link>
        <Link to='/bag' css={PokedexStyle}>Bag</Link>
      </nav>
    </div>
  );
}
export default MenuBar;