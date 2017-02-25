import React, { Component } from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import Footer from './Footer';
import users from '../data/users';
import topics from '../data/topics';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: {
        isLoading: true,
        users: []
      },
      availableTopics: {
        isLoading: true,
        topics: []
      }
    }
  }

  componentDidMount() {
    this.setState({
      userList: {
        isLoading: false,
        users: users
      },
      availableTopics: {
        isLoading: false,
        topics: topics
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          {React.cloneElement(this.props.children, this.state)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
