import React, { useState } from 'react';

import InfiniteScroll from "react-infinite-scroll-component";
import PokemonCard from '../components/PokemonCard';

import { COMPONENT_HEIGHT } from '../components/enums';
import { LoadingLoader } from '../components/LoadingLoader';

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