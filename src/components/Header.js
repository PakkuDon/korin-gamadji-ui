import React from 'react';
import Navbar from './Navbar';

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header container flex-align-center">
        <h1 className="flex-3 heading-gold align-left"> Korin Gamadji <strong className="heading-orange">Konnect</strong></h1>
        <Navbar />
      </header>
    );
  }
}
