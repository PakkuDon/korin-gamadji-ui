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
								<form className="container flex-align-horizontal direction-col" action="#">
						      <div className="input-block">
							      <label for="email">Email</label>
							      <i className="material-icons form-icon">email</i>
						        <input type="text" className="form-control" />
						      </div>

						      <div className="input-block">
						        <label for="password">Password</label>
						        <i className="material-icons form-icon">lock</i>
						        <input type="text" className="form-control"/>
						      </div>
								</form>
							</div>

							<div>
								<Link className="mdl-button mdl-button--colored mdl-js-button" to="/">LOGIN</Link>
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


