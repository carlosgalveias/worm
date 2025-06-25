/**
 * Dependencies
 */

var path = require('path');
var Waterline = require(path.join(process.cwd(),'lib/waterline.js'));

module.exports = Waterline.Collection.extend({

  identity: 'user',
  connection: 'migratable',

  attributes: {
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    title: 'string',
    phone: 'string',
    type: 'string',
    favoriteFruit: {
      defaultsTo: 'blueberry',
      type: 'string'
    },
    age: 'integer', // integer field that's not auto-incrementable
    dob: 'datetime',
    status: {
      type: 'boolean',
      defaultsTo: false
    },
    percent: 'float',
    list: 'array',
    obj: 'json',
    fullName: function() {
      return this.first_name + ' ' + this.last_name;
    }
  }

});
