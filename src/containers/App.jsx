import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import MenuBar from '../components/MenuBar';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import { PokedexContext, UsePokedexHook } from '../context/pokedex';

const App = () => {
  const {
    pokedex,
    AddPokemonIntoPokedex
  } = UsePokedexHook();

  return (
    <HashRouter>
      <MenuBar />
      <PokedexContext.Provider value={{ pokedex, AddPokemonIntoPokedex }}>
        <Switch>
          <Route exact path='/'>
            <PokemonList />
          </Route>
          <Route path='/detail/:pokemonName'>
            <PokemonDetail />
          </Route>
        </Switch>
      </PokedexContext.Provider>
    </HashRouter>
  );
}
export default App;