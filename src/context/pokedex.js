import { createContext, useEffect, useState } from "react";

export const PokedexContext = createContext(null);

export const UsePokedexHook = () => {
  const [pokedex, setPokedex] = useState(null);

  useEffect(() => {
    if (!pokedex) {
      const localStore = localStorage.getItem('pokedex');
      if (localStore) setPokedex(JSON.parse(localStore)); // sync local pokedex with current context
      else localStorage.setItem('pokedex', JSON.stringify({})); // initialize local pokedex
    }
    else localStorage.setItem('pokedex', JSON.stringify(pokedex)); // update local pokedex
  }, [pokedex]);

  /**
   * @param {Number} percentage 
   * @returns
   */
  const _isPokemonCatched = (percentage = 0.5) => {
    return Math.random() < percentage;
  }

  /**
   * @param {String} pokemonName 
   * @returns 
   */
  const _getPokemonNickName = (pokemonName) => {
    let _nickName = '';
    const ownedPokemon = pokedex ? pokedex[pokemonName] : [];
    let shouldValidateNickname = true;

    while (shouldValidateNickname) {
      _nickName = prompt('Give a nickname', '');

      if (_nickName === null)
        break;
      else if (
        _nickName.length === 0 ||
        (ownedPokemon && ownedPokemon.some(pokemon => pokemon.name === _nickName))
      )
        alert('give another nickname');
      else shouldValidateNickname = false;
    }
    return _nickName;
  }

  /**
   * @param {String} pokemonName 
   */
  const AddPokemonIntoPokedex = (pokemonName) => {
    if (_isPokemonCatched()) {
      const _nickName = _getPokemonNickName(pokemonName);
      if (_nickName) {
        PersistNewPokemon(pokemonName, _nickName);
      }
      else
        alert(`${pokemonName} was run away`);
    }
  }

  /**
   * @param {String} pokemonName 
   * @param {String} nickName
   */
  const PersistNewPokemon = (pokemonName, nickName) => {
    if (pokedex) {
      const ownedPokemon = pokedex[pokemonName];
      if (ownedPokemon) {
        setPokedex({
          ...pokedex,
          [[pokemonName]]: [
            ...ownedPokemon,
            { name: nickName }
          ]
        });
      }
      else {
        setPokedex({
          ...pokedex,
          [[pokemonName]]: [
            { name: nickName }
          ]
        });
      }
    }
    else {
      setPokedex({
        [[pokemonName]]: [
          { name: nickName }
        ]
      });
    }
  }

  return ({
    pokedex,
    AddPokemonIntoPokedex,
  });
};