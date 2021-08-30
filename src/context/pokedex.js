import { createContext, useEffect, useState } from "react";
import { GetCurrentTime } from "../helpers/DateTime";

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
  };

  /**
   * @param {String} pokemonName 
   * @returns 
   */
  const _getPokemonNickName = (pokemonName) => {
    let _nickName = '';
    const ownedPokemon = pokedex && pokedex[pokemonName] ? pokedex[pokemonName].owned : [];
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
  };

  /**
   * @param {String} pokemonName 
   * @param {String} image 
   * @param {String} nickName
   */
  const _persistNewPokemon = (pokemonName, image, nickName) => {
    if (pokedex) {
      const ownedPokemon = pokedex[pokemonName];
      if (ownedPokemon) {
        setPokedex({
          ...pokedex,
          [[pokemonName]]: {
            image: image,
            owned: [
              ...ownedPokemon.owned,
              { name: nickName, catchedDate: GetCurrentTime() }
            ]
          }
        });
      }
      else {
        setPokedex({
          ...pokedex,
          [[pokemonName]]: {
            image: image,
            owned: [
              { name: nickName, catchedDate: GetCurrentTime() }
            ]
          }
        });
      }
    }
    else {
      setPokedex({
        [[pokemonName]]: {
          image: image,
          owned: [
            { name: nickName, catchedDate: GetCurrentTime() }
          ]
        }
      });
    }
  };

  /**
   * @param {String} pokemonName 
   * @param {String} image 
   */
  const AddPokemonIntoPokedex = (pokemonName, image) => {
    if (_isPokemonCatched()) {
      const _nickName = _getPokemonNickName(pokemonName);
      if (_nickName) {
        _persistNewPokemon(pokemonName, image, _nickName);
      }
      else
        alert(`${pokemonName} was run away`);
    }
  };

  const RemovePokemonFromPokedex = (pokemonName, nickName) => {
    const ownedPokemon = pokedex[pokemonName];
    ownedPokemon.owned = ownedPokemon.owned.filter((pokemon) => { return pokemon.name !== nickName });
    if (ownedPokemon.owned.length === 0) {
      delete pokedex[pokemonName];
      setPokedex({ ...pokedex });
    }
    else {
      setPokedex({
        ...pokedex,
        [[pokemonName]]: ownedPokemon
      });
    }
  }

  return ({
    pokedex,
    AddPokemonIntoPokedex,
    RemovePokemonFromPokedex
  });
};