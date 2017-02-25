import React from 'react';
import { Link } from 'react-router';
import logo from '../images/logo.svg';
import Navbar from './Navbar';
import EmergencyButton from './EmergencyButton';

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header container flex-align-center">
        <h1 className="flex-3 heading-gold align-left"><small className="heading-small">The</small> Korin Gamadji <strong className="heading-orange">Institute</strong></h1>
        <EmergencyButton />
{/*        <Navbar />*/}
      </header>
    );
  }
}

