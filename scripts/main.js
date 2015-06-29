var React = require('react');
var Backbone = require('backbone');

var Register = require('./components/registrationComponents');
var LogIn = require('./components/logInComponent');
var Home = require('./components/homeComponents');
var NavBar = require ('./components/navBarcomponent');
var UserModel = require('./models/UserModel');

// var NavBarEl= document.getElementById('navigation');
// React.render(<NavBar user={user} />, NavBarEl);

React.render(<NavBar/>, document.querySelector('#container'));

var user = new UserModel();

var App = Backbone.Router.extend({
	routes: {

    'home': 'home',
		'register':'register',
		'login':'login',
    

	},

	  home: function() {
       React.render(<Home/>, document.querySelector('#container'));
    },
    register: function() {
       React.render(<Register/>, document.querySelector('#container'));
    },
    login: function(){
       React.render(<LogIn/>, document.querySelector('#container'));
    },
  

    });

var app = new App();
Backbone.history.start();
app.navigate('home')

