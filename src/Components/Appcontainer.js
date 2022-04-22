import { Route, Switch } from 'react-router-dom';
import Characterdetails from './Characterdetails';
import Characters from './Characters';
import Home from './Home';

function Appcontainer() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/character/:id">
          <Characterdetails />
        </Route>
      </Switch>
    </div>
  );
}

export default Appcontainer;
