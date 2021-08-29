import React from 'react';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';

const Loading = () => {
  const LoadingStyle = css({
    margin: 'auto',
    width: '150px',
    height: '150px',
    backgroundColor: 'white',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: '50%',
    boxShadow: 'inset -10px 10px 0 10px #ccc',
    animation: 'shake 1.25s cubic-bezier(.36,.07,.19,.97) infinite',
    animationPlayState: 'running',
    overflow: 'hidden',

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      overflow: 'hidden',
    },

    '&::before': {
      width: '100%',
      height: '50%',
      backgroundColor: 'red'
    },

    '&::after': {
      top: 'calc(50% - 5px)',
      width: '100%',
      height: '10px',
      backgroundColor: 'black'
    },

    '.ball-button': {
      width: '20px',
      height: '20px',
      position: 'absolute',
      top: 'calc(50% - 15px)',
      left: 'calc(50% - 15px)',
      zIndex: 10,
      backgroundColor: '#FFFFFF',
      borderWidth: '5px',
      borderStyle: 'solid',
      borderColor: '#7F8C8D',
      borderRadius: '50%',
      animation: 'blink .5s alternate infinite',
      animationPlayState: 'running'
    },

    '@keyframes shake': {
      '0': {
        transform: 'translate(0, 0) rotate(0)'
      },
      '20%': {
        transform: 'translate(-10px, 0) rotate(-20deg)'
      },
      '30%': {
        transform: 'translate(10px, 0) rotate(20deg)'
      },
      '50%': {
        transform: 'translate(-10px, 0) rotate(-10deg)'
      },
      '60%': {
        transform: 'translate(10px, 0) rotate(10deg)'
      },
      '100%': {
        transform: 'translate(0, 0) rotate(0)'
      },
    },

    '@keyframes blink': {
      'from': {
        background: '#EEEEEE'
      },
      'to': {
        background: '#E74C3C'
      }
    }
  });
  return (
    <div css={LoadingStyle}>
      <div className='ball-button' />
    </div>
  )
}
export default Loading;