import React from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';

import BaseStatusChart from './BaseStatusChart';
import { BASE_STATUS_TYPE, COMPONENT_MAX_WIDTH } from './enums';
import { StatusSlider } from './StatusSlider';

const BaseStatus = (props) => {
  const BaseStatusContainerStyle = css({
    maxWidth: COMPONENT_MAX_WIDTH.Content,
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
          <StatusSlider statusField={BASE_STATUS_TYPE.HealthPoint} statusValue={props.hp} />
          <StatusSlider statusField={BASE_STATUS_TYPE.AttackPoint} statusValue={props.attack} />
          <StatusSlider statusField={BASE_STATUS_TYPE.DefensePoint} statusValue={props.defense} />
          <StatusSlider statusField={BASE_STATUS_TYPE.SpAttackPoint} statusValue={props.specialAttack} />
          <StatusSlider statusField={BASE_STATUS_TYPE.SpDefensePoint} statusValue={props.specialDefense} />
          <StatusSlider statusField={BASE_STATUS_TYPE.SpeedPoint} statusValue={props.speed} />
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