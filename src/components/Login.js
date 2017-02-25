import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
  render() {
    return (

      <div className="login-page container flex-align-horizontal">

        <div className="mdl-card mdl-shadow--2dp">
	          <div className="mdl-card__title container flex-align-horizontal bg-yellow">
	          	<h1 className="mdl-card__title-text text-white">LOGIN TO YOUR KGI ACCOUNT</h1>
	          </div>
					  <div className="mdl-card__supporting-text bg-darkgrey">
					  	<div className="login-inputs">
								<form action="#">
								  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
								    <input className="mdl-textfield__input bg-light-grey" type="email" id="sample1"/>
								    <label className="mdl-textfield__label" htmlFor="sample1">Email</label>
								  </div>


								  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
								    <input className="mdl-textfield__input bg-light-grey" type="email" id="sample2"/>
								    <label className="mdl-textfield__label" htmlFor="sample2">Password</label>
								  </div>
								</form>
							</div>
					  </div>
				  <div className="mdl-card__actions mdl-card--border bg-darkgrey">
				  	<span className="pad-right-1">Don't have an account?</span>
				  	<Link to='/' className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Sign up!</Link>
				  </div>
        </div>
      </div>

    );
  }
}


