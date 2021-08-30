import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import MenuBar from '../components/MenuBar';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import PokemonBag from './PokemonBag';
import { PokedexContext } from '../context/pokedex';
import UsePokedex from '../hooks/UsePokedex';
import GraphqlClient from '../graphql/Configuration';

const App = () => {
  const {
    pokedex,
    AddPokemonIntoPokedex,
    RemovePokemonFromPokedex
  } = UsePokedex();

  return (
    <ApolloProvider client={GraphqlClient}>
      <HashRouter>
        <MenuBar />
        <PokedexContext.Provider value={{ pokedex, AddPokemonIntoPokedex, RemovePokemonFromPokedex }}>
          <Switch>
            <Route exact path='/'>
              <PokemonList />
            </Route>
            <Route path='/detail/:pokemonName'>
              <PokemonDetail />
            </Route>
            <Route path='/bag'>
              <PokemonBag />
            </Route>
          </Switch>
        </PokedexContext.Provider>
      </HashRouter>
    </ApolloProvider>
  );
}
export default App;