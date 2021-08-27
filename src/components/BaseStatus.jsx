import React from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';

import BaseStatusChart from './BaseStatusChart';
import { BASE_STATUS_TYPE } from './enums';

const Status = (props) => {
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
          name={props.statusField}
          type="range"
          min="1"
          max={props.statusField === BASE_STATUS_TYPE.HealthPoint ? 9999 : 100}
          value={props.statusValue}
          disabled
        />
      </td>
      <td>
        {props.statusValue}
      </td>
    </tr>
  );
};
Status.propTypes = {
  statusField: PropTypes.string.isRequired,
  statusValue: PropTypes.number.isRequired
};

const BaseStatus = (props) => {
  const BaseStatusContainerStyle = css({
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  });
  return (
    <div css={BaseStatusContainerStyle}>
      <BaseStatusChart />
      <table>
        <tbody>
          <Status statusField={BASE_STATUS_TYPE.HealthPoint} statusValue={props.hp} />
          <Status statusField={BASE_STATUS_TYPE.AttackPoint} statusValue={props.attack} />
          <Status statusField={BASE_STATUS_TYPE.DefensePoint} statusValue={props.defense} />
          <Status statusField={BASE_STATUS_TYPE.SpAttackPoint} statusValue={props.specialAttack} />
          <Status statusField={BASE_STATUS_TYPE.SpDefensePoint} statusValue={props.specialDefense} />
          <Status statusField={BASE_STATUS_TYPE.SpeedPoint} statusValue={props.speed} />
        </tbody>
      </table>
    </div>
  );
};
BaseStatus.propTypes = {
  hp: PropTypes.number,
  attack: PropTypes.number,
  defense: PropTypes.number,
  specialAttack: PropTypes.number,
  specialDefense: PropTypes.number,
  speed: PropTypes.number
};
BaseStatus.defaultProps = {
  hp: 1000,
  attack: 10,
  defense: 20,
  specialAttack: 30,
  specialDefense: 40,
  speed: 50
};
export default BaseStatus;