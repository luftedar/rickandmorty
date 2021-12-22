/* eslint-disable */

import { Route, Switch } from 'react-router-dom';
import Characterdetails from './Characterdetails';
import Home from './Home';


function Appcontainer() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/character/:id" children={ <Characterdetails /> }>
          <Characterdetails />
        </Route>
      </Switch>
    </div>
  );
}

export default Appcontainer;
