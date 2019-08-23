import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Reader from './Reader/Reader/Reader';

const App = () => (
  <Switch>
    <Route path="/reader" exact component={Reader} />
    <Redirect push to="/reader" />
  </Switch>
);

export default App;
