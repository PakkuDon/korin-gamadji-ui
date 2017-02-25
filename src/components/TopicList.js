import React from 'react';
import TopicListItem from './TopicListItem';

export default class TopicList extends React.Component {
  render() {
    return (
      <div className='mdl-grid topic-list'>
        {this.props.topics.map(t => (
          <TopicListItem key={t.name} topic={t} />
        ))}
      </div>
    );
  }
}
