import React from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { BASE_STATUS_TYPE } from './enums';

export const StatusSlider = (props) => {
  const SliderColor = props.statusField === BASE_STATUS_TYPE.HealthPoint ?
    'red' : 'blue';

  const SliderStyle = css({
    appearance: 'none',
    borderRadius: '12px',
    background: '#AAAAAA',
    overflow: 'hidden',

    '::-webkit-slider-thumb': {
      appearance: 'none',
      width: '15px',
      height: '15px',
      backgroundColor: `${SliderColor}`,
      borderRadius: '10px',
      cursor: 'pointer',
      boxShadow: `-350px 0px 0px 340px ${SliderColor}`
    }
  });
  return (
    <tr>
      <td>
        <label htmlFor={props.statusField}>{props.statusField}</label>
      </td>
      <td>
        <input
          css={SliderStyle}
          id={props.statusField}
          type="range"
          min="1"
          max={props.statusField === BASE_STATUS_TYPE.HealthPoint ? 9999 : 100}
          value={props.statusValue}
          disabled />
      </td>
      <td>
        {props.statusValue}
      </td>
    </tr>
  );
};
StatusSlider.propTypes = {
  statusField: PropTypes.string.isRequired,
  statusValue: PropTypes.number.isRequired
};
