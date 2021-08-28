import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useParams } from 'react-router-dom';

import BaseInfo from '../components/BaseInfo';
import BaseStatus from '../components/BaseStatus';
import { COMPONENT_HEIGHT } from '../components/enums';

const PokemonDetail = (props) => {
  const { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    const data = {
      "name": "charmander",
      "base_experience": 62,
      "height": 6,
      "weight": 85,
      "moves": [
        {
          "move": {
            "name": "mega-punch",
            "url": "https://pokeapi.co/api/v2/move/5/"
          }
        },
        {
          "move": {
            "name": "fire-punch",
            "url": "https://pokeapi.co/api/v2/move/7/"
          }
        },
        {
          "move": {
            "name": "thunder-punch",
            "url": "https://pokeapi.co/api/v2/move/9/"
          }
        },
        {
          "move": {
            "name": "scratch",
            "url": "https://pokeapi.co/api/v2/move/10/"
          }
        },
        {
          "move": {
            "name": "swords-dance",
            "url": "https://pokeapi.co/api/v2/move/14/"
          }
        },
        {
          "move": {
            "name": "cut",
            "url": "https://pokeapi.co/api/v2/move/15/"
          }
        },
        {
          "move": {
            "name": "mega-kick",
            "url": "https://pokeapi.co/api/v2/move/25/"
          }
        },
        {
          "move": {
            "name": "headbutt",
            "url": "https://pokeapi.co/api/v2/move/29/"
          }
        },
        {
          "move": {
            "name": "body-slam",
            "url": "https://pokeapi.co/api/v2/move/34/"
          }
        },
        {
          "move": {
            "name": "take-down",
            "url": "https://pokeapi.co/api/v2/move/36/"
          }
        },
        {
          "move": {
            "name": "double-edge",
            "url": "https://pokeapi.co/api/v2/move/38/"
          }
        },
        {
          "move": {
            "name": "leer",
            "url": "https://pokeapi.co/api/v2/move/43/"
          }
        },
        {
          "move": {
            "name": "bite",
            "url": "https://pokeapi.co/api/v2/move/44/"
          }
        },
        {
          "move": {
            "name": "growl",
            "url": "https://pokeapi.co/api/v2/move/45/"
          }
        },
        {
          "move": {
            "name": "ember",
            "url": "https://pokeapi.co/api/v2/move/52/"
          }
        },
        {
          "move": {
            "name": "flamethrower",
            "url": "https://pokeapi.co/api/v2/move/53/"
          }
        },
        {
          "move": {
            "name": "submission",
            "url": "https://pokeapi.co/api/v2/move/66/"
          }
        },
        {
          "move": {
            "name": "counter",
            "url": "https://pokeapi.co/api/v2/move/68/"
          }
        },
        {
          "move": {
            "name": "seismic-toss",
            "url": "https://pokeapi.co/api/v2/move/69/"
          }
        },
        {
          "move": {
            "name": "strength",
            "url": "https://pokeapi.co/api/v2/move/70/"
          }
        },
        {
          "move": {
            "name": "dragon-rage",
            "url": "https://pokeapi.co/api/v2/move/82/"
          }
        },
        {
          "move": {
            "name": "fire-spin",
            "url": "https://pokeapi.co/api/v2/move/83/"
          }
        },
        {
          "move": {
            "name": "dig",
            "url": "https://pokeapi.co/api/v2/move/91/"
          }
        },
        {
          "move": {
            "name": "toxic",
            "url": "https://pokeapi.co/api/v2/move/92/"
          }
        },
        {
          "move": {
            "name": "rage",
            "url": "https://pokeapi.co/api/v2/move/99/"
          }
        },
        {
          "move": {
            "name": "mimic",
            "url": "https://pokeapi.co/api/v2/move/102/"
          }
        },
        {
          "move": {
            "name": "double-team",
            "url": "https://pokeapi.co/api/v2/move/104/"
          }
        },
        {
          "move": {
            "name": "smokescreen",
            "url": "https://pokeapi.co/api/v2/move/108/"
          }
        },
        {
          "move": {
            "name": "defense-curl",
            "url": "https://pokeapi.co/api/v2/move/111/"
          }
        },
        {
          "move": {
            "name": "reflect",
            "url": "https://pokeapi.co/api/v2/move/115/"
          }
        },
        {
          "move": {
            "name": "bide",
            "url": "https://pokeapi.co/api/v2/move/117/"
          }
        },
        {
          "move": {
            "name": "fire-blast",
            "url": "https://pokeapi.co/api/v2/move/126/"
          }
        },
        {
          "move": {
            "name": "swift",
            "url": "https://pokeapi.co/api/v2/move/129/"
          }
        },
        {
          "move": {
            "name": "skull-bash",
            "url": "https://pokeapi.co/api/v2/move/130/"
          }
        },
        {
          "move": {
            "name": "rest",
            "url": "https://pokeapi.co/api/v2/move/156/"
          }
        },
        {
          "move": {
            "name": "rock-slide",
            "url": "https://pokeapi.co/api/v2/move/157/"
          }
        },
        {
          "move": {
            "name": "slash",
            "url": "https://pokeapi.co/api/v2/move/163/"
          }
        },
        {
          "move": {
            "name": "substitute",
            "url": "https://pokeapi.co/api/v2/move/164/"
          }
        },
        {
          "move": {
            "name": "snore",
            "url": "https://pokeapi.co/api/v2/move/173/"
          }
        },
        {
          "move": {
            "name": "curse",
            "url": "https://pokeapi.co/api/v2/move/174/"
          }
        },
        {
          "move": {
            "name": "protect",
            "url": "https://pokeapi.co/api/v2/move/182/"
          }
        },
        {
          "move": {
            "name": "scary-face",
            "url": "https://pokeapi.co/api/v2/move/184/"
          }
        },
        {
          "move": {
            "name": "belly-drum",
            "url": "https://pokeapi.co/api/v2/move/187/"
          }
        },
        {
          "move": {
            "name": "mud-slap",
            "url": "https://pokeapi.co/api/v2/move/189/"
          }
        },
        {
          "move": {
            "name": "outrage",
            "url": "https://pokeapi.co/api/v2/move/200/"
          }
        },
        {
          "move": {
            "name": "endure",
            "url": "https://pokeapi.co/api/v2/move/203/"
          }
        },
        {
          "move": {
            "name": "swagger",
            "url": "https://pokeapi.co/api/v2/move/207/"
          }
        },
        {
          "move": {
            "name": "fury-cutter",
            "url": "https://pokeapi.co/api/v2/move/210/"
          }
        },
        {
          "move": {
            "name": "attract",
            "url": "https://pokeapi.co/api/v2/move/213/"
          }
        },
        {
          "move": {
            "name": "sleep-talk",
            "url": "https://pokeapi.co/api/v2/move/214/"
          }
        },
        {
          "move": {
            "name": "return",
            "url": "https://pokeapi.co/api/v2/move/216/"
          }
        },
        {
          "move": {
            "name": "frustration",
            "url": "https://pokeapi.co/api/v2/move/218/"
          }
        },
        {
          "move": {
            "name": "dynamic-punch",
            "url": "https://pokeapi.co/api/v2/move/223/"
          }
        },
        {
          "move": {
            "name": "dragon-breath",
            "url": "https://pokeapi.co/api/v2/move/225/"
          }
        },
        {
          "move": {
            "name": "iron-tail",
            "url": "https://pokeapi.co/api/v2/move/231/"
          }
        },
        {
          "move": {
            "name": "metal-claw",
            "url": "https://pokeapi.co/api/v2/move/232/"
          }
        },
        {
          "move": {
            "name": "hidden-power",
            "url": "https://pokeapi.co/api/v2/move/237/"
          }
        },
        {
          "move": {
            "name": "sunny-day",
            "url": "https://pokeapi.co/api/v2/move/241/"
          }
        },
        {
          "move": {
            "name": "crunch",
            "url": "https://pokeapi.co/api/v2/move/242/"
          }
        },
        {
          "move": {
            "name": "ancient-power",
            "url": "https://pokeapi.co/api/v2/move/246/"
          }
        },
        {
          "move": {
            "name": "rock-smash",
            "url": "https://pokeapi.co/api/v2/move/249/"
          }
        },
        {
          "move": {
            "name": "beat-up",
            "url": "https://pokeapi.co/api/v2/move/251/"
          }
        },
        {
          "move": {
            "name": "heat-wave",
            "url": "https://pokeapi.co/api/v2/move/257/"
          }
        },
        {
          "move": {
            "name": "will-o-wisp",
            "url": "https://pokeapi.co/api/v2/move/261/"
          }
        },
        {
          "move": {
            "name": "facade",
            "url": "https://pokeapi.co/api/v2/move/263/"
          }
        },
        {
          "move": {
            "name": "focus-punch",
            "url": "https://pokeapi.co/api/v2/move/264/"
          }
        },
        {
          "move": {
            "name": "brick-break",
            "url": "https://pokeapi.co/api/v2/move/280/"
          }
        },
        {
          "move": {
            "name": "secret-power",
            "url": "https://pokeapi.co/api/v2/move/290/"
          }
        },
        {
          "move": {
            "name": "air-cutter",
            "url": "https://pokeapi.co/api/v2/move/314/"
          }
        },
        {
          "move": {
            "name": "overheat",
            "url": "https://pokeapi.co/api/v2/move/315/"
          }
        },
        {
          "move": {
            "name": "rock-tomb",
            "url": "https://pokeapi.co/api/v2/move/317/"
          }
        },
        {
          "move": {
            "name": "aerial-ace",
            "url": "https://pokeapi.co/api/v2/move/332/"
          }
        },
        {
          "move": {
            "name": "dragon-claw",
            "url": "https://pokeapi.co/api/v2/move/337/"
          }
        },
        {
          "move": {
            "name": "dragon-dance",
            "url": "https://pokeapi.co/api/v2/move/349/"
          }
        },
        {
          "move": {
            "name": "natural-gift",
            "url": "https://pokeapi.co/api/v2/move/363/"
          }
        },
        {
          "move": {
            "name": "fling",
            "url": "https://pokeapi.co/api/v2/move/374/"
          }
        },
        {
          "move": {
            "name": "flare-blitz",
            "url": "https://pokeapi.co/api/v2/move/394/"
          }
        },
        {
          "move": {
            "name": "dragon-pulse",
            "url": "https://pokeapi.co/api/v2/move/406/"
          }
        },
        {
          "move": {
            "name": "dragon-rush",
            "url": "https://pokeapi.co/api/v2/move/407/"
          }
        },
        {
          "move": {
            "name": "shadow-claw",
            "url": "https://pokeapi.co/api/v2/move/421/"
          }
        },
        {
          "move": {
            "name": "fire-fang",
            "url": "https://pokeapi.co/api/v2/move/424/"
          }
        },
        {
          "move": {
            "name": "captivate",
            "url": "https://pokeapi.co/api/v2/move/445/"
          }
        },
        {
          "move": {
            "name": "hone-claws",
            "url": "https://pokeapi.co/api/v2/move/468/"
          }
        },
        {
          "move": {
            "name": "flame-burst",
            "url": "https://pokeapi.co/api/v2/move/481/"
          }
        },
        {
          "move": {
            "name": "flame-charge",
            "url": "https://pokeapi.co/api/v2/move/488/"
          }
        },
        {
          "move": {
            "name": "round",
            "url": "https://pokeapi.co/api/v2/move/496/"
          }
        },
        {
          "move": {
            "name": "echoed-voice",
            "url": "https://pokeapi.co/api/v2/move/497/"
          }
        },
        {
          "move": {
            "name": "incinerate",
            "url": "https://pokeapi.co/api/v2/move/510/"
          }
        },
        {
          "move": {
            "name": "inferno",
            "url": "https://pokeapi.co/api/v2/move/517/"
          }
        },
        {
          "move": {
            "name": "fire-pledge",
            "url": "https://pokeapi.co/api/v2/move/519/"
          }
        },
        {
          "move": {
            "name": "work-up",
            "url": "https://pokeapi.co/api/v2/move/526/"
          }
        },
        {
          "move": {
            "name": "confide",
            "url": "https://pokeapi.co/api/v2/move/590/"
          }
        },
        {
          "move": {
            "name": "power-up-punch",
            "url": "https://pokeapi.co/api/v2/move/612/"
          }
        }
      ],
      "abilities": [
        {
          "ability": {
            "name": "blaze",
            "url": "https://pokeapi.co/api/v2/ability/66/"
          }
        },
        {
          "ability": {
            "name": "solar-power",
            "url": "https://pokeapi.co/api/v2/ability/94/"
          }
        }
      ],
      "sprites": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      },
      "types": [
        {
          "type": {
            "id": null,
            "name": "fire"
          }
        }
      ],
      "stats": [
        {
          "base_stat": 39,
          "effort": 0,
          "stat": {
            "name": "hp"
          }
        },
        {
          "base_stat": 52,
          "effort": 0,
          "stat": {
            "name": "attack"
          }
        },
        {
          "base_stat": 43,
          "effort": 0,
          "stat": {
            "name": "defense"
          }
        },
        {
          "base_stat": 60,
          "effort": 0,
          "stat": {
            "name": "special-attack"
          }
        },
        {
          "base_stat": 50,
          "effort": 0,
          "stat": {
            "name": "special-defense"
          }
        },
        {
          "base_stat": 65,
          "effort": 1,
          "stat": {
            "name": "speed"
          }
        }
      ]
    };
    setPokemonData(data);
  }, []);

  const PokemonDetailStyle = css({
    height: `calc(100vh - ${COMPONENT_HEIGHT.Menubar})`,
    padding: '16px 0',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    overflow: 'auto'
  })

  return (
    <div css={PokemonDetailStyle}>
      <BaseInfo name={pokemonName} />
      <BaseStatus />
    </div>
  );
};
export default PokemonDetail;