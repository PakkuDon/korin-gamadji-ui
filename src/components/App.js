import React, { Component } from 'react';
import '../stylesheets/App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;