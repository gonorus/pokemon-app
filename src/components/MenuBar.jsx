import React from 'react';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';

import PokemonLogoSVG from '../images/pokemon_logo.svg';
import { COMPONENT_HEIGHT } from './enums';

const MenuBar = () => {
  const MenuStyle = css({
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#3B4CCA',

    'nav': {
      maxWidth: '1024px',
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'space-between',
      height: COMPONENT_HEIGHT.Menubar
    }
  });

  const LogoStyle = css({
    width: '150px',
    backgroundImage: `url(${PokemonLogoSVG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'transparent'
  });
  return (
    <div css={MenuStyle}>
      <nav>
        <Link to='/' css={LogoStyle}>Home</Link>
      </nav>
    </div>
  );
}
export default MenuBar;