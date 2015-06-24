var React = require('react');
var _ = require("backbone/node_modules/underscore");
var Backbone = require('backparse');

var UserModel = require('../models/UserModel');


module.exports = React.createClass({	
	getInitialState: function(){
		return{
			errors:{}
		};
	},
	render: function(){
		return(
			<form onSubmit={this.registerSubmit}>
				<input ref="usernameInput" type="text" placeholder="Enter a Username"/>
				<span className="errors">{this.state.errors.usernameInput}</span> 

				<input ref="emailInput" type="text" placeholder="Enter an Email"/>
				<span className="errors">{this.state.errors.emailInput}</span> 

				<input ref="passwordInput" type="text" placeholder="Enter a Password"/>
				<span className="errors">{this.state.errors.passwordInput}</span> 

				<input ref="passwordConfirm" type="text" placeholder="Confirm Password"/>
				<span className="errors">{this.state.errors.passwordConfirm}</span> 


				<button type="submit">Submit</button>
			</form>
		);

},

	registerSubmit: function(e){
		e.preventDefault();

		var errors = {};
		var newUser = new UserModel({
		email: this.refs.emailInput.getDOMNode().value,
		password: this.refs.passwordInput.getDOMNode().value,
		username: this.refs.usernameInput.getDOMNode().value,
		passwordConfirm: this.refs.passwordConfirm.getDOMNode().value

	});

		var user = new UserModel({
			username: newUsername,
			email: newPassword,
			password: newEmail
		});
		

		if(!user.get('username') || !user.get('password') || !user.get('email') || !confirm){

			if(!user.get('username')){
				errors.username = 'You must enter an Username';
			}
			if(!user.get('email')){
				errors.email = 'You must enter an Email';
			}
			if(!user.get('password')){
				errors.password = 'You must enter a Password';
			}
			if(!confirm){
				errors.passwordConfirm = 'You must confirm Password';
			}

		} else {
			this.setState({errors: errors});
		}
	}

});