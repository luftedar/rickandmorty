/* eslint-disable */

import { Route, Switch } from 'react-router-dom';
import Characters from './Characters';
import Home from './Home';
import Locations from './Locations';

function Appcontainer() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route path="/episodes"></Route>
        <Route path="/about">
        </Route>
      </Switch>
    </div>
  );
}

export default Appcontainer;
