import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import MenuBar from '../components/MenuBar';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import { PokedexContext, PokedexHook } from '../context/pokedex';

const App = () => {
  return (
    <HashRouter>
      <MenuBar />
      <PokedexContext.Provider value={PokedexHook}>
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