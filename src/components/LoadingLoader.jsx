import React from 'react';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import Loading from './Loading';

export const LoadingLoader = () => {
  const LoaderStyle = css({
    width: '100vw',
    height: '100vh',
    top: 0,
    backgroundColor: '#4444',
    position: 'absolute',
    display: 'flex'
  });
  return (
    <div css={LoaderStyle}>
      <Loading />
    </div>
  );
};
