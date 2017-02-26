import React from 'react';

export default class Spinner extends React.Component {
  render() {
    return (
      this.props.isLoading ? (
        <div className='mdl-spinner mdl-js-spinner is-active'></div>
      ) : <div></div>
    );
  }
}
