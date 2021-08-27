import React from 'react';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';

const Loading = () => {
  const LoadingStyle = css({
    display: 'flex',
    width: '100%',
    placeContent: 'center',
    margin: '8px 0'
  });
  return(
    <div css={LoadingStyle}>
      Loading...
    </div>
  )
}
export default Loading;