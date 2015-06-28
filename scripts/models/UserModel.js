
var Backbone = require('backparse')({
    appId: 'gWIjOx0mqV9PvraF6uytsrs7bZOlfL3w1dURoyIe',
    apiKey: 'HSRvvqGlnOOM2n0jSMMMu3bA54FjYZombRY62V99',
    apiVersion: 1
});

Backbone.$ = require('jquery');
var validator = require('validator');

module.exports = Backbone.Model.extend({
    defaults: {
        username: null,
		password: null,
		emai: null,
    },
    parseClassName: '_User',
    idAttribute: 'objectId',
    isUser: true,
        save: function(key, val, options) {
        this.unset('confirmPassword');
        return Backbone.Model.prototype.save.call(this, key, val, options);
    }
});








