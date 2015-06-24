var React = require('react');
var Backbone = require('backbone');

var Register = require('./components/registrationComponents');

var App = Backbone.Router.extend({
	routes: {
		'register':'register',
		'login':'login'
	},

	// home: function() {
 //       React.render(<Home/>, document.querySelector('#container'));
 //    },
    register: function() {
       React.render(<Register/>, document.querySelector('#container'));
    },
    logIn: function(){
       React.render(<LogIn/>, document.querySelector('#container'));
    }

    });

var app = new App();
Backbone.history.start();
app.navigate('home')

