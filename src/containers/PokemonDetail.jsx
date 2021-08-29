import React from 'react';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useParams } from 'react-router-dom';

import BaseInfo from '../components/BaseInfo';
import BaseStatus from '../components/BaseStatus';
import { COMPONENT_HEIGHT } from '../components/enums';
import { useQuery } from '@apollo/client';
import { LOAD_POKEMON_DATA } from '../graphql/Queries';
import { LoadingLoader } from '../components/LoadingLoader';
import BaseMovement from '../components/BaseMovement';

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const { error, loading, data } = useQuery(LOAD_POKEMON_DATA, {
    variables: { name: pokemonName }
  });

  const PokemonDetailStyle = css({
    height: `calc(100vh - ${COMPONENT_HEIGHT.Menubar})`,
    padding: '16px 0',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    overflow: 'auto'
  });

  return (
    <div css={PokemonDetailStyle}>
      {data === undefined ? <LoadingLoader /> : <></>}
      <BaseInfo
        name={pokemonName}
        height={data === undefined ? 0 : data.pokemon.height}
        weight={data === undefined ? 0 : data.pokemon.weight}
        types={data === undefined ? [] : [...new Set(data.pokemon.types)]}
        image={data === undefined ? '' : data.pokemon.sprites.front_default}
      />
      <BaseMovement moves={data === undefined ? [] : [...new Set(data.pokemon.moves)]} />
      <BaseStatus
        hp={data === undefined ? 0 : data.pokemon.stats[0].base_stat}
        attack={data === undefined ? 0 : data.pokemon.stats[1].base_stat}
        defense={data === undefined ? 0 : data.pokemon.stats[2].base_stat}
        specialAttack={data === undefined ? 0 : data.pokemon.stats[3].base_stat}
        specialDefense={data === undefined ? 0 : data.pokemon.stats[4].base_stat}
        speed={data === undefined ? 0 : data.pokemon.stats[5].base_stat}
      />
    </div>
  );
};
export default PokemonDetail;