import React from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';

export const PyhsicalInfo = (props) => {
  const PhysicalInfoStyle = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '16px',

    'h3': {
      textTransform: 'capitalize',
    },

    'h3, h4': {
      textAlign: 'center',
      margin: 0
    }
  });
  return (
    <div css={PhysicalInfoStyle}>
      <section>
        <h3>Height</h3>
        <h4>{props.height / 10} m</h4>
      </section>
      <section>
        <h3>Weight</h3>
        <h4>{props.weight / 10} kg</h4>
      </section>
    </div>
  );
};
PyhsicalInfo.propTypes = {
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired
};
