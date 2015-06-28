var Backbone = require('backparse')(require('../config/parse'));

module.exports = Backbone.Model.extend({
	defaults: {
		title: '',
		body: '',
		category: ''
	},
	parseClassName: 'post',
	idAttribute: 'objectId',

	validate: function(attr) {
		if(!attrs.title) {
			return 'Please enter a Title';
		}
		if(!attrs.body) {
			return 'Please enter a Body';
		}
		if(!attrs.category) {
			return 'Choose a Category';
		}
	}
});