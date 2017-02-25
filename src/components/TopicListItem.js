import React from 'react';
import { Link } from 'react-router';

export default class TopicListItem extends React.Component {
  render() {
    const { topic } = this.props;
    return (
      <div className='mdl-card topic-list-item mdl-cell mdl-cell--4-col'>
        <div className='mdl-card__title'>
          <h2><Link to={`/topics/${topic.id}`}>{topic.name}</Link></h2>
        </div>
        <div className='mdl-card__media'>
          {/* TODO: Remove hard-coded dimensions*/}
          <img width="330px" height="200px" src={topic.image_url} alt={topic.name} />
        </div>
      </div>
    );
  }
}
