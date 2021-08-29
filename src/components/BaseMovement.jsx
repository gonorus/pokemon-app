import React, { useState } from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { COMPONENT_MAX_WIDTH } from './enums';

const BaseMovement = (props) => {
  const { moves } = props;
  const [isOpen, setIsOpen] = useState(false);

  const BaseMovementStyle = css({
    width: '100%',
    maxWidth: COMPONENT_MAX_WIDTH.Content,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  });

  const BaseMovementHeaderStyle = css({
    backgroundColor: '#EEEEEE',
    color: 'red',
    cursor: 'pointer',
    padding: '18px',
    width: '100%',
    border: 'none',
    textAlign: 'left',
    outline: 'none',
    transition: '0.4s',
    position: 'sticky',
    top: '-16px',
    fontSize: '24px',
    textAlign: 'center',
    textTransform: 'capitalize',
  });

  const BaseMovementPanelStyle = css({
    padding: '0 18px',
    display: isOpen ? 'block' : 'none',
    overflow: isOpen ? 'auto' : 'hidden',

    'ul': {
      margin: 0,
      padding: '8px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '8px',
    },

    'li': {
      display: 'block',
      listStyle: 'none',
      minWidth: '75px',
      minHeight: '35px',
      margin: 0,
      padding: '0 8px',
      lineHeight: '35px',
      textAlign: 'center',
      textTransform: 'capitalize',
      borderRadius: '25px',
      backgroundColor: '#3B4CCA',
      color: 'yellow'

    }
  });

  return (
    <div css={BaseMovementStyle}>
      <button css={BaseMovementHeaderStyle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Movement List' : 'Display Moves'}
      </button>
      <div css={BaseMovementPanelStyle}>
        <ul>
          {
            moves.map((movement, index) => <li key={index}>{movement.move.name}</li>)
          }
        </ul>
      </div>
    </div>
  );
};
BaseMovement.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })).isRequired
};
BaseMovement.defaultProps = {
  moves: []
};
export default BaseMovement;