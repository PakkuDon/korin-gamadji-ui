import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Topics from './components/Topics';
import Topic from './components/Topic';
import EmergencyPage from './components/EmergencyPage';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/topics' component={Topics} />
    <Route path='/topics/:id' component={Topic} />
    <Route path='/panic' component={EmergencyPage} />
  </Route>
)
