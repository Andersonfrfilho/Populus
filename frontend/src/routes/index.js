import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import Panel from './Drawer';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/drawer" />} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/drawer" component={Panel} />
    </Switch>
  );
}
