import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import Login from './Login';
import Topics from './Topics';
import Topic from './Topic';
import EmergencyPage from './EmergencyPage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/topics' component={Topics} />
    <Route path='/topics/:id' component={Topic} />
    <Route path='/panic' component={EmergencyPage} />
  </Route>
)
