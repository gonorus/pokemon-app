import { createContext, useState } from "react";

export const PokedexContext = createContext({});

export const UsePokedexHook = () => {
  const [pokedex, setPokedex] = useState({});

  /**
   * @param {Number} percentage 
   * @returns
   */
  const _isPokemonCatched = (percentage = 0.5) => {
    return Math.random() < percentage;
  }
  
  /**
   * @returns
   */
  const _getPokemonNickName = () => {
    let _nickName = '';
    while (_nickName.length === 0) {
      _nickName = prompt('Give a nickname', '');

      if (_nickName === null)
        break;
      else if (_nickName.length === 0)
        alert('give another nickname');
    }
    return _nickName;
  }

  /**
   * @param {String} pokemonName 
   */
  const AddPokemonIntoPokedex = (pokemonName) => {
    if (_isPokemonCatched()) {
      const _nickName = _getPokemonNickName();
      if (_nickName) {
        console.log('Adding new pokemon', { pokemonName, _nickName });
        setPokedex({});
      }
      else
        alert(`${pokemonName} was run away`);
    }
  }

  return ({
    pokedex,
    AddPokemonIntoPokedex,
  });
};