import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import MenuBar from '../components/MenuBar';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import { PokedexContext, UsePokedexHook } from '../context/pokedex';
import GraphqlClient from '../graphql/Configuration';

const App = () => {
  const {
    pokedex,
    AddPokemonIntoPokedex
  } = UsePokedexHook();

  return (
    <ApolloProvider client={GraphqlClient}>
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
    </ApolloProvider>
  );
}
export default App;