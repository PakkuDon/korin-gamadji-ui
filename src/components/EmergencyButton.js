import React from 'react';
import { Link } from 'react-router';

export default class EmergencyButton extends React.Component {
  render() {
    return (
      <div className='emergency-button flex-1'>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect btn-large">
          I need help now
          <Link to='/panic'></Link>
        </button>
      </div>
    );
  }
}





