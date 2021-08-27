import React, { useState } from 'react';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';

import InfiniteScroll from "react-infinite-scroll-component";
import PokemonCard from '../components/PokemonCard';
import Loading from '../components/Loading';

import { COMPONENT_HEIGHT } from '../components/enums';

const LoadingLoader = () => {
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

const PokemonList = () => {
  const [items, setItems] = useState(Array.from({ length: 100 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 500) {
      setHasMore(false);
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
    }, 500);
  };

  return (
    <InfiniteScroll
      height={`calc(100vh - ${COMPONENT_HEIGHT.Menubar})`}
      style={{
        height: `calc(100vh - ${COMPONENT_HEIGHT.Menubar})`,
        padding: '16px 0',
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '8px'
      }}
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<LoadingLoader />}
    >
      {items.map((i, index) => (
        <PokemonCard key={index} />
      ))}
    </InfiniteScroll>
  );
};
export default PokemonList;