import React from 'react';
import Spinner from './Spinner';
import topics from '../data/topics';
import threads from '../data/threads';

export default class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      var topic = topics.find(t => t.id === parseInt(this.props.params.id));
      var topicThreads = threads.filter(thread => thread.topic_id === parseInt(this.props.params.id));
      if (topic && topicThreads) {
        this.setState({
          topic,
          threads: topicThreads
        });
      }
      this.setState({
        isLoading: false
      });
    }, 5000);
  }

  render() {
    var { topic, threads } = this.state;
    return (
      <div>
        <Spinner isLoading={this.state.isLoading} />
        {topic && (
          <div>
            <h2>{topic.name}</h2>
            <p>
              {topic.description}
            </p>
          </div>
        )}
        {threads && (
          threads.map(t => {
            <div className='thread-item'>
              <h3>{t.title}</h3>
            </div>
          })
        )}
      </div>
    );
  }
}
