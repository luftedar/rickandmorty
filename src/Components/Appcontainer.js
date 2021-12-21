import { Route, Switch } from 'react-router-dom';
import Home from './Home';

function Appcontainer() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default Appcontainer
