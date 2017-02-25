import React from 'react';
import { Link } from 'react-router';

export default class EmergencyPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heading-orange">Emergency</h1>
        <ul className="resource-list">
          <li> If this is an emergency please call 000 </li>
          <li> If you are in crisis and need to talk immediately you can contact: </li>
            <ul>
              <li> HeadSpace 1800 650 890 </li>
              <li> Kids Helpline 1800 55 1800 </li>
              <li> MensLine Australia 1300 78 99 78 </li>
              <li> QLife 1800 184 527 </li>
            </ul>
          <li> For a list of resources for various situations visit <a href="https://askizzy.org.au">Ask Izzy</a></li>
        </ul>

      </div>
    );
  }
}
