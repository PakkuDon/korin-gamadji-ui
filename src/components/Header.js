import React from 'react';
import { Link } from 'react-router';
import logo from '../images/logo.svg';
import Navbar from './Navbar';

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className=''>
          <Link to='/panic'>Emergency support</Link>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <Navbar />
      </header>
    );
  }
}
