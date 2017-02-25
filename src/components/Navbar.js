import React from 'react';
import { Link } from 'react-router';
import EmergencyButton from './EmergencyButton';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul className="container flex-align-center nav-menu">
          <li>
            <button className="mdl-button mdl-button--fab mdl-js-button mdl-button--raised mdl-js-ripple-effect btn-login">
              <Link to='/login'></Link>
              <i className="material-icons">account_circle</i>
            </button>
          </li>
          <li>
            <EmergencyButton />
          </li>
        </ul>
      </nav>
    );
  }
}

