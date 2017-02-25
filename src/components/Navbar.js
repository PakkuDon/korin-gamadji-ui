import React from 'react';
import { Link } from 'react-router';
import EmergencyButton from './EmergencyButton';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul className="container flex-align-center nav-menu">
          <i className="material-icons icon-account">account_circle</i>
          <li>
            <Link to='/login'>LOGIN/CREATE ACCOUNT</Link>
          </li>
          <li>
            <EmergencyButton />
          </li>
        </ul>
      </nav>
    );
  }
}

