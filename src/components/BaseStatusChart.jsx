import React from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

import { BASE_STATUS_TYPE } from './enums';

const BaseStatusChart = (props) => {
  const data = [
    {
      data: {
        [BASE_STATUS_TYPE.AttackPoint]: props.attack/100,
        [BASE_STATUS_TYPE.DefensePoint]: props.defense/100,
        [BASE_STATUS_TYPE.SpAttackPoint]: props.specialAttack/100,
        [BASE_STATUS_TYPE.SpDefensePoint]: props.specialDefense/100,
        [BASE_STATUS_TYPE.SpeedPoint]: props.speed/100
      },
      meta: { color: 'blue' }
    }
  ];

  const captions = {
    [BASE_STATUS_TYPE.AttackPoint]: BASE_STATUS_TYPE.AttackPoint,
    [BASE_STATUS_TYPE.DefensePoint]: BASE_STATUS_TYPE.DefensePoint,
    [BASE_STATUS_TYPE.SpAttackPoint]: BASE_STATUS_TYPE.SpAttackPoint,
    [BASE_STATUS_TYPE.SpDefensePoint]: BASE_STATUS_TYPE.SpDefensePoint,
    [BASE_STATUS_TYPE.SpeedPoint]: BASE_STATUS_TYPE.SpeedPoint,
  };

  const StatusChartStyle = css({
    '.caption': {
      fontSize: '12px'
    }
  });
  return (
    <div css={StatusChartStyle}>
      <RadarChart
        captions={captions}
        data={data}
        size={250}
      />
    </div>
  );
};
BaseStatusChart.propTypes = {
  hp: PropTypes.number,
  attack: PropTypes.number,
  defense: PropTypes.number,
  specialAttack: PropTypes.number,
  specialDefense: PropTypes.number,
  speed: PropTypes.number
};
BaseStatusChart.defaultProps = {
  hp: 1000,
  attack: 10,
  defense: 20,
  specialAttack: 30,
  specialDefense: 40,
  speed: 50
};
export default BaseStatusChart;