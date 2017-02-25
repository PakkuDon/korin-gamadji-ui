import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="video-wrapper">
{/*        <h1>Home</h1>*/}
        <iframe width="854" height="480" src="https://www.youtube.com/embed/oD-UoXUFnvk" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}
