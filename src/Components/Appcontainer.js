/* eslint-disable */

import { Route, Switch } from 'react-router-dom';
import Characterdetails from './Characterdetails';
import Characters from './Characters';
import Episodes from './Episodes';
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
        <Route path="/episodes">
          <Episodes />
        </Route>
        <Route path="/about">
        </Route>
        <Route path="/character/:id" children={ <Characterdetails /> }>
          <Characterdetails />
        </Route>
      </Switch>
    </div>
  );
}

export default Appcontainer;
