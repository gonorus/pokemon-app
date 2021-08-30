import { useContext, useMemo } from "react";
import { PokedexContext } from "../context/pokedex";

/**
 * @returns {Array}
 */
const UseOwnedPokemon = () => {
  const { pokedex } = useContext(PokedexContext);
  const ownedPokemon = useMemo(() => {
    if (pokedex) {
      return Object.keys(pokedex).map(
        key => {
          const pokemon = pokedex[key];
          return pokemon.owned.map(
            owned => ({
              id: null,
              pokemonName: key,
              name: owned.name,
              image: pokemon.image,
              catchedDate: owned.catchedDate,
            })
          )
        }
      ).flat(1);
    }
    return [];
  }, [pokedex]);
  console.log(ownedPokemon);
  return ownedPokemon;
}
export default UseOwnedPokemon;