import React from 'react';
import { Link } from 'react-router';
import image from '../images/indigenous_m2081546.jpg';

export default class Topic extends React.Component {
  render() {
    return (
      <div className="topic">
        <h1>Depression</h1>
        <img width="330px" height="200px" src={image} alt="depression" />
        <div>
        	<Link className="mdl-button mdl-button--colored mdl-js-button join-button" to="/">JOIN GROUP</Link>
        </div>

        <div className="mdl-card topic-content">
					<h2 className="topic-header">WHAT IS DEPRESSION?</h2>
					<p>Depression is about a person’s state of mood. When a person has depression (often called clinical depression) they feel very low in mood (sad, unhappy, or ‘down in the dumps’) and also lose interest in activities they used to gain happiness from.</p>
					<p>It is normal for people to feel sad every once in a while, but clinical depression is very different from the occasional feeling of sadness. There are several ways clinical depression differs from the occasional feeling of sadness, they include:</p>
					<ul>
						<li>severity (how serious it is); clinical depression usually ranges from mild to severe</li>
						<li>persistence (strength of the episode)</li>
						<li>duration (how long it lasts)</li>
						<li>the presence of typical symptoms (see next section).</li>
						<li>When people feel sad or ‘down’ for a long time, usually for longer than 2 weeks, they may be depressed. Depression can affect anyone at any age.  </li>
					</ul>
        </div>

      </div>
    );
  }
}
