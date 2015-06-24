var React = require("react");
var UserModel = require("../models/UserModel");

module.exports = React.createClass({
	render: function(){
		return (
			<form onSubmit={this.loginSubmit}>
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
	validateLogIn: function(e){
		e.preventDefault();
		
	}
});