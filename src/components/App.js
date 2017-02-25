import React, { Component } from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import Footer from './Footer';
import users from '../data/users';
import topics from '../data/topics';
import threads from '../data/threads';

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
      },
      topicThreads: {
        isLoading: true,
        threads: []
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
      },
      topicThreads: {
        isLoading: false,
        threads: threads
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
