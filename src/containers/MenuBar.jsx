import React from 'react';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import PokemonLogoSVG from '../images/pokemon_logo.svg';
import { COMPONENT_HEIGHT } from '../components/enums';

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
      height: COMPONENT_HEIGHT.Menubar,
    }
  });
  return (
    <div css={MenuStyle}>
      <nav>
        <p>asd</p>
        <LazyLoadImage
          src={PokemonLogoSVG}
          height='50px'
          width='75px'
        />
        <p>asd</p>
      </nav>
    </div>
  );
}
export default MenuBar;