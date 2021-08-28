import React from 'react';
/* @jsx jsx */
import { jsx, css } from '@emotion/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MenuBar from './containers/MenuBar';
import PokemonList from './containers/PokemonList';
import PokemonDetail from './containers/PokemonDetail';

const App = () => {
  return (
    <Router>
      <MenuBar />
      <Switch>
        <Route exact path='/'>
          <PokemonList />
        </Route>
        <Route exact path='/detail/:pokemonName'>
          <PokemonDetail />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;